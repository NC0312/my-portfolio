import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { confirmationEmail } from '../../../lib/emailTemplates';

export async function POST(req) {
    try {
        console.log('Received request for confirmation email');

        const { firstname, lastname, email, service } = await req.json();

        console.log('Sending confirmation to:', email);

        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM_EMAIL) {
            console.error('Missing SMTP configuration');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.verify();
        console.log('Transporter verified successfully');

        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: email,
            subject: 'Thanks for getting in touch',
            html: confirmationEmail({ firstname, service }),
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Confirmation email sent successfully:', info.messageId);

            return NextResponse.json(
                { message: 'Confirmation email sent successfully' },
                { status: 200 }
            );
        } catch (emailError) {
            console.error('Error sending confirmation email:', emailError);
            return NextResponse.json(
                { error: `Confirmation email sending failed: ${emailError.message}` },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('API route error:', error);
        return NextResponse.json(
            { error: `Server error: ${error.message}` },
            { status: 500 }
        );
    }
}

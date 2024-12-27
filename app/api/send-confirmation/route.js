import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

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
            subject: 'Thank you for contacting us',
            html: `
                <h1>Thank you for reaching out, ${firstname} ${lastname}!</h1>
                <p>We have received your message regarding ${service} and will get back to you shortly.</p>
                <p>Best regards,</p>
                <p>Niket Chawla</p>
                <img src="cid:logo" style="width: 100px; height: auto;"/>
            `,
            attachments: [{
                filename: 'logo.png',
                path: path.join(process.cwd(), 'public', 'assets', 'logo.png'),
                cid: 'logo',
            }]
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

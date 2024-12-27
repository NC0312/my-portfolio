import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        console.log('Received contact form submission for notification');

        const { firstname, lastname, email, phone, service, message } = await req.json();

        console.log('Name:', `${firstname} ${lastname}`);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Service:', service);

        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('Missing SMTP configuration');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        console.log('Creating transporter with host:', process.env.SMTP_HOST);
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

        const notificationMailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: process.env.SMTP_USER, // Sending to your email address
            subject: 'New Contact Form Submission',
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        try {
            const info = await transporter.sendMail(notificationMailOptions);
            console.log('Notification email sent successfully:', info.messageId);

            return NextResponse.json(
                { message: 'Notification email sent successfully' },
                { status: 200 }
            );
        } catch (emailError) {
            console.error('Error sending notification email:', emailError);
            return NextResponse.json(
                { error: `Notification email sending failed: ${emailError.message}` },
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
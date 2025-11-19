
// This is a serverless function endpoint, typically located at `/api/contact.ts`.
// To make this work when you deploy your site, you need to:
// 1. Install nodemailer: `npm install nodemailer`
// 2. Set environment variables in your hosting provider (e.g., Vercel, Netlify):
//    - `EMAIL_USER`: Your Gmail address (or other email provider).
//    - `EMAIL_PASS`: An "App Password" for your Gmail account (more secure than your regular password).

// Note: This file uses types from Vercel's serverless functions environment.
// You might need to install them for type checking: `npm install -D @vercel/node`
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }
  
  // Nodemailer transporter setup
  // Use environment variables for security.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'bn73147@gmail.com', // Your receiving email address
    subject: `New message from ${name} via portfolio`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
}

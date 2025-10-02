import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Send an email using Nodemailer
 * @param {{ name: string; email: string; message: string }} param0
 */
const sendMail = async ({ name, email, message }: { name: string; email: string; message: string; }) => {
  console.log('Attempting Gmail connection...');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use SSL port
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Increased timeouts for Render
    connectionTimeout: 30000, // 30 seconds
    greetingTimeout: 30000,
    socketTimeout: 30000,
    // Additional options for cloud environments
    pool: true,
    maxConnections: 1,
    maxMessages: 5
  });

  try {
    console.log('Verifying Gmail connection...');
    await transporter.verify();
    console.log('Gmail connection verified');
  } catch (error) {
    console.error('Gmail connection failed:', error);
    throw new Error(`Cannot connect to Gmail: ${error}`);
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
export default sendMail;

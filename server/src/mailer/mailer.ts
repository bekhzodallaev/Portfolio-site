import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Send an email using Nodemailer
 * @param {{ name: string; email: string; message: string }} param0
 */
const sendMail = async ({ name, email, message }: { name: string; email: string; message: string; }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `From ${name} <${email}>\n\n${message}`,
  };

    return transporter.sendMail(mailOptions, function (err, data){
    if (err) {
        console.log(`Error occured: ${err}`);
    } else {
        console.log('Email Sent Successfully!');
    }
  });
};

export default sendMail;

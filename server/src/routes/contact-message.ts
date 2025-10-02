import express from "express";
import type { Request, Response } from "express";
import sendMail from "../mailer/mailer"

const router = express.Router();

router.post("/", async function (
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    if (!name || !email || !message) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }
    await sendMail(req.body);
    res.status(200).json({ message: "Message sent successfully"});
  } catch (err: any) {
     console.log(err);
    res.status(500).json({ error: err.message || "Something went wrong." });
  }
});

// Add this to your routes for testing
router.get("/test-email", async (req: Request, res: Response) => {
  try {
    console.log('Testing email configuration from Render...');
    
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Attempting connection...');
    await transporter.verify();
    console.log('Connection successful!');
    
    res.json({ 
      status: 'success', 
      message: 'SMTP connection successful',
      emailUser: process.env.EMAIL_USER ? 'set' : 'missing'
    });
    
  } catch (error: any) {
    console.error('SMTP test failed:', error);
    res.status(500).json({ 
      status: 'error', 
      message: error.message,
      code: error.code 
    });
  }
});

export default router;

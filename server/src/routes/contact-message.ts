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


export default router;

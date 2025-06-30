import express from "express";
import type { Request, Response, NextFunction } from "express";
import { createMessage } from "../services/contact-message";
import sendMail from "../mailer/mailer"

const router = express.Router();

router.post("/", async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    const saved = await createMessage({ name, email, message });
    await sendMail(req.body);
    res.status(200).json({ message: "Message saved", data: saved });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Something went wrong." });
  }
});

export default router;

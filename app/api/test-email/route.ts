import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    // Create transporter
 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});



    // Send a test email
    const info = await transporter.sendMail({
      from: `"OCA College" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to yourself first
      subject: "✅ Test Email from Next.js",
      text: "Hello! This is a test email from your Next.js app 🚀",
    });

    return NextResponse.json({ success: true, info });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

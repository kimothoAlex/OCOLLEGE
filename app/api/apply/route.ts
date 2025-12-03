import { NextResponse,  } from "next/server";
import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { name, email, course, phone, intake, kcse } = await req.json();

    if (!name || !email || !phone || !course || !intake || !kcse) {
  return res.status(400).json({ success: false, message: "All fields are required." });
}

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // for local dev
      },
    });

    // 1. Send email to the school
    const schoolMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Admission Application",
    html: `
    <h2>New Student Application</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>KCSE Mean Grade:</b> ${kcse}</p>
    <p><b>Course:</b> ${course}</p>
    <p><b>Preferred Intake:</b> ${intake}</p>
  `,
    };

    // 2. Confirmation email to applicant
    const applicantMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Application Has Been Received",
      text: `Dear ${name},\n\nThank you for applying to Orthodox College of Africa for the course: ${course}.\n\nOur admissions team will review your application and contact you soon.\n\nBest regards,\nOrthodox College of Africa`,
    };

    await transporter.sendMail(schoolMail);
    await transporter.sendMail(applicantMail);

    return NextResponse.json({ success: true, message: "Application submitted successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

import { contactFormSchema } from "@/schema/contactFormSchema";
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // create transporter
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net", // or smtp.yourdomain.com
      port: 465, // use 465 for SSL or 587 for TLS
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const allowedRecipient = "tunde@panzle.com";

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: allowedRecipient,
      subject: `Project Idea`,
      html: `
	 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Panzle Project Inquiry</title>
  <style>
    body {
      font-family: 'Poppins', Arial, sans-serif;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .container {
      max-width: 500px;
      margin: 20px auto;
      border: 1px solid #eee;
      border-radius: 8px;
      padding: 24px;
    }
    .logo {
      display: block;
      margin: 0 auto 20px;
      width: 140px;
    }
    h2 {
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      margin: 8px 0;
    }
    .footer {
      text-align: center;
      font-size: 13px;
      color: #999;
      margin-top: 30px;
      border-top: 1px solid #eee;
      padding-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="https://panzle.com/Panzle.webp" alt="Panzle Logo" class="logo" />
    <h2>New Project Inquiry</h2>
    <p><strong>Name:</strong> ${validatedData.name}</p>
    <p><strong>Email:</strong> ${validatedData.email}</p>
    <p><strong>Project Idea:</strong></p>
    <p>${validatedData.projectIdea}</p>
    <div class="footer">
      © 2025 Panzle. All rights reserved.
    </div>
  </div>
</body>
</html> 
	  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: err.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

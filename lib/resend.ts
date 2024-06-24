"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: FormData) => {
  const { fullName, email, message } = formData;

  await resend.emails.send({
    to: "slobodan.bajic9@gmail.com",
    from: `Dedalus <onboarding@resend.dev>`,
    subject: `Message from ${fullName}`,
    html: `<div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
    <h1 style={{ color: '#4A90E2' }}>Hello, ${fullName}!</h1>
    <p>Thank you for reaching out to us.</p>
    <h3>Here is the message we received from you:</h3>
    <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid #4A90E2', paddingLeft: '10px' }}>
      ${message}
    </blockquote>
    <p>We will get back to you soon at your email: ${email}.</p>
    <p>Best regards,</p>
    <p>Dedalus development</p>
  </div>`,
  });
};

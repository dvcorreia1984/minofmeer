import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.voortrek.co.za',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'yolande@voortrek.co.za',
    pass: process.env.VITE_EMAIL_PASSWORD // Password should be set in environment variables
  }
});

interface EmailParams {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const mailOptions = {
      from: 'yolande@voortrek.co.za',
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html
    };

    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
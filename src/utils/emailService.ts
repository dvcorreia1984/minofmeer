import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS User ID

export const sendEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      templateParams
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
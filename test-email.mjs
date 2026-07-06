import nodemailer from "nodemailer";

async function testEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"미다움 디자인 홈페이지" <${process.env.EMAIL_USER}>`,
      to: "midaum79@gmail.com", // Send to self to test
      subject: "Test Email from Script",
      text: "This is a test email.",
    });

    console.log("Email sent successfully!", info.messageId);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

testEmail();

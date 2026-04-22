import { Resend } from "resend";

const resend = new Resend("re_aARYaTLy_9K6xZijJQt6VdAHNebkxXGHz");

const sendEmail = async (to, otp) => {
  try {
    const response = await resend.emails.send({
      from: "Hichicken <noreply@hichicken.in>",
      to: to,
      subject: "Your OTP Code",
      html: `
        <h2>Password Reset OTP</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP expires in 5 minutes.</p>
      `
    });

    console.log("Email sent:", response);
  } catch (error) {
    console.error("Email error:", error);
  }
};

export default sendEmail;
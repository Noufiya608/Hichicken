import Contact from "../MODEL/contactModel.js";
import { Resend } from "resend";

const resend = new Resend("re_WhFqGFkd_LXTGEQQxKgUx5gU5bixxaVQS");

// 🔹 Send Message + Save + Email
export const sendContact = async (req, res,to) => {
  const { name, email, message } = req.body;

  try {
    // ✅ Save to DB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // ✅ Send Email using Resend
    await resend.emails.send({
      from: "Hi Chicken <onboarding@resend.dev>", // default testing email
      to: to,
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message" });
  }
};
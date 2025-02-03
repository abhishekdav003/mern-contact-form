import nodemailer from "nodemailer";

const sendContactUsEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Sender's email address from .env
        pass: process.env.EMAIL_PASS, // Sender's email password from .env
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email address
      to: "amarjha.tech@gmail.com", // Recipient email address
      subject: `Contact Us Query: ${subject}`,
      text: `
        You have received a new message from the Contact Us form:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
};

export default sendContactUsEmail;

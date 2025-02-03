require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define Schema
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Lead = mongoose.model("Lead", LeadSchema);

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Endpoint for Contact Form Submission
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save lead in DB
    const newLead = new Lead({ name, email, message });
    await newLead.save();

    // Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      text: `Hi ${name},\n\nThank you for reaching out. We will get back to you soon!\n\nYour Message: ${message}\n\nBest Regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Lead submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!", error: err });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

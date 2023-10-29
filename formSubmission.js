const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { name, email, phoneNumber, /* other form fields */ } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "YourEmailService",
    auth: {
      user: "YourEmailAddress",
      pass: "YourEmailPassword",
    },
  });

  // Email content
  const mailOptions = {
    from: "YourEmailAddress",
    to: "RecipientEmailAddress",
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: " + error.message);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 or a port defined in the environment variable



// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit-form", (req, res) => {
    const { selectedDateRange, selectedLocation, name, email, phoneNumber, additionalInfo } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "kelymanhattantours@gmail.com",
            pass: "2*Halskich54",
        },
    });

    // Email content
    const mailOptions = {
        from: "kellymanhattantours@gmail.com",
        to: "recipient@example.com",
        subject: "New Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n
      Dates for Tour: ${selectedDateRange}\nSelected Location: ${selectedLocation}\nAdditional Info: ${additionalInfo}`,
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

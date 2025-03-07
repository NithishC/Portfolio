import express from "express";
import cors from "cors";
import { join } from "path";
import { config } from "dotenv";
import { google } from "googleapis";
import nodemailer from "nodemailer";

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for frontend communication
app.use(cors());
app.use(express.json());

// Serve React frontend
app.use(express.static(join(process.cwd(), "dist"))); // Use process.cwd() for ESM compatibility

// Set up OAuth2 credentials and Gmail API
const OAuth2 = google.auth.OAuth2;

// OAuth2 client setup using credentials
const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

// Set your Gmail OAuth2 refresh token (You can obtain this from OAuth playground or your app)
oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

// Get the access token from the refresh token
async function getAccessToken() {
  const tokens = await oauth2Client.getAccessToken();
  return tokens.token;
}

// Set up nodemailer transporter with OAuth2
async function createTransporter() {
  const accessToken = await getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken,
    },
  });

  return transporter;
}

// Email sending function
async function sendEmail(data) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: `"Contact Form" <${process.env.GMAIL_USER}>`,
    to: "nithishchandrasekar555@gmail.com",
    html: `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

// API Route for sending emails
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const info = await sendEmail({ name, email, subject, message });

    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Catch-all route to serve React app
app.get("*", (req, res) => {
  res.sendFile(join(process.cwd(), "client", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

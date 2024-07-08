const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to send email
app.post('/send-email', async (req, res) => {
  console.log('Received email data:', req.body);
  const {name, from, to, subject, body } = req.body;

  if (!from || !subject || !body) {
    console.log("Missing required fields")
    return res.status(400).json({message: 'Champs obligatoires manquants'});
  }

  // Configure Nodemailer to use MailDev
  const transporter = nodemailer.createTransport({
    host: '127.0.0.1',
    port: 1025,
    ignoreTLS: true
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: `"${name}" vous a envoyé un message : ${subject}`,
    text: body
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail envoyé avec succès' }); // Send JSON response
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: "Erreur lors de l'envoi de l'e-mail" }); // Send JSON response
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

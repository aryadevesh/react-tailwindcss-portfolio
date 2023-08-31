import express, { json } from 'express';
import { createTransport } from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: 'aryadevesh79@gmail.com', // Your Gmail email address
        pass: 'gijtsqpciitjjeow',       // Your Gmail password or an app-specific password
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'aryadevesh79@gmail.com', // Sender address (should be your Gmail)
      to: 'aryadevesh79@gmail.com', // Recipient address
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Email sending failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

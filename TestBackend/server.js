'use strict';
const nodemailer = require('nodemailer');

async function notifyAdmin() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'pluggrupp@gmail.com',
        pass: 'liskov123',
      },
    });

    const info = await transporter.sendMail({
      from: 'pluggrupp@gmail.com',
      to: 'koolting@outlook.com',
      subject: 'Notification',
      text: 'Check this out ...',
    });

    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }
}

async function main() {
  console.log('Sending email...');
  await notifyAdmin();
  console.log('Email sending process completed.');
}

main();

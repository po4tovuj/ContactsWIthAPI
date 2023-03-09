const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'po4tovuj@gmail.com', // Change to your verified sender
  subject: 'Contacts Api verification ',
  // text: 'and easy to do anywhere, even with Node.js',
};
const sendVerification = async (data) => {
  const email = { ...msg, ...data };
  await sgMail
    .send(email)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
  return true;
};
module.exports = sendVerification;

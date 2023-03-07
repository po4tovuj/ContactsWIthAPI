const { v4: uuidv4 } = require('uuid');
const { sendVerification, HttpError } = require('../../helpers');
const { User } = require('../../models');

const resendVerification = async ({ body: { email } }, res) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError({ status: 404, message: 'User not found' });
  }
  if (user.verify) {
    throw HttpError({
      status: 400,
      message: 'Verification has already been passed',
    });
  }
  const verificationToken = uuidv4();
  const emailData = {
    to: email,
    html: `<a target="_blank" href="localhost:3001/api/users/verify/${verificationToken}">Verify your email</a>`,
  };
  await sendVerification(emailData);

  res.json({ message: 'Verification email sent' });
};
module.exports = resendVerification;

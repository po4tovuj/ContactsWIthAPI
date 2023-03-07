const { User } = require('../../models');
const { HttpError, sendVerification } = require('../../helpers');
const { v4: uuidv4 } = require('uuid');
const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError({ status: 409, message: 'Email in use' });
  }
  const verificationToken = uuidv4();
  const emailData = {
    to: email,
    html: `<a target="_blank" href="localhost:3001/api/users/verify/${verificationToken}">Verify your email</a>`,
  };
  const newUser = new User({ email, verificationToken });
  newUser.setPassword(password);
  newUser.createDefaultAvatar();
  newUser.save();
  await sendVerification(emailData);

  res.status(201).json({ user: { email, subscription: 'starter' } });
};
module.exports = signUp;

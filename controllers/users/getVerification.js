const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const getVerification = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError({ status: 404, message: 'User not found' });
  }
  if (user.verify) {
    throw HttpError({
      status: 400,
      message: 'Verification has already been passed',
    });
  }
  await User.findByIdAndUpdate(user._id, { verify: true });

  res.json({ message: 'Verification successful' });
};
module.exports = getVerification;

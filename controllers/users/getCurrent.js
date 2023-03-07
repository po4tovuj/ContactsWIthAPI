const getCurrent = async (req, res) => {
  const { _id, subscription, email, avatarUrl, verify } = req.user;
  res.json({ user: { avatarUrl, email, subscription, _id, verify } });
};

module.exports = getCurrent;

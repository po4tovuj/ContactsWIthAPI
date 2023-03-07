const { ctrlWrapper } = require('../../helpers');
const getCurrent = require('./getCurrent');
const setSubscription = require('./setSubscription');
const logOut = require('./logOut');
const addAvatar = require('./addAvatar');
const getVerification = require('./getVerification');
const resendVerification = require('./resendVerification');
module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  setSubscription: ctrlWrapper(setSubscription),
  logOut: ctrlWrapper(logOut),
  addAvatar: ctrlWrapper(addAvatar),
  getVerification: ctrlWrapper(getVerification),
  resendVerification: ctrlWrapper(resendVerification),
};

const { ctrlWrapper } = require('../../helpers');
const getCurrent = require('./getCurrent');
const setSubscription = require('./setSubscription');
const logOut = require('./logOut');
const addAvatar = require('./addAvatar');
const getVerification = require('./getVerification');
module.exports = {
  getCurrent: ctrlWrapper(getCurrent),
  setSubscription: ctrlWrapper(setSubscription),
  logOut: ctrlWrapper(logOut),
  addAvatar: ctrlWrapper(addAvatar),
  getVerification: ctrlWrapper(getVerification),
};

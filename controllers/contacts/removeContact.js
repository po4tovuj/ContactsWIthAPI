const { Contact } = require('../../models/index');
const { HttpError } = require('../../helpers');
const removeContact = async (req, res) => {
  const { id } = req.params;
  console.log('id: ', id);
  const contactToRemove = await Contact.findById(id);
  console.log('contactToRemove: ', contactToRemove.owner._id.toHexString());
  const { user } = req;
  console.log('user: ', user.id === contactToRemove.owner._id);
  if (user.id !== contactToRemove.owner._id.toHexString()) {
    throw HttpError({
      status: 403,
      message: "You can't remove contact that doesn't belong to your account",
    });
  }
  const removedContact = await Contact.findByIdAndRemove(id);
  if (!removedContact) {
    throw HttpError({
      status: 404,
      message: "You can't remove contact which is not exist",
    });
  }

  res.json({
    id: removeContact.id,
    message: 'Contact deleted',
    code: 204,
  });
};
module.exports = removeContact;

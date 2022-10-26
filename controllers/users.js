const User = require('../models/user');
const { NotFoundError } = require('../middlewares/errors/errors');

module.exports.getUsers = (req, res, next) => {
  const reqQuery = req.query;
  User.find()
    // return the found data to the article
    .then((users) => {
      if (Object.keys(users).length) {
        const filteredUsers = users.filter((user) => {
          let isValid = true;
          // eslint-disable-next-line guard-for-in
          for (const key in reqQuery) {
            isValid = isValid
              && user[key]
              && reqQuery[key].length > 0
              && user[key].includes(reqQuery[key]);
          }
          return isValid;
        });
        res.status(200).send(filteredUsers);
      } else {
        throw new NotFoundError('No result found');
      }
    })
    // if the record was not found, display an error message
    .catch(next);
};

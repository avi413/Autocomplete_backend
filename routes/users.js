const router = require('express').Router(); // creating a router
const { userValidate } = require('../middlewares/validate');
const {
  getUsers,
  saveUser,
} = require('../controllers/users');

router.get('/users', getUsers);

router.post('/users',  userValidate, saveUser,);

router.post('*', (req, res, next) => next());

module.exports = router; // exporting the router

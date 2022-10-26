const router = require('express').Router(); // creating a router
const { NotFoundError } = require('../middlewares/errors/errors');
const users = require('./users');

router.use(users);

router.use((req, res, next) => { next(new NotFoundError('Requested resource not found')); });
module.exports = router;

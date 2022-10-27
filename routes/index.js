const router = require('express').Router(); // creating a router
const { NotFoundError } = require('../middlewares/errors/errors');
const employees = require('./employees');

router.use(employees);

router.use((req, res, next) => { next(new NotFoundError('Requested resource not found')); });
module.exports = router;

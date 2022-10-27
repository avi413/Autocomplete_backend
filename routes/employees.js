const router = require('express').Router(); // creating a router
const { employeeValidate } = require('../middlewares/validate');
const {
  getemployees,
  saveemployee,
} = require('../controllers/employees');

router.get('/employees', getemployees);

router.post('/employees', employeeValidate, saveemployee);

router.post('*', (req, res, next) => next());

module.exports = router; // exporting the router

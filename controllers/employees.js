const Employee = require('../models/employee');
const { NotFoundError } = require('../middlewares/errors/errors');

module.exports.getemployees = (req, res, next) => {
  const reqQuery = req.query;
  Employee.find()
    // return the found data to the article
    .then((employees) => {
      if (Object.keys(employees).length) {
        const filteredemployees = employees.filter((employee) => {
          let isValid = true;
          // eslint-disable-next-line guard-for-in
          for (const key in reqQuery) {
            isValid = isValid
              && employee[key]
              && reqQuery[key].length > 0
              && employee[key].includes(reqQuery[key]);
          }
          return isValid;
        });
        res.status(200).send(filteredemployees);
      } else {
        throw new NotFoundError('No result found');
      }
    })
    // if the record was not found, display an error message
    .catch(next);
};

module.exports.saveemployee = (req, res, next) => {
  Employee.create({ ...req.body })
      .then((article) => res.status(201).send({ data: article }))
      .catch(next);
  };

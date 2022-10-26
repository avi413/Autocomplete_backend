const { celebrate, Joi } = require('celebrate');

module.exports.userValidate = celebrate({
    body: Joi.object().keys({
      Name: Joi.string().required().min(2),
      WorkTitle: Joi.string().required().min(2),
      ImageUrl: Joi.string().required(),
    }),
  });

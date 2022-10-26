const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Jhon Due',
  },
  WorkTitle: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Doctor',
  },
  ImageUrl: {
    type: String,
    default: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    validate: {
      // describe the validate feature
      validator(value) {
        // validator is a data validation feature. v is the age value
        const regex = /^(http|https?):\/\/+(www\.)?[.a-z0-9\s]{3,}\.[a-z]{2,3}(\/#?[.a-z0-9\s])?/;
        return regex.test(value);
      },
      message: 'Must be a Valid URL', // when the validator returns false, this message will be displayed
    },
  },
});

module.exports = mongoose.model('user', userSchema);

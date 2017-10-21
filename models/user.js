const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  email: {
    type: String,
    required: [true, 'E-mail is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  type: {
    type: String,
    default: 'user',
  },
});

module.exports = mongoose.model('user', UserSchema);

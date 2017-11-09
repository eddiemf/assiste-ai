const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  email: {
    type: String,
    required: [true, 'E-mail is required.'],
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'E-mail must be valid.'],
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

UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    next();
    return;
  }

  bcrypt.hash(user.password, 12).then((hash) => {
    user.password = hash;
    next();
  }).catch(err => next(err));
});

UserSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    next({
      errors: {
        email: {
          message: 'Email must be unique.',
          name: 'ValidationError',
        },
        name: 'ValidationError',
      },
    });
    return;
  }
  next(error);
});

UserSchema.methods = {
  comparePassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password)
        .then(matched => resolve(matched))
        .catch(err => reject(err));
    });
  },
};

module.exports = mongoose.model('user', UserSchema);

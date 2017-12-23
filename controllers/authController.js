const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

const User = mongoose.model('user');

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({
      errors: [{
        title: 'Invalid e-mail or password.',
        details: 'You have entered an invalid e-mail address or password.',
      }],
    });
    return;
  }

  const findUser = User.findOne({ email }).exec();

  findUser
    .then((user) => {
      if (user) return user.comparePassword(password);

      return res.json({
        errors: [{
          title: 'E-mail not found.',
          details: 'The e-mail you provided does not match any user.',
        }],
      });
    })
    .then((matched) => {
      if (!matched) {
        res.json({
          errors: [{
            title: 'Wrong password.',
            details: 'The password you entered does not match the e-mail provided.',
          }],
        });
        return;
      }

      const user = findUser;
      const token = jwt.sign({
        id: user.id,
        type: user.type,
      }, config.app.secret, { expiresIn: '24h' });

      res.json({
        data: {
          type: 'authentication_token',
          attributes: { token },
        },
      });
    })
    .catch(() => res.status(500));
};

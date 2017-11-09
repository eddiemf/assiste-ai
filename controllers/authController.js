const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

const User = mongoose.model('user');

exports.login = (req, res) => {
  const { email, password } = req.body;

  setTimeout(() => {
    res.status(200).json({ token: 'akjsnd' });
  }, 2000);
  return;

  User.findOne({ email }).then((user) => {
    if (!user) {
      res.json({
        errors: {
          user: {
            message: 'Invalid e-mail or password.',
          },
        },
      });
      return;
    }

    user.comparePassword(password).then((matched) => {
      if (!matched) {
        res.json({
          errors: {
            user: {
              message: 'Invalid e-mail or password.',
            },
          },
        });
        return;
      }

      const token = jwt.sign({
        id: user.id,
        type: user.type,
      }, config.app.secret, { expiresIn: '24h' });

      res.json(200, { token });
    }).catch(err => res.status(500).json(err));
  }).catch(err => res.status(500).json(err));
};

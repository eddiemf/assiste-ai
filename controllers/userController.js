const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

const User = mongoose.model('user');

exports.store = (req, res) => {
  const { name, email, password } = req.body;

  User.create({ name, email, password })
    .then((user) => {
      const token = jwt.sign({
        id: user.id,
        type: user.type,
        userName: user.name,
        userPicture: null,
      }, config.app.secret, { expiresIn: '24h' });

      res.json({
        data: {
          type: 'authentication_token',
          attributes: { token },
        },
      });
    })
    .catch((response) => {
      if (response.errors) {
        const errors = Object.keys(response.errors).map(key => response.errors[key]);

        res.json({
          errors: errors.map(error => ({
            title: error.message,
            details: error.message,
          })),
        });
        return;
      }

      res.status(500).json({
        errors: [{
          title: 'Something went wrong.',
          details: 'Something went wrong while trying to register a new account. Try again later.',
        }],
      });
    });
};

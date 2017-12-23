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
    .catch(() => res.status(500));
};

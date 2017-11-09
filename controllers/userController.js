const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

const User = mongoose.model('user');

exports.store = (req, res) => {
  const { name, email, password } = req.body;
  res.status(500).json('akjsnd');

  User.create({ name, email, password })
    .then((user) => {
      const token = jwt.sign({
        id: user.id,
        type: user.type,
      }, config.app.secret, { expiresIn: '24h' });

      res.json({ token });
    }).catch(err => res.json(err));
};

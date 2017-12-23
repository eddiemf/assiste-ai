const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

const User = mongoose.model('user');

exports.login = async (req, res) => {
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

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.json({
        errors: [{
          title: 'E-mail not found.',
          details: 'The e-mail you provided does not match any user.',
        }],
      });
      return;
    }

    const matched = await user.comparePassword(password);

    if (!matched) {
      res.json({
        errors: [{
          title: 'Wrong password.',
          details: 'The password you entered does not match the e-mail provided.',
        }],
      });
      return;
    }

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
  } catch (err) {
    res.status(500);
  }
};

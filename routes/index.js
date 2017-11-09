const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// Authentication
router.post('/login', authController.login);

// Users
router.post('/users', userController.store);

module.exports = router;

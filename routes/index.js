const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Authentication
router.post('/login', authController.login);

// Users
router.post('/users', userController.store);

// Movies
router.get('/movies', movieController.index);
router.post('/movies', movieController.store);

module.exports = router;

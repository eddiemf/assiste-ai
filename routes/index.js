const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.store);

module.exports = router;

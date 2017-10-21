const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = Promise;

// Models
require('../models/user');

mongoose.connect(config.mongodb.host, { useMongoClient: true });

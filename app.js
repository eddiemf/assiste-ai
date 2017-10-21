require('dotenv').load();
const express = require('express');
const config = require('./config');
require('./database');
const routes = require('./routes');

const app = express();

app.use(routes);
app.listen(config.express.port, config.express.ip);

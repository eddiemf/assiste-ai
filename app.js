require('dotenv').load();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
require('./database');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);
app.listen(config.express.port, config.express.ip);

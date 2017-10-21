const config = {};
const PRODUCTION = process.env.NODE_ENV === 'production';

config.app = {
  secret: process.env.SECRET || 'secret',
};

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: process.env.EXPRESS_IP || 'localhost',
};

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST,
};

config.facebook = {
  app_id: process.env.FACEBOOK_APP_ID,
  app_secret: process.env.FACEBOOK_APP_SECRET,
  app_access_token: process.env.FACEBOOK_APP_ACCESS_TOKEN,
};

if (PRODUCTION) {
  config.express.ip = '0.0.0.0';
}

module.exports = config;

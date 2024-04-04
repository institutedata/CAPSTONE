/** @format */

// Contains global data related to the database including name,user,password and host details. The information is pulled from key in the constants folder which is a private folder

const { KEY } = require('../constant');
const { config } = require('dotenv');
config();

const GLOBAL = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  OPTION: {
    host: process.env.DB_HOST,
    dialect: KEY.MY_SQL,
  },
};

module.exports = GLOBAL;

const dotenv = require("dotenv");

let envFound = dotenv.config();

if (!envFound) throw new Error("Cannot read .env variables");

module.exports = {
  port: parseInt(process.env.PORT),
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
};

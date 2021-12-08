const mysql = require("mysql");
const config = require("../../config");

const connection = mysql.createPool(config.mysql);

const query = (querystring, values) => {
  return new Promise((resolve, reject) => {
    connection.query(querystring, values, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = query;

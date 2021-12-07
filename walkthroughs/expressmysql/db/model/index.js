const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "bestbuy",
};

const connection = mysql.createPool(config);

const query = (querystring, values) => {
  return new Promise((resolve, reject) => {
    connection.query(querystring, values, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = query;

const mysql = require("mysql2");
require("dotenv-safe").config({
  allowEmptyValues: true
});

const config = {
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME
};

const connection = mysql.createConnection(config);

connection.query(
  'SELECT * FROM product',
  function(err, results) {
    console.log(results); // results contains rows returned by server
  }
);

connection.connect();

export default connection;

const config = require('../config');

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = config.db.mysql

var mysql = require('mysql');
var conn = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;
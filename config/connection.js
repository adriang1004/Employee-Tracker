const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'password', // replace with mysql password
  database: 'company_db' 
},
  console.log('Connected to company_db database.')
);


module.exports = connection;

const connection = require('../config/connection');

class Query {
  static async viewAll(table) {
    return await connection.promise().query(`SELECT * FROM ??`, table);
  }

  static async addDepartment(name) {
    return await connection.promise().query(`INSERT INTO department (name) VALUES (?)`, [name]);
  }

  // Additional methods for roles, employees, etc...
}

module.exports = Query;

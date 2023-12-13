const db = require('../config/connection');

class Role {
    constructor() {}
      addRole(title, salary, departmentId) {
      const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
  
      db.query(sql, [title, salary, departmentId], (err, result) => {
        if (err) {
          console.error('Error adding role: ' + err.message);
          return;
        }
        console.log('Role added successfully.');
      });
    }
    viewAllRoles() {
      const sql = 'SELECT * FROM role';
  
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Error fetching roles: ' + err.message);
          return;
        }
        console.log('List of roles:');
        results.forEach((role) => {
          console.log(`ID: ${role.id}, Title: ${role.title}, Salary: ${role.salary}`);
        });
      });
    }
  }
  

module.exports = Role;

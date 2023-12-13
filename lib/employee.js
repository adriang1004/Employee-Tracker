const db = require('../config/connection');

class Employee {
    constructor() {}

      addEmployee(firstName, lastName, roleId, managerId) {
      const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  
      db.query(sql, [firstName, lastName, roleId, managerId], (err, result) => {
        if (err) {
          console.error('Error adding employee: ' + err.message);
          return;
        }
        console.log('Employee added successfully.');
      });
    }
    viewAllEmployees() {
      const sql = 'SELECT * FROM employee';
  
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Error fetching employees: ' + err.message);
          return;
        }
        console.log('List of employees:');
        results.forEach((employee) => {
          console.log(`ID: ${employee.id}, First Name: ${employee.first_name}, Last Name: ${employee.last_name}`);
        });
      });
    }
  }
  
module.exports = Employee;

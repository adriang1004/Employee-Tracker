const db = require('../config/connection');

class Department {
    constructor() {}
    addDepartment(name) {
      const sql = 'INSERT INTO department (name) VALUES (?)';
  
      db.query(sql, [name], (err, result) => {
        if (err) {
          console.error('Error adding department: ' + err.message);
          return;
        }
        console.log('Department added successfully.');
      });
    }
  
    viewAllDepartments() {
      const sql = 'SELECT * FROM department';
  
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Error fetching departments: ' + err.message);
          return;
        }
        console.log('List of departments:');
        results.forEach((department) => {
          console.log(`ID: ${department.id}, Name: ${department.name}`);
        });
      });
    }
    deleteDepartment(departmentId) {
        const sql = 'DELETE FROM department WHERE id = ?';
        db.query(sql, [departmentId], (err, result) => {
          if (err) {
            console.error('Error deleting department: ' + err.message);
            return;
          }
          console.log('Department deleted successfully.');
        });
      }
    
  }
  

module.exports = Department;

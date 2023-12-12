const inquirer = require('inquirer');
const connection = require('./config/connection');
const Department = require('../lib/department');
const Role = require('../lib/role');
const Employee = require('../lib/employee');

const promptUser = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
          case 'View all departments':
              viewAllDepartments();
              break;
              case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Exiting application');
                process.exit();

      }
  });
};

  promptUser();
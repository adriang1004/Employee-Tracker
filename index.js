const inquirer = require('inquirer');
const db = require('./config/connection');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');

const employee = new Employee();

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
        'Delete a department',
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
        case 'Delete a department':
          deleteDepartment();
          break;
        case 'Exit':
          console.log('Exiting application');
          process.exit();

      }
    });
};
const viewAllDepartments = async () => {
  const department = new Department();
  const departments = await department.viewAllDepartments();
  console.table(departments);
  promptUser();
};

const viewAllRoles = async () => {
  const role = new Role();
  const roles = await role.viewAllRoles();
  console.table(roles);
  promptUser();
};

const viewAllEmployees = async () => {
  const employee = new Employee();
  const employees = await employee.viewAllEmployees();
  console.table(employees);
  promptUser();
};

const addDepartment = async () => {
  const { name } = await inquirer.prompt([{ type: 'input', name: 'name', message: 'Enter department name:' }]);
  const department = new Department();
  await department.addDepartment([name]);
  console.log('Department added successfully.');
  promptUser();
};

const addRole = async () => {
  const { title, salary, department_id } = await inquirer.prompt([
    { type: 'input', name: 'title', message: 'Enter role title:' },
    { type: 'input', name: 'salary', message: 'Enter role salary:' },
    { type: 'input', name: 'department_id', message: 'Enter department ID for this role:' },
  ]);

  const role = new Role();
  await role.addRole(title, salary, department_id);
  console.log('Role added successfully.');
  promptUser();
};

const addEmployee = async () => {
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'Enter employee first name:' },
    { type: 'input', name: 'last_name', message: 'Enter employee last name:' },
    { type: 'input', name: 'role_id', message: 'Enter role ID for this employee:' },
    { type: 'input', name: 'manager_id', message: 'Enter manager ID for this employee (if applicable):' },
  ]);

  const employee = new Employee();
  await employee.addEmployee(first_name, last_name, role_id, manager_id);
  console.log('Employee added successfully.');
  promptUser();
};

const updateEmployeeRole = async (employees) => {
  if (!Array.isArray(employees)) {
    console.error('No employees found.');
    promptUser();
    return;
  }
  const employeeChoices = [];
  for (const employee of employees) {
    employeeChoices.push({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    });
  }

  const { employeeId, roleId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Select an employee to update:',
      choices: employeeChoices,
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the new role ID for the selected employee:',
    },
  ]);

  await employee.updateEmployeeRole(employeeId, roleId);
  console.log('Employee role updated successfully.');
  promptUser();
};
const deleteDepartment = async () => {
  const { departmentId } = await inquirer.prompt([{ type: 'input', name: 'departmentId', message: 'Enter department ID to delete:' }]);
  const department = new Department();
  department.deleteDepartment(departmentId, (err) => {
    if (err) {
      console.error('Error deleting department');
    } else {
      console.log('Deleted department successfully');
      promptUser();

    }
  });
};

promptUser();
USE company_db;

INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000.00, 1), ('Software Engineer', 120000.00, 2), ('Accountant', 75000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Smith', 2, NULL), ('Mike', 'Ike', 3, 1);
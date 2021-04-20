const { prompt } = require("inquirer");
require("console.table");
const db = require("./db");

async function init() {
  const { choose } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View employees",
          value: "VIEW-EMPLOYEES",
        },
        {
          name: "Add an employee",
          value: "ADD-EMPLOYEE",
        },
        {
          name: "View roles",
          value: "VIEW-ROLES",
        },
        {
          name: "Add a role",
          value: "ADD-ROLE",
        },
        {
          name: "View departments",
          value: "VIEW-DEPARTMENTS",
        },
        {
          name: "Add a department",
          value: "ADD-DEPARTMENT",
        },
        {
          name: "Update an employee role",
          value: "UPDATE-EMPLOYEE_ROLE",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]);

  switch (choose) {
    case "VIEW-EMPLOYEES":
      return viewEmployees();
    case "ADD-EMPLOYEE":
      return addEmployee();
    case "VIEW-ROLES":
      return viewRoles();
    case "ADD-ROLE":
      return addRole();
    case "VIEW-DEPARTMENTS":
      return viewDepartments();
    case "ADD-DEPARTMENT":
      return addDepartment();
    case "UPDATE-EMPLOYEE-ROLE":
      return updateEmployeeRole();
    default:
      return quit();
  }
}

async function viewEmployees() {
  const employees = await db.getEmployees();

  console.table(employees);

  init();
}

async function addEmployee() {
  const roles = await db.getRoles();

  const employee = await prompt([
    {
      name: "first_name",
      message: "Enter the employee's first name: ",
    },
    {
      name: "last_name",
      message: "Enter the employee's last name: ",
    },
  ]);

  const roleSelect = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleId } = await prompt({
    type: "list",
    name: "roleId",
    message: "Enter the employee's role: ",
    choices: roleSelect,
  });

  employee.role_id = roleId;

  await db.createEmployee(employee);

  console.log(`${employee.first_name} ${employee.last_name} created!`);

  init();
}

async function viewRoles() {
  const roles = await db.getRoles();

  console.table(roles);

  init();
}

async function addRole() {
  const departments = await db.getDepartments();

  const departmentSelect = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));

  const role = await prompt([
    {
      name: "title",
      message: "Enter the role: ",
    },
    {
      name: "salary",
      message: "Enter the salary for the role: ",
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department is the role associated with: ",
      choices: departmentSelect,
    },
  ]);

  await db.createRole(role);

  console.log(`${role.title} created!`);

  init();
}

async function viewDepartments() {
  const departments = await db.getDepartments();

  console.table(departments);

  init();
}

async function addDepartment() {
  const department = await prompt([
    {
      name: "name",
      message: "Enter the name of the department: ",
    },
  ]);

  await db.createDepartment(department);

  console.log(`${department.name} created!`);

  init();
}

async function updateEmployeeRole() {
  const employees = await db.getEmployees();

  const employeeSelect = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select the employee: ",
      choices: employeeSelect,
    },
  ]);

  const roles = await db.getRoles();

  const roleSelect = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Select the employee role: ",
      choices: roleSelect,
    },
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  console.log("Updated!");

  init();
}

function quit() {
  process.exit();
}

init();

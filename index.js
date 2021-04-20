const { prompt } = require("inquirer");
require("console.table");

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
          name: "View employees by department",
          value: "VIEW-EMPLOYEES-BY-DEPARTMENT",
        },
        {
          name: "View employees by manager",
          value: "VIEW-EMPLOYEES-BY-MANAGER",
        },
        {
          name: "Add an employee",
          value: "ADD-EMPLOYEE",
        },
        {
          name: "Remove an employee",
          value: "REMOVE-EMPLOYEE",
        },
        {
          name: "Update an employee role",
          value: "UPDATE-EMPLOYEE_ROLE",
        },
        {
          name: "Update an employee's manager",
          value: "UPDATE-EMPLOYEE-MANAGER",
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
          name: "Remove a role",
          value: "REMOVE-ROLE",
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
          name: "Remove a department",
          value: "REMOVE-DEPARTMENT",
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
    case "VIEW-EMPLOYEES-BY-DEPARTMENT":
      return viewEmployeesByDepartment();
    case "VIEW-EMPLOYEES-BY-MANAGER":
      return viewEmployeesByManager();
    case "ADD-EMPLOYEE":
      return addEmployee();
    case "REMOVE-EMPLOYEE":
      return removeEmployee();
    case "UPDATE-EMPLOYEE-ROLE":
      return updateEmployeeRole();
    case "UPDATE-EMPLOYEE-MANAGER":
      return updateEmployeeManager();
    case "VIEW-DEPARTMENTS":
      return viewDepartments();
    case "ADD-DEPARTMENT":
      return addDepartment();
    case "REMOVE-DEPARTMENT":
      return removeDepartment();
    case "VIEW-ROLES":
      return viewRoles();
    case "ADD-ROLE":
      return addRole();
    case "REMOVE-ROLE":
      return removeRole();
    default:
      return quit();
  }
}

init();

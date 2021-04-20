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
          name: "Add an employee",
          value: "ADD-EMPLOYEE",
        },
        {
          name: "Update an employee role",
          value: "UPDATE-EMPLOYEE_ROLE",
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
    case "ADD-EMPLOYEE":
      return addEmployee();
    case "UPDATE-EMPLOYEE-ROLE":
      return updateEmployeeRole();
    case "VIEW-DEPARTMENTS":
      return viewDepartments();
    case "ADD-DEPARTMENT":
      return addDepartment();
    case "VIEW-ROLES":
      return viewRoles();
    case "ADD-ROLE":
      return addRole();
    default:
      return quit();
  }
}

init();

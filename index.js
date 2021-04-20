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

init();

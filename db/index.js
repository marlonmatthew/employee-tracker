const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  getEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary"
    );
  }

  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  getRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name AS department"
    );
  }

  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  getDepartments() {
    return this.connection.query("SELECT department.id, department.name");
  }

  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

  updateEmployeeRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }
}

module.exports = new DB(connection);

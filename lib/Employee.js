class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    // console.log(` name: ${this.name} id: ${this.id} email: ${this.email} role: ${this.role}` )
  }

  // returns an object with the employee's name
  getName() {
    return `${this.name}`;
  }

  // returns an object with the employee's id
  getId() {
    return this.id;
  }

  // returns an object with the employee's email
  getEmail() {
    return `${this.email}`;
  }

  // returns an object with the employee's role as 'Employee'
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;

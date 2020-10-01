class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
   
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

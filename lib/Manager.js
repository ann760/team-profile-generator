const Employee = require ('../lib/Employee') 

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }

  // returns an object with office number's role
  getOfficeNumber() {
    return `${this.officeNumber}`;
  }

  // override to return 'Manager' returns an object with employee's role
  getRole() {
    return "Manager";
  }
}


module.exports = Manager;

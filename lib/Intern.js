const Employee = require ('../lib/Employee') 

class Intern extends Employee{
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
  }

  // returns an object with the intern's school
  getSchool() {
    return `${this.school}`;
  }

  // returns an object with the intern's role
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

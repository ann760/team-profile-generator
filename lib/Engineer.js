const Employee = require ('../lib/Employee') 

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github;
  }

  // returns an object with the engineer's role
  getGithub() {
    return `${this.github}`;
  }

  // returns an object with the engineer's role
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;

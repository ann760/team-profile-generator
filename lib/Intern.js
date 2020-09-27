class Intern {
  constructor(name, id, email, school) {
    super(name, id, email);
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

class Engineer {
  constructor(name, id, email, github) {
    super(name, id, email);
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

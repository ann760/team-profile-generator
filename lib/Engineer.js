function Engineer(name, id, email, github) {
    super(name, id, email);
    this.github = github;
};

// returns an object with the engineer's role
Engineer.prototype.getGithub = function () {
    return `${this.github}`;
    
};

// returns an object with the engineer's role
Engineer.prototype.getRole = function () {
    return "Engineer";
    
};

module.exports = Engineer;
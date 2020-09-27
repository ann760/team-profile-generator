function Engineer(github) {
    this.github = github // GitHub username
};

// returns an object with the engineer's role
Engineer.prototype.getGithub = function () {
    return `${this.github}`;
    
};

// returns an object with the engineer's role
Engineer.prototype.getRole = function () {
    return `${this.role}`;
    
};
// getGithub()
// getRole() // Overridden to return 'Engineer'

module.exports = Engineer;
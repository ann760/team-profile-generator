function Manager(github ) {
    this.github  = github // GitHub username
}

// returns an object with the engineer's role
Employee.prototype.getGithub = function () {
    return `${this.github}`;
    
};

// returns an object with the engineer's role
Employee.prototype.getRole = function () {
    return `${this.role}`;
    
};
getGithub()
getRole() // Overridden to return 'Engineer'
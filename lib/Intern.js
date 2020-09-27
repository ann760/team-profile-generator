function Intern(school) {
    this.school = school
}

// returns an object with the intern's school
Intern.prototype.getSchool = function () {
    return `${this.school}`;
    
};

// returns an object with the intern's role
Intern.prototype.getRole = function () {
    return `${this.role}`;
    
};

// getSchool()
// getRole() // Overridden to return 'Intern'

module.exports = Intern;
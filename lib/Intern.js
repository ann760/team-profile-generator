function Intern(school) {
    this.school = school
}

// returns an object with the intern's school
Employee.prototype.getSchool = function () {
    return `${this.school}`;
    
};

// returns an object with the intern's role
Employee.prototype.getRole = function () {
    return `${this.role}`;
    
};

// getSchool()
// getRole() // Overridden to return 'Intern'
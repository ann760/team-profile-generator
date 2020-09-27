function Intern(name, id, email, school) {
    super(name, id, email);
    this.school = school;
}

// returns an object with the intern's school
Intern.prototype.getSchool = function () {
    return `${this.school}`;
    
};

// returns an object with the intern's role
Intern.prototype.getRole = function () {
    return "Intern";
    
};

module.exports = Intern;
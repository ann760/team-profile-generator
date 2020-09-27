function Manager(officeNumber) {
    this.officeNumber = officeNumber
}

// returns an object with employee's role
Employee.prototype.getRole = function () {
    return `${this.role}`;
    
};
getRole() // Overridden to return 'Manager'
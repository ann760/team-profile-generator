function Manager(officeNumber) {
    this.officeNumber = officeNumber
}

// returns an object with employee's role
Manager.prototype.getRole = function () {
    return `${this.role}`;
    
};
getRole("Manager") // Overridden to return 'Manager'

module.exports = Manager;
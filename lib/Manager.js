class Manager{
constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
}

// returns an object with office number's role 
officeNumber() {
    return `${this.officeNumber}`;  
};

// override to return 'Manager' returns an object with employee's role 
getRole() {
    return "Manager";  
};
}


module.exports = Manager;
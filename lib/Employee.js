function Employee(name, id, email, role) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;
  console.log(` name: ${this.name} id: ${this.id} email: ${this.email} role: ${this.role}` )
};

// returns an object with employee's name
Employee.prototype.getName = function () {
  return `${this.name}`;
  
};

// returns an object with employee's id
Employee.prototype.getId = function () {
  return `${this.id}`;
};

// returns an object with employee's email
Employee.prototype.getEmail = function () {
  return `${this.email}`;
};
// returns an object with employee's role as 'Employee'
Employee.prototype.getRole = function () {
  return `${this.role}`;
};

module.exports = Employee;

const Manager = require("../lib/Manager");
const manager = new Manager("Dave", 1, "dave@email","ann760")

test("gets the managerr's github", () => {
    
    expect(manager.officeNumber).toEqual(expect.any(String));
  });

  test("gets the employee's role", () => {
    expect(manager.getRole()).toEqual(expect.any(String));
  });
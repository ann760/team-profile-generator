const Employee = require("../lib/Employee");
const employee = new Employee("Dave", 1, "dave@email", "Employee");

test("create an employee object", () => {
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(0);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email.length).toBeGreaterThan(0);
  expect(employee.email).toMatch(/@/);
});

test("gets the employee's name", () => {
  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getName().length).toBeGreaterThan(0);
});

 test("gets the employee's id", () => {
   //expect(employee.getId()).toEqual(expect.any(Number));
 });

test("gets the employee's email", () => {
  expect(employee.getEmail()).toEqual(expect.any(String));
  expect(employee.getEmail().length).toBeGreaterThan(0);
  expect(employee.getEmail()).toMatch(/@/);
});

test("gets the employee's role", () => {
  expect(employee.getRole()).toEqual(expect.any(String));
});

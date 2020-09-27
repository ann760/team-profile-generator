const Intern = require("../lib/Intern");
const intern = new Intern("Dave", 1, "dave@email","school")

test("gets the intern's school", () => {
    expect(intern.school).toEqual(expect.any(String));
  });

  test("gets the intern's school", () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
  }); 

  test("gets the employee's role", () => {
    expect(intern.getRole()).toEqual(expect.any(String));
  });
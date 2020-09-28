const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Dave", 1, "dave@email","Engineer", "ann760")

test("gets the engineer's github", () => {
    
    expect(engineer.github).toEqual(expect.any(String));
  });

  test("gets the employee's role", () => {
    expect(engineer.getRole()).toEqual(expect.any(String));
  });
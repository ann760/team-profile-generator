const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Dave", 1, "dave@email","ann760")

test("gets the engineer's github", () => {
    
    expect(engineer.github).toEqual(expect.any(String));
  });
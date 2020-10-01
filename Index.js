const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const fs = require("fs");
//const writeFile = require('./utils/generate-site.js');
//const copyFile = require('./utils/generate-site.js');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teamData = {};

const promptManager = () => {
  if (!teamData.manager) {
    teamData.manager = [];
  }

  console.log(`
  =================
  Add a Manager
  =================
  `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter the Team Manager's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter Manager's employee id (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter Manager's email (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's employee office number (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter phone number!");
            return false;
          }
        },
      },
    ])
    .then((employeeData) => {
      const manager = new Manager(
        employeeData.managerName,
        employeeData.id,
        employeeData.email,
        "Manager",
        employeeData.officeNumber
      );
      teamData.manager.push(manager);
    });
};

const promptEngineer = () => {
  // If there's no 'engineer' array property, create one
  if (!teamData.engineers) {
    teamData.engineers = [];
  }
  console.log(`
  =================
  Add a New Engineer
  =================
  `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer's id (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter engineer's email (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter GitHub!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another Employee",
        default: false,
      },
    ])
    .then((employeeData) => {
      const engineer = new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        "Engineer",
        employeeData.github
      );
      teamData.engineers.push(engineer);
      if (employeeData.confirmAddEmployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

const promptIntern = () => {
  // If there's no 'employees' array property, create one
  if (!teamData.interns) {
    teamData.interns = [];
  }
  console.log(`
      =================
      Add a New Intern
      =================
      `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter intern's id (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter intern's email (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter school!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another Employee?",
        default: false,
      },
    ])
    .then((employeeData) => {
      const intern = new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        "Intern",
        employeeData.school
      );
      teamData.interns.push(intern);
      if (employeeData.confirmAddEmployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

const promptEmployee = (teamData) => {
  let employeeType = {
    type: "list",
    name: "eType",
    message: "Select the employee type? (Required)",
    choices: ["Engineer", "Intern"],
  };
  return inquirer.prompt(employeeType).then((type) => {
    if (type.eType === "Engineer") {
      return promptEngineer();
    } else {
      return promptIntern();
    }
  });
  console.log(checkType);
};

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if bad, reject the Promise and send the error to the `.catch()` method
      if (err) {
        reject(err);
        // return out of the function
        return;
      }
      // if good, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  //return new Promise((resolve, reject) => {
  fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
    if (err) {
      console.log(err);
      return;
    }
  })
};

promptManager()
  .then(promptEmployee)
  .then((teamData) => {
    //  console.log(teamData);
    return generatePage(teamData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });

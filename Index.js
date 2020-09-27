const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const teamData = [];

const promptManager = () => {
  return inquirer.prompt([
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
  ]);
};

const promptEngineer = () => {
  // If there's no 'engineer' array property, create one
  if (!teamData.engineer) {
    teamData.engineer = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Enter the employee's GitHub? (Required)",
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
      teamData.engineer.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        return promptEmployee(teamData);
      } else {
        console.log(teamData);
        return teamData;
      }
    });
};

const promptIntern = () => {
  // If there's no 'employees' array property, create one
  if (!teamData.intern) {
    teamData.intern = [];
  }
  return inquirer
    .prompt([
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
      teamData.intern.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        return promptEmployee(teamData);
      } else {
        console.log(teamData);
        return teamData;
      }
    });
};

const promptEmployee = (teamData) => {
  // If there's no 'employees' array property, create one
  if (!teamData.employee) {
    teamData.employee = [];
  }

  console.log(`
      =================
      Add a New Employee
      =================
      `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the emplyee's name? (Required)",
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
        message: "Enter employee's id (Required)",
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
        message: "Enter employee's email (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter email!");
            return false;
          }
        },
      },
    ])
    .then((checkType) => {
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
    })
    .then((employeeData) => {
      teamData.employee.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        console.log(teamData);
        return promptEmployee(teamData);
      } else {
        console.log(teamData);
        return teamData;
      }
    });
};

// .then(response => {
//   const employee = new Employee(response.managerName, response.id, response.email, response.officeNumber)
//   teamData.employee.push(employee)
//   if (response.confirmAddEmployee) {
//         return promptEmployee(teamData);
//       } else {
//         return teamData;
//       }
// });

promptManager()
  .then(promptEmployee)
  .then((teamData) => {
    return generatePage(teamData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    // return copyFile();
  })
  //   .then((copyFileResponse) => {
  //     console.log(copyFileResponse);
  //   })
  .catch((err) => {
    console.log(err);
  });
//console.log("Style sheet copied successfully!");

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

// fs.copyFile('./src/style.css', './dist/style.css', err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Style sheet copied successfully!');
// })

const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const fs = require('fs');

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
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
        type: "list",
        name: "employeeType",
        message: "Select the employee type? (Required)",
        choices: ["Engineer", "Intern"],
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please select a employee type!");
            return false;
          }
        },
      },
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
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((employeeData) => {
      teamData.employee.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

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

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }

        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
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
// });

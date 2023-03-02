const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

//stores Employee Objects
const employees = [];


const promptUser = () => {
    //prompts user for information
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee?",
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?",
        },
        {
            type: "list",
            name: "role",
            message: "What type of employee are they?",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])

    //Provides prompts for various roles & creates new objects based on user inputs
    .then((answers) => {
        //Provides github question for Engineer subclass
        if(answers.role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's Github username?",
                }
            ])

            //creates new engineer object w/ property data from user input
            .then((engineerAnswer) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswer.github);
                employees.push(engineer);

                // Call the generateEmployeeCards function here and assign the result to a variable
                const employeeCards = generateEmployeeCards(employees);
                console.log(employeeCards); // just for testing purposes
                // Call the addMoreEmployees function here

                addMoreEmployees();
            });
        }

        //Provides school question for Intern subclass
        else if (answers.role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What is the intern's school?",
                }
            ])

            //creates new intern object w/ property data from user input
            .then((internAnswer) => {
                const intern = new Intern(answers.name, answers.id, answers.email, internAnswer.school);
                employees.push(intern);

                // Call the generateEmployeeCards function here and assign the result to a variable
                const employeeCards = generateEmployeeCards(employees);
                console.log(employeeCards); // just for testing purposes
                // Call the addMoreEmployees function here

                addMoreEmployees();
            });
        }

        //Provides officeNumber question for Manager subclass
        else if (answers.role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the manager's office number?",
                }
            ])

            //creates new manager object w/ property data from user input
            .then((managerAnswer) => {
                const manager = new Manager(answers.name, answers.id, answers.email, managerAnswer.officeNumber);
                employees.push(manager);

                // Call the generateEmployeeCards function here and assign the result to a variable
                const employeeCards = generateEmployeeCards(employees);
                console.log(employeeCards); // just for testing purposes
                // Call the addMoreEmployees function here
                addMoreEmployees();
            });
        } 
    }); 

    //either loops through the parent function if the user wants to add another employee or generates the html if they are done adding employees
    const addMoreEmployees = () => {
        inquirer.prompt([
            {
                type: "confirm",
                name: "addMore",
                message: "Would you like to add another employee?",
            },
        ])

        .then((answer) => {
            if (answer.addMore) {
                promptUser();
            }
            else {
                const html = generateEmployeeCards(employees);
                console.log(html); 
                writeToFile("./output.html", html)
            }
        })
    }
}


// Function to generate HTML for manager cards
const generateManagerCards = (managers) => {
    return managers.map(manager => {
      return `
        <div class="managerbox">
          <div class="mboxheader bg-fuchsia-400 dark:bg-purple-800 h-1/4 font-serif font-serif">
            <h2 class="font-black">${manager.getName()}</h2>
            <h3 class="font-medium pt-8">Manager</h3>
          </div>
          <div class="mboxbody bg-cardbody h-2/3">
            <h5 class="font-light pt-9">ID: ${manager.getId()}</h5>
            <h5 class="font-light pt-9">Email: ${manager.getEmail()}</h5>
            <h5 class="font-light pt-9">Office number: ${manager.getOfficeNumber()}</h5>
          </div>
        </div>
      `;
    }).join("");
}

// Function to generate HTML for engineer cards
const generateEngineerCards = (engineers) => {
    return engineers.map(engineer => {
      return `
        <div class="engineerbox">
          <div class="eboxheader bg-red-400 dark:bg-red-800 h-1/4 font-serif font-serif">
            <h2 class="font-black">${engineer.getName()}</h2>
            <h3 class="font-medium pt-8">Engineer</h3>
          </div>
          <div class="eboxbody mboxbody bg-cardbody h-2/3">
            <h5 class="font-light pt-9">ID: ${engineer.getId()}</h5>
            <h5 class="font-light pt-9">Email: ${engineer.getEmail()}</h5>
            <h5 class="font-light pt-9">Github: ${engineer.getGithub()}</h5>
          </div>
        </div>
      `;
    }).join("");
}

// Function to generate HTML for intern cards
const generateInternCards = (interns) => {
    return interns.map(intern => {
      return `
        <div class="internbox bg-btn">
          <div class="iboxheader bg-blue-400 dark:bg-blue-800 h-1/4 font-serif font-serif">
            <h2 class="font-black">${intern.getName()}</h2>
            <h3 class="font-medium pt-8">Intern</h3>
          </div>
          <div class="iboxbody mboxbody bg-cardbody h-2/3">
            <h5 class="font-light pt-9">ID: ${intern.getId()}</h5>
            <h5 class="font-light pt-9">Email: ${intern.getEmail()}</h5>
            <h5 class="font-light pt-9">School: ${intern.getSchool()}</h5>
          </div>
        </div>
      `;
    }).join("");
}


// Function to generate HTML for all employee cards
const generateEmployeeCards = (employees) => {
    const managers = employees.filter(employee => employee.getRole() === "Manager");
    const engineers = employees.filter(employee => employee.getRole() === "Engineer");
    const interns = employees.filter(employee => employee.getRole() === "Intern");

    // Read the contents of the index.html template file
    const template = fs.readFileSync("./dist/index.html", "utf8");

    const managerCards = generateManagerCards(managers);
    const engineerCards = generateEngineerCards(engineers);
    const internCards = generateInternCards(interns);

    // Replace the placeholder in the template with the generated employee cards
    const mOutput = template.replace("{{mreplace}}", `
    <div class="managerbox">
    ${managerCards}
    </div>
    `);

    return mOutput;

    const eOutput = template.replace("{{ereplace}}", `
    <div class="engineerbox">
    ${engineerCards}
    </div>
    `);

    return eOutput;


    const iOutput = template.replace("{{ireplace}}", `
    <div class="internbox">
    ${internCards}
    </div>
    `);

    return iOutput;

    
    
    
 
}

  promptUser();

  const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    })}
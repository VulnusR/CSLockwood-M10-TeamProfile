const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//stores Employee Objects
const employees = [];

//prompts user for information
const promptUser = () => {
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
}


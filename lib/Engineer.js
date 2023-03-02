//Imports Employee Class
const Employee = require('./Employee')

// Defines Engineer class as a subclass extension of Employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    //Retrives Command Line info
    getGithub() {
        return this.github;
    }

    // overrides Employee role w/ Engineer role
    getRole() {
        return 'Engineer';
    }
}

//exports Engineer class
module.exports = Engineer;
//Imports Employee Class
const Employee = require('./Employee')

// Declares Engineer class a a subclass extension of Employee class
class Engineer extends Employee {
    constructor (name, id, email, gitub) {
        super (name, id, email);
        this.github = this.github
    }
}
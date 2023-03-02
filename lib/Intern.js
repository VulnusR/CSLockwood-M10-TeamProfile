//imports Employee class
const Employee =require("./Employee");

// Defines Intern class as a subclass extension of Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //Retrieves Command Line Info
    getSchool() {
        return this.school;
    }

    //Overrides Employee Role w/ Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
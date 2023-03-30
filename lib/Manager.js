const Employee = require("./Employee");


//// Defines Manager class as a subclass extension of Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    //Retrieves Command Line Info
    getOfficeNumber() {
        return this.officeNumber;
    }

    //Overrides Employee Role w/ Manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
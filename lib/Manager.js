const Employee = require("./Employee");


//// Defines Manager class as a subclass extension of Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
}
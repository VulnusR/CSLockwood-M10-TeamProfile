//imports Employee class
const Employee =require('./Employee')

// Defines Intern class as a subclass extension of Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}
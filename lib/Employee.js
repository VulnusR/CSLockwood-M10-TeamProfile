
//creates Employee Parent class w/ name/id/email method

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns name
    getName() {
        return this.name;
    }
    
    //returns Id
    getId() {
        return this.id;
    }
    
    //returns Email
    getEmail() {
        return this.email;
    }
    
    //Confirms name/id/email to console
    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }

    //returns the person is an Employee
    getRole() {
        return "Employee";
    }  
}

//exports Employee class
module.exports = Employee;
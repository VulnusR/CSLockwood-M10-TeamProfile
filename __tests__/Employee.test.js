const Employee = require('../lib/Employee.js');



describe('employee object properly generated', () => {
    it('should populate name, ID#, and email',() => {
    const employee = new Employee ('Name Here', '123', 'my@email.com');

    expect(employee.name).toEqual('Name Here');
    expect(employee.id).toEqual('123');
    expect(employee.email).toEqual('my@email.com');
    })
});


module.exports = Employee;


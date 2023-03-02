const Manager = require('../lib/Manager.js');


describe('manager generated', () => {
    it('populates name, ID, email, & office number',() => {
    const manager = new Manager('myName', '123', 'my@email.com', '0000');

    expect(manager.name).toEqual('myName');
    expect(manager.id).toEqual('123');
    expect(manager.email).toEqual('my@email.com');
    expect(manager.officeNumber).toEqual('0000');
    })
});


module.exports = Manager;
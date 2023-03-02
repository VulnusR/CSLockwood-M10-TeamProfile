const Intern = require('../lib/Intern.js');


describe('Intern generated', () => {
    it('populates name, ID, email, and school',() => {
    const intern = new Intern('myName', '123', 'my@email.com', 'Uni');

    expect(intern.name).toEqual('myName');
    expect(intern.id).toEqual('123');
    expect(intern.email).toEqual('my@email.com');
    expect(intern.school).toEqual('Uni');
    })
});


module.exports = Intern;

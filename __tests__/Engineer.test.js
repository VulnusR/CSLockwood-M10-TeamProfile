const Engineer = require('../lib/Engineer.js');


describe('engineer object properly generated', () => {
    it('populates name, ID, email, and github',() => {
    const engineer = new Engineer('Name Here', '123', 'my@email.com', 'myGit');

    expect(engineer.name).toEqual('Name Here');
    expect(engineer.id).toEqual('123');
    expect(engineer.email).toEqual('my@email.com');
    expect(engineer.github).toEqual('myGit');
    })
});


module.exports = Engineer;
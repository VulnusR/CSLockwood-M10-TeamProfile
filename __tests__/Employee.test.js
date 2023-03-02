
const Employee = require('../lib/Employee');

// Test the Employee class
describe('Employee', () => {
  // Test the constructor method
    describe('constructor', () => {
        it('should create an object with a name, id, and email property', () => {
          // Arrange
          const name = 'John';
          const id = 1;
          const email = 'john@example.com';

          // Act
          const employee = new Employee(name, id, email);

          // Assert
          expect(employee).toEqual({ name: 'John', id: 1, email: 'john@example.com' });
        });
    })
})
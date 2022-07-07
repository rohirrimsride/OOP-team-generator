const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee[{name: 'Dave', email: 'dave@example.com'}];

    expect(employee.name).toMatch('Dave');
    expect(employee.id).toEqual(0);
    expect(employee.email).toMatch('dave@example.com');
})

// test('gets employee name', () => {
//     const employee = new Employee('Dave');

//     expect(employee.name).toBe(['name']);
// })



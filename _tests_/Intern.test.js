const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Dave', '1', 'dave@example.com', 'UTSA');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('dave@example.com');
    expect(intern.school).toBe('UTSA');
})

test("gets intern's office", () => {
    const intern = new Intern('Dave', '1', 'dave@example.com', 'UTSA');

    expect(intern.getSchool()).toBe('UTSA');
})

test("gets employee's role", () => {
    const intern = new Intern('Dave', '1', 'dave@example.com', 'UTSA');

    expect(intern.getRole()).toBe('Intern');
})
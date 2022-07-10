const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Dave', '1', 'dave@example.com', '100');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('dave@example.com');
    expect(manager.office).toBe('100');
})

test("gets manager's office", () => {
    const manager = new Manager('Dave', '1', 'dave@example.com', '100');

    expect(manager.getOffice()).toBe('100');
})

test("gets employee's role", () => {
    const manager = new Manager('Dave', '1', 'dave@example.com', '100');

    expect(manager.getRole()).toBe('Manager');
})


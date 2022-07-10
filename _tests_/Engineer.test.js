const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', '1', 'dave@example.com', 'DavesGitHubAccount');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('dave@example.com');
    expect(engineer.github).toBe('DavesGitHubAccount');
})

test("gets engineer's office", () => {
    const engineer = new Engineer('Dave', '1', 'dave@example.com', 'DavesGitHubAccount');

    expect(engineer.getGitHub()).toBe('DavesGitHubAccount');
})

test("gets employee's role", () => {
    const engineer = new Engineer('Dave', '1', 'dave@example.com', 'DavesGitHubAccount');

    expect(engineer.getRole()).toBe('Engineer');
})
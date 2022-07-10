const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = this.getRole();
    }

    getGitHub() {
        return this.github
    };
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;







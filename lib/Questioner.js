// Initializing inquirer and outside classes
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee');
const pageTemplate = require('../src/page-template');





function Questioner() {
    // initializes array for storing answers for each employee type.
    
    this.manager;
    this.engineer;
    this.intern;
    this.team = [];

}

// gets information about the manager
Questioner.prototype.beginInterrogation = function() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You forgot to provide a name for the Manager.')
                        return false;
                    }            
                },
            },    
            {
                type: 'input',
                name: 'id',
                message: "Please provide the employee ID for the Manager? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You must provide an employee ID.');
                        return false;                
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Manager's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You forgot to include an email address.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is the office number for this Manager? (Required)",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('You must provide an office number for this Manager.');
                        return false;
                    }
                }
            },
        ])  

            // takes answers to manager questions and runs them through the Manager class and dumps them in the manager variable, then goes back to inquire if team building is complete
            .then((managerAnswers) => {
                const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office, managerAnswers.role)
                this.team.push(manager);
                
                    this.continueInterrogation();
        
            });
};

// questions if team building will continue or if finished, then pushes to the appropriate function to continue process.  
Questioner.prototype.continueInterrogation = function() {
    
    inquirer
        .prompt({
            type: 'rawlist',
            name: 'addTeam',
            message: 'Select which type of team member you would like to add or "Finish" if your done adding team members?',
            choices: ['Engineer', 'Intern', 'Finish']
        })
            .then(({ addTeam }) => {
                if (addTeam === 'Engineer') {
                    this.engineerInterrogation();
                }
                if (addTeam === 'Intern') {
                    this.internInterrogation();
                }
                // if done adding team members then pass to page builder
                if (addTeam === 'Finish') {
                    console.log(`
                   ********************* 
                    Building team page.
                   ********************* 
                    `);
                    pageTemplate(this.team);
                }
            })
};

// gets information about the engineer
Questioner.prototype.engineerInterrogation = function() {
    
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Engineer's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You forgot to provide a name for the Engineer.')
                        return false;
                    }            
                },
            },    
            {
                type: 'input',
                name: 'id',
                message: "Please provide the employee ID for the Engineer? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You must provide an employee ID.');
                        return false;                
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You forgot to include an email address.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineer's GitHub account name? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("You forgot to provide the Engineer's github account name.");
                        return false;
                    }
                }
            },
        ])
            // takes answers to engineer questions and runs them through the Engineer class and dumps them in the engineer variable, then goes back to inquire if team building is complete
            .then((engineerAnswers) => {
                const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github, engineerAnswers.role)
                this.team.push(engineer);
            
                    this.continueInterrogation();
    
            });

};

// gets intern information
Questioner.prototype.internInterrogation = function() {
    
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Intern's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You forgot to provide a name for the Intern.')
                        return false;
                    }            
                },
            },    
            {
                type: 'input',
                name: 'id',
                message: "Please provide the employee ID for the Intern? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You must provide an employee ID.');
                        return false;                
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Intern's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You forgot to include an email address.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the Intern attend? (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please add the Intern's school name")
                        return false;
                    }
                }
            }
        ])
            // takes answers to intern questions, runs them through the Intern class, then pushes them to the team array, then goes back to inquire if team building is complete
            .then((internAnswers) => {
                const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school, internAnswers.role)
                this.team.push(intern);
            
                    this.continueInterrogation();
    
            });
};

module.exports = Questioner;

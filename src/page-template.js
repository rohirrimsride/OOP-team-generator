// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
// const Employee = require('../lib/Employee');

// create manager card
const generateManagerCard = manager => {
    return `
        <div class="manager-cards-container col-sm-7 col-lg-3 col-md-5" id="mgrCardsCont">    
            <div class="manager-card card">
                <div class="card-header">
                    <h2 class="card-name">
                        ${manager.name}
                    </h2>
                    <div class="role-container">
                        <i class="hdr-img fa-solid fa-sitemap fa-lg"></i>
                        <h3 class="card-role">
                            ${manager.role}
                        </h3>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <tr class="id-row">
                            <td class="id-input">ID: ${manager.id}</td>
                        </tr>
                        <tr class="email-row">
                            <td class="email-input">Email: ${manager.email}</td>
                        </tr>
                        <tr class="special-row">
                            <td class="special-input">Office Number: ${manager.office}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>    
    `;
};

const generateEngineerCards = engineers => {
    // console.log(engineers);

    // for (let i = 0; i < engineers.length; i++) {
        
        return `
            <div class="engineer-cards-container col-sm-7 col-lg-3 col-md-5" id="engCardsCont">
                <div class="engineer-card card">
                    <div class="card-header">
                        <h2 class="card-name">
                            ${engineers.name}
                        </h2>
                        <div class="role-container">
                            <i class="hdr-img fa-solid fa-compass-drafting fa-lg"></i>
                            <h3 class="card-role">
                                ${engineers.role}
                            </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr class="id-row">
                                <td class="id-input">ID: ${engineers.id}</td>
                            </tr>
                            <tr class="email-row">
                                <td class="email-input">Email: ${engineers.email}</td>
                            </tr>
                            <tr class="special-row">
                                <td class="special-input">GitHub: <a href="https://github.com/${engineers.github}">${engineers.github}</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `;
    // }
};

const generateInternCards = interns => {
    // console.log(interns);
    return `
        <div class="intern-cards-container col-sm-7 col-lg-3 col-md-5" id="intCardsCont">
            <div class="intern-card card">
                <div class="card-header">
                    <h2 class="card-name">
                        ${interns.name}
                    </h2>
                    <div class="role-container">
                        <i class="hdr-img fa-solid fa-user-graduate fa-lg"></i>
                        <h3 class="card-role">
                            ${interns.role}
                        </h3>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <tr class="id-row">
                            <td class="id-input">ID: ${interns.id}</td>
                        </tr>
                        <tr class="email-row">
                            <td class="email-input">Email: ${interns.email}</td>
                        </tr>
                        <tr class="special-row">
                            <td class="special-input">School: ${interns.school}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>  
    `;
};

module.exports = teamAnswersArr => {
    
    let managerCard;
    let engineerCards;
    let internCards;

    for (let i = 0; i < teamAnswersArr.length; i++) {
        if (teamAnswersArr[i].role === 'Manager') {
            let manager = teamAnswersArr[i];
            // console.log(manager.name);
            // console.log(manager.id);
            // console.log(manager.email);
            // console.log(manager.office);
            // console.log(manager.role);
            managerCard = generateManagerCard(manager);
            // console.log(managerCard);
        }
        if (teamAnswersArr[i].role === 'Engineer') {
            let engineers = teamAnswersArr[i];
            // console.log(engineers.name);
            // console.log(engineers.id);
            // console.log(engineers.email);
            // console.log(engineers.github);
            // console.log(engineers.role);
            engineerCards = generateEngineerCards(engineers);
            // console.log(engineerCards);
        }
        if (teamAnswersArr[i].role === 'Intern') {
            let interns = teamAnswersArr[i];
            // console.log(interns.name);
            // console.log(interns.id);
            // console.log(interns.email);
            // console.log(interns.github);
            // console.log(interns.role);
            internCards = generateInternCards(interns);
            // console.log(internCards);
        }
    }

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Team</title>
                <script src="https://kit.fontawesome.com/d3dda29358.js" crossorigin="anonymous"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                <!-- CSS only -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                <link rel="stylesheet" href="../src/style.css">    
            </head>
            <body>
                <header class="page-header">
                    <div class="page-title-container">
                        <i class="hdr-img fa-solid fa-people-roof fa-2xl"></i>
                        <h1 class="page-title">
                            My Team
                        </h1>
                    </div>
                </header>
                <section class="cards-container container-fluid">
                    ${managerCard}    
                    ${engineerCards}
                    ${internCards}
                </section>
            </body>
        </html>
    `;  
};
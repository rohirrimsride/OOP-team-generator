// makes the writeFile function available to be called
const { writeFile } = require('../utils/generate-page');

// creates manager card
const generateManagerCard = managerCard => {

    return `
    ${managerCard
        .map(({ name, id, email, role, office }) => {
        return`
        <div class="manager-cards-container col-sm-7 col-lg-3 col-md-5" id="mgrCardsCont">    
            <div class="manager-card card">
                <div class="card-header">
                    <h2 class="card-name">
                        ${name}
                    </h2>
                    <div class="role-container">
                        <i class="hdr-img fa-solid fa-sitemap fa-lg"></i>
                        <h3 class="card-role">
                            ${role}
                        </h3>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <tr class="id-row">
                            <td class="id-input">ID: ${id}</td>
                        </tr>
                        <tr class="email-row">
                            <td class="email-input">Email: <a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr class="special-row">
                            <td class="special-input">Office Number: ${office}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> 
        `;})}   
    `;
};

// engineer card generator, it iterates through the engineer array and adds a card to the pageHTML for each engineer entry
const generateEngineerCards = engineerCards => {
    // for (let i = 0; i < engineerCards.length; i++) {
        if (!engineerCards) {
            return '';
        }
        return `
        ${engineerCards
            .map(({ name, id, email, role, github }) => {
            return`
            <div class="engineer-cards-container col-sm-7 col-lg-3 col-md-5" id="engCardsCont">
                <div class="engineer-card card">
                    <div class="card-header">
                        <h2 class="card-name">
                            ${name}
                        </h2>
                        <div class="role-container">
                            <i class="hdr-img fa-solid fa-compass-drafting fa-lg"></i>
                            <h3 class="card-role">
                                ${role}
                            </h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr class="id-row">
                                <td class="id-input">ID: ${id}</td>
                            </tr>
                            <tr class="email-row">
                                <td class="email-input">Email: <a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr class="special-row">
                                <td class="special-input">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            `;}).join('')}
        `;
};

// intern card generator, it iterates through the itern array and adds a card to the pageHTML for each intern entry
const generateInternCards = internCards => {
    // console.log(internCards);
    // console.log(internCards[0].name);
    // console.log(internCards.length);
    
    // for (let i = 0; i < internCards.length; i++) {
    if (!internCards) {
        return '';
    }
        
    return `
    ${internCards
        .map(({ name, id, email, role, school }) => {
        return`
        <div class="intern-cards-container col-sm-7 col-lg-3 col-md-5" id="intCardsCont">
            <div class="intern-card card">
                <div class="card-header">
                    <h2 class="card-name">
                        ${name}
                    </h2>
                    <div class="role-container">
                        <i class="hdr-img fa-solid fa-user-graduate fa-lg"></i>
                        <h3 class="card-role">
                            ${role}
                        </h3>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <tr class="id-row">
                            <td class="id-input">ID: ${id}</td>
                        </tr>
                        <tr class="email-row">
                            <td class="email-input">Email: <a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr class="special-row">
                            <td class="special-input">School: ${school}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> 
        `; }).join('')}
    `;   
};

module.exports = teamAnswersArr => {
    // breaks teamAnswersArr into three seperate arrays, one for each role.
    let managerCard = [];
    let engineerCards = [];
    let internCards = [];

    for (let i = 0; i < teamAnswersArr.length; i++) {
        if (teamAnswersArr[i].role === 'Manager') {

            let managerInfo = teamAnswersArr[i];
            managerCard.push(managerInfo);
        }
        if (teamAnswersArr[i].role === 'Engineer') {
            
            let engineersInfo = teamAnswersArr[i];
            engineerCards.push(engineersInfo);
        }
        if (teamAnswersArr[i].role === 'Intern') {

            let internsInfo = teamAnswersArr[i];
            internCards.push(internsInfo);
        }
    }
        // assigns the template literal to a variable to be passed to the writeFile function.
        let pageHTML = `
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
                        ${generateManagerCard(managerCard)}    
                        ${generateEngineerCards(engineerCards)}
                        ${generateInternCards(internCards)}
                    </section>
                </body>
            </html>
        `;
    writeFile(pageHTML);
};
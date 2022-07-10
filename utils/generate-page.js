// makes the node fs module functionality available to writeFile and copyFile.
const fs = require('fs');

// creates dynamic Team page
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject (err);
                    return;
            }
            resolve({
                ok: true,
                message: 'File created!',  
            });
            copyFile();
        });

    });
};

// copies the pre-built css file in the /src folder to the dist folder
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject (err);
                return;
            }

            resolve({
                ok: true,
                message: 'Styles added!'
            });

        });
    });
};

// makes the writeFile function available for the page-template
module.exports = { writeFile };
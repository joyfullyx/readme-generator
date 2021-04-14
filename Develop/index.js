// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generate = require('./develop/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: "Briefly describe your project",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the installation process?',
            name: 'install', 
        },
        {
            type: 'input',
            message: 'What is the purpose of this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Name contributors to this project, if any:',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Are there any tests? If so, what are the guidelines for testing?',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Select a license for your project:',
            choices: ['MIT', 'Apache', 'GNU', 'IBM', 'Mozilla', 'Perl'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ]).then(answers => {
        console.log(answers)
        // TODO: Create a function to write README file
        // function writeToFile(fileName, data) {}
    fs.writeFile('README.md', JSON.stringify(answers, null, 4), (err) => {
        if (err) {
            throw err
        } else {
            console.log('✔︎ README.md successfully generated!')
        }
    })
});
        
        
// TODO: Create a function to initialize app
function init() {
    // use inquirer 
    // get answers object
    // write that content to a file using a call to writeToFile
}

// Function call to initialize app
init();

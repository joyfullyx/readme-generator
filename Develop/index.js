// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('../develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions =[
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
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'IBM Public License v1.0', 'Mozilla Public License 2.0', 'Perl', 'N/A'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ]
    inquirer.prompt(questions).then(answers => {
    console.log(answers)
    // TODO: Create a function to write README file
    // function writeToFile(fileName, answers) {
//         const readMeOutput = ` 
// // # ${answers.title}

// // ## Description
// //     ${answers.description}

// // ##Table of Contents
// // 1. [Description](#description)
// // 2. [Install](#install)
// // 3. [Usage](#usage)
// // 4. [Contributors](#contributors)
// // 5. [Test](#test)
// // 6. [License](#license) //??????
// // 7. [Username](#username)
// // 8. [Email](#email)

// // ## Installation
// //     ${answers.install}

// // ## Usage
// //     ${answers.usage}

// // ## License
// //     ${answers.license}

// // ## Contributing
// //     ${answers.contributors}

// // ## Tests
// //     ${answers.test}

// // ## Questions
// // [Github](https://github.com/${answers.username})

// // [E-mail](mailto:${answers.email})
// // `;
    fs.writeFile('README.md', generate(answers), (err) => {
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

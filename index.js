const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: projectTitle => projectTitle ? true : console.log('Please enter the title of your project.')
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        validate: projectDescription => projectDescription ? true : console.log('Please enter a project description.')
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter user installation instructions.',
        validate: projectInstallation => projectInstallation ? true : console.log('Please enter installation instructions.')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions, and examples for use.',
        validate: projectUsage => projectUsage ? true : console.log('Please enter usage information.')
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution instructions if any.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the appropriate license',
        default: 'NONE',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test information.'
    }
]);



// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {
// }

// function call to initialize program
//init();

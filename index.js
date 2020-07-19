const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// function to initialize program
const init = () => {
    // array of questions for user
    return inquirer.prompt([
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
            name: 'contributing',
            message: 'Enter contributing instructions.'
            validate: projectContributing => projectContributing ? true : console.log('Please enter contributing instructions.')
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the appropriate license',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test information.',
            validate: projectTests => projectTests ? true : console.log('Please enter test information.')
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
            validate: projectGithub => projectGithub ? true : console.log('Please enter your GitHub username.')
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: projectEmail => projectEmail ? true : console.log('Please provide your email address.')
        }
    ]);
};

//function to write README file
const writeToFile = data => {
    fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
        if (err) {
            throw new Error(err);
        }
    }
)};



// function call to initialize program
init().then(answers => writeToFile(answers));
    
    
    
    

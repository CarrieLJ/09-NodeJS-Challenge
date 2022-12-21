// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
//path has join and resolve from the directory
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description to your README explaining the what, why, and how.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the steps required to install your project by using a step-by-step guide. Include screenshots.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage infromation.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using',
        choices: ['MIT', 'GNU'],
    },

  ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquireResponse => {
        writeToFile('README.md', markdown({...inquireResponse}))
    })
}

// Function call to initialize app
init();


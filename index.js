// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const filePath = '.node_modules'
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a short description to your README explaining the what, why, and how.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter the steps required to install your project by using a step-by-step guide. Include screenshots.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter the usage infromation.',
    },
    {
        type: 'input',
        name: 'How to Contribute',
        message: 'Enter the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter the test instructions.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which license are you using',
        choices: ['MIT License', 'GNU General Public License v3.0'],
        when (answers) {
            return answers.comments !== 'None';
        },
    },

  ]

  fs.readFile(filePath, function onReadFile(err, result) {
    if (err) {
        console.log('Error: ' + err)
        return
    }

    console.log('File successfully read: ' + result)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    // inquirer.createPromptModule(questions)
    // .then((inquirerResponse, data) => {
    //     console.log("README being created");
    //     fs.writeReadMe("README.md", inquirerResponse, data);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
}

// Function call to initialize app
init();

// const promise = new promise(resolve, reject);

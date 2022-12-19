// const { writeFile } = require('fs');
// const inquirer = require('inquirer');

// import inquirer from "inquirer";
// import {09-NodeJS-Challenge} from '09-NodeJS-Challenge';

inquirer
  .prompt([
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
        name: 'contribution guidelines',
        message: 'Enter the contribution guidelines.',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Enter the test instructions.',
    },
    {
        //need to add a badge to the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
        type: 'list',
        name: 'license',
        message: 'Which license are you using',
        choices: ['MIT License', 'GNU General Public License v3.0'],
        when (answers) {
            return answers.comments !== 'None';
        },
    },

  ])
  .then((answers) => {
    writeFile('README.md', data, (err) => {
        if (err) throw err;
    });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  inquirer.prompt(questions).then((answers) => {
    console.log('\nREADME');
    console.log(JSON.stringify(answer, null, ' '));
  });
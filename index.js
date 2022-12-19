const inquirer = require('inquirer');

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
        message: 'Enter the description of your README.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instruction.',
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
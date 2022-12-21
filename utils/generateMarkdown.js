// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let renderLicenseBadge = renderLicenseBadge('MIT License', 'GNU General Public License v3.0');

// function renderLicenseBadge(license) {
//   return ? 'MIT License' : [![MIT License](https://img.shields.io/travis/com/CarrieLJ/09-NodeJS-Challenge?color=Green&label=License&style=plastic)]
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Content
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[How to Contribute](#Contribution)
  -[Tests](#Tests)
  -[Licenses](#Licenses)
  -[username](#username)
  -[profile](#profile)

  ${data.username}
  ##username:

    ${data.Description}
  ##Description:

    ${data.Installation}
##Installation:

  ${data.Usage}
##Usage: 

  ${data.Contribution}
##How to Contribute:

  ${data.Tests}
##Tests:

  ${data.Licenses}
##Licenses:

  ${data.Email}
##Email: 

  ${data.profile}
##profile:
`;
}

module.exports = generateMarkdown;

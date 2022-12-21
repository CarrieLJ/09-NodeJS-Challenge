// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let renderLicenseBadge = renderLicenseBadge('MIT License', 'GNU General Public License v3.0');

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![github license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[Licenses](#Licenses)`;
  }
  return '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `##Licenses:`;
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  # Table of Content
  -[description](#description)

  -[installation](#installation)
  
  -[usage](#usage)

  -[contribution](#contribution)

  -[tests](#tests)

  -${renderLicenseLink(data.license)}

  -[username](#username)

  -[profile](#profile)

## username:

  ${data.username}

## description:

  ${data.description}

## Installation:

  ${data.installation}

## Usage: 

  ${data.usage}

## How to Contribute:

  ${data.contribution}

## Tests:

  ${data.tests}

## License

${renderLicenseSection(data.license)}

  ${data.license}


## Email: 

  ${data.email}

## Github Profile:

  ${data.profile}

`;
}

module.exports = generateMarkdown;

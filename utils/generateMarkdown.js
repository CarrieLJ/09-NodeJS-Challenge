// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = renderLicenseBadge('MIT License', 'GNU General Public License v3.0');

function renderLicenseBadge(license) {
  return https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

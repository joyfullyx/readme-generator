// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description
  ${data.description}

##Table of Contents
1. [Description](#description)
2. [Install](#install)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [Test](#test)
6. [License](#license)
7. [Username](#username)
8. [Email](#email)

## Installation
  ${data.install}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributing
  ${data.contributors}

## Tests
 ${data.test}

## Questions
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown; // File is a commonJS module; it may be converted to an ES6 module - import to index.js

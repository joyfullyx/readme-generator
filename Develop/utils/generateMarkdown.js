// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseName = license.badge[0];
  let licenseResp = '';
  
  if (licenseName === 'MIT') {
    licenseResp = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (licenseName === 'Apache') {
    licenseResp = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (licenseName === 'GNU') {
    licenseResp = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (licenseName === 'IBM') {
    licenseResp = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (licenseName === 'Mozilla') {
    licenseResp = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (licenseName === 'Perl') {
    licenseResp = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)' 
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link (table of contents?)
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README (return string of license description...?)
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

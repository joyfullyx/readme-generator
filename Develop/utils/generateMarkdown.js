// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // const licenseName = answers.license
  // let licenseResp = '';
  
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license === 'GNU') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'IBM') {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  } else if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } else if (license === 'Perl') {
    return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)` 
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link (add to table of contents if license exists / license section header)
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const noLicenseResp = '';

  if (data.license === 'MIT' || data.license ==='Apache 2.0' || data.license === 'GNU GPL v3' || data.license === 'IBM Public License v1.0' || data.license === 'Mozilla Public License 2.0' || data.license === 'Perl') {
    return `[License](${data.license})` //?????
  } else {
    return noLicenseResp; 
  }
}

// TODO: Create a function that returns the license section of README (create short blurb in license section if license- if not, no license section)
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const noLicenseBlurb = '';

  if (data.license === 'MIT') {
    return `License: MIT`
  } else if (data.licence === 'Apache 2.0') {
    return `License: Apache 2.0`
  } else if (data.licence === 'GNU GPL v3') {
    return `License: GNU GPL v3`
  } else if (data.licence === 'IBM Public License v1.0') {
    return `License: IBM Public License v1.0`
  } else if (data.licence === 'Mozilla Public License 2.0') {
    return `Mozilla Public License 2.0`
  } else if (data.licence === 'Perl') {
    return `License: Perl`
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
1. [Description](#description)
2. [Install](#install)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [Test](#test)
6. [Username](#username)
7. [Email](#email)
${data.license !== 'N/A'? '8. [License](#license)': ''}

## Installation
${data.install}

## Usage
${data.usage}

${data.license !== 'N/A'? '## License': ''}
${data.license !== 'N/A'? renderLicenseLink(data.license): ''}

## Contributing
${data.contributors}

## Tests
${data.test}

## Questions
[Github](https://github.com/${data.username})

[E-mail](mailto:${data.email})
`; 

}


module.exports = generateMarkdown; 
// File is a commonJS module; it may be converted to an ES6 module - import to index.js

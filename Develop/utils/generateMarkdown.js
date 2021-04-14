// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseName = license.badge[0];
  let licenseResp = '';
  
  if (licenseName === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseName === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseName === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseName === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (licenseName === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseName === 'Perl') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)` 
  } else {
    return licenseResp;
  }
}

// TODO: Create a function that returns the license link (add to table of contents if license exists / license section header)
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const noLicenseResp = '';

  if (data.license === 'MIT' || 'Apache 2.0' || 'GNU GPL v3' || 'IBM Public License v1.0' || 'Mozilla Public License 2.0' || 'Perl') {
    return 
  } else {
    return noLicenseResp; 
  }
}

// TODO: Create a function that returns the license section of README (create short blurb in license section if license- if not, no license section)
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const noLicenseBlub = '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
`
}


module.exports = generateMarkdown; 
// File is a commonJS module; it may be converted to an ES6 module - import to index.js

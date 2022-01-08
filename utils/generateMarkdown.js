// TODO: Create a function that returns a license badge based on which license is passed in
function licenseBadge(data) {
    const licenseType = data.license[0];
    let licenseString = " "
    if (licenseType === "MIT") {
        licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
    if (licenseType === "GNU General Public License 2.0") {
        licenseString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    };
    if (licenseType === "ISC License") {
        licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    };
    if (licenseType === "Apache") {
        licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    return licenseString
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'none') {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'none') {
        return ''
    } else {
        return `## License
    ${renderLicenseLink(license)}`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none') {
        return ''
    } else {
        return `## License:
    ${renderLicenseLink(license)}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# Project: ${data.title}
  ${renderLicenseBadge(data.license)}
# Description
${data.description}

## Table of Contents
[Installation](#Installation)
[Usage](#usage)
[License](#license)
[Contribution](#contribution)
[Tests](#tests)
[Questions](#questions)

## Installation:
${data.Installation}

## Usage
${data.usage}

## License
The application is covered under the ${data.license} license.

${licenseBadge(data)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, please e-mail me at [${data.email}](mailto:${data.emailname})

**Github Username:** 
${data.username}

**Github Profile:** 
www.github.com/${data.username}/

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
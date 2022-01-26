// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const badgeGeneration = require('./utils/generateMarkdown')
    // TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'Enter your gitHub username',
        name: 'githubUser'
    },
    {
        type: 'input',
        message: 'Enter email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Name of the project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'list all contributors',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Give a brief description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Usage for project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Installations for the project ',
        name: 'installs',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose license for the project',
        name: 'license',
        choices: ['none', 'Apache', 'MIT', 'ISC']
    },

];
init = function() {
    inquirer
        .prompt(questions)
        .then((response) => {
            fs.writeFile('README.md', readMe(response), (err) => err ? console.log(err) : console.log('README.md file created'))
        })
}


// TODO: Create a function to write README file
function readMe(data) {
    return (
        `## ${data.title}

${badgeGeneration.renderLicenseBadge(data.license).trim()}    

${data.description}
## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [license](#license)
- [Questions](#questions)

## Installation
${data.installs}

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.tests}
${badgeGeneration.renderLicenseSection(data.license)}

## Questions

Email: ${data.email}
Github: https://www.github.com/${data.githubUser}


    `)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
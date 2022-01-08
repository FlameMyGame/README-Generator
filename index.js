// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What would you like to include in the Table of Contents?',
        name: 'contents',
    },

    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },

    {
        type: 'list',
        message: 'Select a License',
        name: 'license',
        choices: [
            'MIT',
            'GNU GPLv3',
            'ISC',
            'Apache',
        ]
    },

    {
        type: 'input',
        message: 'Who is contributing?',
        name: 'contribution',
    },

    {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'Questions',
        name: 'questions',
    }
];
for (const question of questions) {
    console.log(questions)
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, function(err) {
        if (err) throw err;
        console.log('success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile(fileName, data)
        })
}

// Function call to initialize app
init();
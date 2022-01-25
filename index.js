// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([{
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
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// TODO: Create a function to initialize app
questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })
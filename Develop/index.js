// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const util = require("util");



// TODO: Create an array of questions for user input
const questions = [
    {    
        type: "input",
        name: "title",
        message:"What is the title of your project?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a title for your project.");
            }
            return true;
        }
    },
    {    
        type: "input",
        name: "description",
        message:"Describe your project.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A brief description is required.");
            }
            return true;
        }
    },
    {    
        type: "input",
        name: "instructions",
        message:"Detail the instructions to install.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please instruct the user on how to install.");
            }
            return true;
        }
    },
    {    
        type: "input",
        name: "usage",
        message:"How is this project to be used?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Define the usage for your project.");
            }
            return true;
        }
    },
    {    
        type: "input",
        name: "contributing",
        message:"What are the guidelines for contributions?"
    },
    {    
        type: "list",
        name: "license",
        message:"Please choose the license you would like to attach.",
        choices: [
            "GNU AGPLv3", 
            "GNU GPLv3", 
            "GNU LGPLv3", 
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense"
        ],
    },
    {    
        type: "input",
        name: "test",
        message:"Detail one or more tests for a user to run with your application."
    },
    {    
        type: "input",
        name: "gituser",
        message:"What is your username on GitHub?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {    
        type: "input",
        name: "profile",
        message:"Link your GitHub profile address here.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a link to your GitHub Repository.");
            }
            return true;
        }
    },
    {    
        type: "input",
        name: "email",
        message:"What is your e-mail address?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid e-mail is required.");
            }
            return true;
        }
    }
];


//TODO: Create a function to write README file
function writeToFile(fileName, data) {   
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        //when making Readme, need to turn answers into text that goes under each section.
        console.log("ReadMe complete! Check 'your title'+README.md to see its output.");
    });
};    
        
const writeFileAsync = util.promisify(writeToFile);
   

// TODO: Create a function to initialize app
async function init() {
    try {
        //Inquirer ?s
        const userResponses = inquirer.prompt(questions);
        //Pass Inquirer ?s to generateMarkdown
        const markdown = generateMarkdown(userResponses);
        //Write markdown to file
        await writeFileAsync("userResponses.title+_README.md", markdown);
    } catch (error) {
        console.log(error);
    }    
}; 

// Function call to initialize app
init();

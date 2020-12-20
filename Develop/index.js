// Packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// Inquirer Prompt
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
        name: "installation",
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


//Write README file
function writeToFile(fileName, data) {   
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        
        console.log("ReadMe complete! Check README.md to see its output.");
    });
};    
        
const writeFileAsync = util.promisify(writeToFile);
   

// Initialize app
async function init() {
    try {
        //Inquirer ?s
        const userResponses = await inquirer.prompt(questions);
        //Pass Inquirer ?s to generateMarkdown
        const markdown = generateMarkdown(userResponses);
        //Write markdown to file
        await writeFileAsync("README.md", markdown);
    } catch (error) {
        console.log(error);
    }    
}; 

// Function call to initialize app
init();

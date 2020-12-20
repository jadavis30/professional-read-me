// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");



// TODO: Create an array of questions for user input
inquirer.prompt([
{    
    type: "input",
    name: "title",
    message:"What is the title of your project?"
},
{    
    type: "input",
    name: "description",
    message:"Describe your project."
},
{    
    type: "input",
    name: "instructions",
    message:"Detail the instructions to install."
},
{    
    type: "input",
    name: "usage",
    message:"How is this project to be used?"
},
{    
    type: "input",
    name: "contributing",
    message:"What are the guidelines for contributions?"
},
{    
    type: "input",
    name: "instructions",
    message:"Detail the instructions for testing."
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
])

.then(answers => {
//TODO: Create a function to write README file
    fs.writeFile(answers.title+"_README.md", JSON.stringify(answers, null, "\t"), err => {
    if (err) {
        return console.log(err);
    }
    generateMarkdown();
    //when making Readme, need to turn answers into text that goes under each section.
    console.log("ReadMe complete! Check 'your title'+README.md to see its output.")
    });
    
    
});



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

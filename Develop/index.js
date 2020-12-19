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
}
])

.then(answers => console.log(answers)); 
//{
// TODO: Create a function to write README file
//fs.writeFile(data.title+"README.md", generateMarkdown), err => {
//    if (err) throw new Error(err);

//    console.log("ReadMe complete! Check 'name'+README.md to see its output.")
//}
//};



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

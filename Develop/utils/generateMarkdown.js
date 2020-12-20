


// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(!license) {
    renderLicense();
  }
  const badgeMaker = require("badge-maker");
};
 

// If there is no license, return an empty string
function renderLicense(license) {
if(!license) {
  return "";
};
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
   //title
   let createMarkdown = 
   `# ${userResponses.title}`
   
   `## Description
   ${userResponses.description}`

   `## Table of Contents
   -[Description](#description)
   -[Installation](#installation)
   -[Usage](#usage)
   -[License](#license)
   -[Contributing](#contributing)
   -[Questions](#questions)`

   `## Installation
   ${userResponses.installation}`

   `## Usage
   ${userResponses.usage}`

   `## License-don't forget to add badge here!
   **
   ${userResponses.license}`
   renderLicenseLink();

   `## Contributing
   *The ins and outs of how to contribute.*
   ${userResponses.contributing}`

   `## Questions for the Developer
   *Have a question? Contact me below and see what else I'm working on!*
   ${userResponses.gituser}
   ${userResponses.profile}
   ${userResponses.email}`
   
   
  

}

module.exports = generateMarkdown;

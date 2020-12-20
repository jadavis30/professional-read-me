


// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(!license) {
  }
  const badgeMaker = require("badge-maker");
  const badge = {
    "schemaVersion": 1,
    "label": "License",
    "message": license,
    "color": "informational"
  };
  badgeMaker(badge);
};
 

// If there is no license, return an empty string
function renderLicense(license) {
  if(!license) {
    return "";
  };
return license;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
renderLicense(license);
renderLicenseBadge(license);
renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
   //createMarkdown creates all headers and pulls info from index
   let createMarkdown = 
   `# ${userResponses.title}
   
   ## Description
   *A brief description of the use and scope of the project:*
   ${userResponses.description}`

   `## Table of Contents
   -[Description](#description)
   -[Installation](#installation)
   -[Usage](#usage)
   -[License](#license)
   -[Contributing](#contributing)
   -[Questions](#questions)`

   `## Installation
   *Steps on how to install:*
   ${userResponses.installation}`

   `## Usage
   *Instructions for use with examples:*
   ${userResponses.usage}`

   `## License
   *${userResponses.license}*`
   renderLicenseSection();

   `## Contributing
   *The ins and outs of how to contribute.*
   ${userResponses.contributing}`

   `## Tests
   *Run these tests to showcase the application.*
   ${userResponses.test}`

   `## Questions for the Developer
   *Have a question? Contact me below and see what else I'm working on!*
   ${userResponses.gituser}
   ${userResponses.profile}
   ${userResponses.email}`
   
  //return markdown information 
  return createMarkdown;
}

module.exports = generateMarkdown;

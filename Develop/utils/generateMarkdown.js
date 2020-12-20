


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
function generateMarkdown(answers) {
   return 
   `"# ${answers.title}",
   ## Description
   ## Table of Contents
   -[description](#description)
   -[installation](#installation)
   -[usage](#usage)
   -[license](#license)
   -[contributing](#description)
   -[questions](#questions)
  ## Installation
  ## Usage
  ## License 

  ## Contributing
  ## Questions
`;
}

module.exports = generateMarkdown;

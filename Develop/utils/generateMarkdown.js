//badge creator
const { makeBadge, ValidationError } = require('badge-maker')
//Array created to link licenses to source
const licenseArray = [
  {
    name: "GNU AGPLv3",
    url: "https://www.gnu.org/licenses/agpl-3.0.en.html"
  },
  {
    name: "GNU GPLv3",
    url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
  },
  {
    name: "GNU LGPLv3",
    url: "https://www.gnu.org/licenses/lgpl-3.0.en.html"
  },
  {
    name: "Mozilla Public License 2.0",
    url: "https://www.mozilla.org/en-US/MPL/2.0/"
  },
  {
    name: "Apache License 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0"
  },
  {
    name: "MIT License",
    url: "https://www.mit.edu/~amini/LICENSE.md"
  },
  {
    name: "Boost Software License 1.0",
    url: "https://www.boost.org/LICENSE_1_0.txt"
  },
  {
    name: "The Unlicense",
    url: "https://unlicense.org/"
  },
]

//renders badge based on license chosen
function renderLicenseBadge(license) {
  if(!license) {
  }
  
  const badge = {
    label: "License",
    message: license,
    labelColor: '#555',
    color: "informational"
  };
  return makeBadge(badge);
};
 
// Generates markdown for README
function generateMarkdown(userResponses) {

  let licenseObject = licenseArray.find(license => license.name === userResponses.license);
  
   //createMarkdown creates all headers and pulls info from index
   let createMarkdown = 
   `# ${userResponses.title}  
   ${renderLicenseBadge(userResponses.license)}

   ## Description
   *A brief description of the use and scope of the project:*    
   ${userResponses.description}

   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Questions](#questions-for-the-developer)

   ## Installation
   *Steps on how to install:*  
   ${userResponses.installation}

   ## Usage
   *Instructions for use with examples:*  
   ${userResponses.usage}

   ## License
   *[${licenseObject.name}](${licenseObject.url})*

   ## Contributing
   *The ins and outs of how to contribute.*  
   ${userResponses.contributing}

   ## Tests
   *Run these tests to showcase the application.*  
   ${userResponses.test}

   ## Questions for the Developer
   *Have a question? Contact me below and see what else I'm working on!*  
   [${userResponses.gituser}](https://www.github.com/${userResponses.gituser})  
   ${userResponses.email}`
   
  //return markdown information 
  return createMarkdown;
}

module.exports = generateMarkdown;

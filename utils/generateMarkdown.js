// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let choose = "";
     if (license === "APACHE 2.0") {
         choose = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
         return choose
     }
     if (license === "MIT") {
         choose = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
         return choose
     }
     if (license === "NONE"){
         choose = ""
         return choose
     }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   let choose = "";
   if (license === "APACHE 2.0"){
       choose = "(https://opensource.org/licenses/Apache-2.0)"
       return choose
   } if (license === "MIT"){
    choose = "(https://opensource.org/licenses/MIT)"
    return choose
} if (license === "NONE"){
    choose = ""
    return choose
}
} 
   

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const bLink = renderLicenseBadge(license) + renderLicenseLink(license);
    return `##License
    ${bLink}
    
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
     console.log("generate markdown function")
    //const bLink = renderLicenseSection(data.license);
    const badge = renderLicenseBadge(data.license)
  return `# Readme Generator
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  ​
  ## Description
  ​
 This is a project that allows the user to generate a solid ReadMe.md file. It uses node.js. 
  ​
  ## Table of Contents 
  
  * [Installation](#installation)
  ​
  * [Usage](#usage)
  ​
  * [License](#license)
  ​
  * [Contributing](#contributing)
  ​
  * [Tests](#tests)
  ​
  * [Questions](#questions)
  ​
  ## Installation
  ​
  To install necessary dependencies, run the following command: 
  
  ​${data.command}
  
  ## Usage
  
   ​${data.repo} to pull down the repo 
  ​
  ## License
  ${data.license}
  ​
 
    
  ## Contributing
  ​${data.contribute}
 
  ​
  ## Tests
  ​
  To run tests, run the following command:
  ${data.tests}
  ​
  ## Questions
  ​
  If you have any questions about the repo, open an issue or contact me directly at b.gree10@gmail.com. You can find more of my work at [bethtgreen](https://github.com/bethtgreen/).
  `;
};

module.exports = generateMarkdown;
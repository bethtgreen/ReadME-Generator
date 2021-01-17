const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { generate } = require("rxjs");

// to-do: create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project`s name?",
    name: "project",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have? ",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "NONE"],
  },
  {
    type: "input",
    message: "What commands hould be run to install dependencies?",
    name: "command",
  },
  {
    type: "input",
    message: "What command should be run to run tests? ",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribute",
  },
];
// to-do: write readmeFile
function writeToFile(data){
console.log("Write to file");
    
    fs.writeFile("readme.md", data, (err) =>{
        if (err) throw err;
    console.log("File = Saved");
    });
}



// to-do:initailize app
function init() {
  inquirer.prompt(questions).then((answers) => {
      console.log(answers)
   //    writeToFile("readMe.md", generateMarkdown({...questionResponses}));
    const bodyReadme = generateMarkdown({ ...answers });
   // console.log(bodyReadme +"test")
   writeToFile(bodyReadme)
    //writeToFile();

   })
    .catch(error => {
      if (error.isTtyError) {
          console.log("error");
      } else {
          console.log("Success!");
         
      }
    });
}

// initialize app
init();
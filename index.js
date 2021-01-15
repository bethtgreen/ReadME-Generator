const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



const promptUser = () => 
inquirer.prompt([//spits out the messages and prompts in the terminal
     {
         type: 'input',
         message: 'What is your Github username?',
         name: 'name',
     },
     {
         type:'input',
         message:'What is your email address?',
         name:'email',
     },
     {
        type:'input',
        message:'What is your project`s name?',
        name:'project',
     },
     {
        type:'input',
        message:'Please write a short description of your project.',
        name:'description',
    },
    {
       type:'input',
       message:'What kind of license should your project have? ',
       name:'github',
    },
    {
        type:'input',
        message:'What command s hould be run to install dependencies?',
        name:'command',
    },
    {
       type:'input',
       message:'What command should be run to run tests? ',
       name:'tests',
    },
    {
        type:'input',
        message:'What does the user need to know about using the repo?',
        name:'repo',
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to the repo?',
        name:"contribute",
    },
 ])
 
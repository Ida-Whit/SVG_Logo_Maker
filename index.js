//Import inquirer, file script, and classes of shapes.
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require("./lib/shapes")

//List out all the needed questions for generating the SVG logo

const questions = 
[
    {
    type: 'input',
    message: 'Please enter text for your logo (cannot be more than 3 letters long).',
    name: 'logo',
  },
  {
  type: 'input',
  message: 'Please enter color for the text of your logo.',
  name: 'textColor',
},
{
    type: 'list',
    message: 'Please enter shape of your logo.',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    message: 'Please enter the shape color for your logo.',
    name: 'shapeColor',
  },
];

//Function to write the SVG file

function createSVG(data) {
  fs.writeFile("logo.svg", data, function (err) {
      err ? console.log(err) : console.log("Generated logo.svg.")
  });
}


//Function to run inquirer, collect user input, and place it into the svg file

function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    if (answers.logo.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
      init();
    } else {
      createSVG(generateSVG(answers))
    }
  });
}

//Run the function

init();
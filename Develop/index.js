//Import inquirer, file script, and classes of shapes.

const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('utils/SVG.js')

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

function createSVG(data) {
  fs.writeFile("logo.svg", data, function (err) {
      err ? console.log(err) : console.log("Generated logo.svg.")
  });
}

function init() {
  inquirer.prompt(questions)
  .then (answers => {
    createSVG()
  })
}

init();
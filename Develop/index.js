const inquirer = require('inquirer');

inquirer
  .prompt([
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
])
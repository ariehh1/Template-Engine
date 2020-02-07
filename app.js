"use strict";

const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateMain = require("./templates/generatemain");
console.log(generateMain("Ari", "engineer"));

//start with questions
const userInput = [
  {
    message: "What is your Manager's name?",
    type: "input",
    name: "name"
  }
];

async function init() {
  try {
    const answers = await inquirer.prompt(userInput);
    console.log(answers);
  } catch (err) {
    console.error(err);
  }
}

init();

//classes to populate items

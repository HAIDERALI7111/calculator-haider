#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"; 
 const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        type:"number",
        message:"Enter your first Number"
    },
   {
    name: "secondNumber",
    type:"number",
    message:"Enter your second Number"
   },
   {
    name: "operator",
    type:"list",
    message:"choose your operator",
    choices:["+","-","*","/"]
   }

 ])

 if (answer.operator ==="+") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber ))
 }
  else if (answer.operator ==="-") {
    console.log(chalk.yellow(answer.firstNumber - answer.secondNumber) )
 }
 else if (answer.operator ==="*") {
    console.log(chalk.magenta(answer.firstNumber * answer.secondNumber) )
 }
  else if (answer.operator ==="/") {
    console.log(chalk.blue(answer.firstNumber / answer.secondNumber ))
 }
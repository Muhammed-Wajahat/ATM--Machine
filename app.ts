#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 21123;
let condition = true;
for (let i = 0; condition; i++) {
  console.log(`Your current balance is :${myBalance}`);
  const answer = await inquirer.prompt([
    {
      name: "userPin",
      type: "number",
      message: "enter your pin code :",
    },
  ]);
  if (answer.userPin === myPin) {
    console.log("correct pin code.");
    let userSlection = await inquirer.prompt([
      {
        message: "What you want to do",
        name: "userAction",
        type: "list",
        choices: ["Withdraw", "Check Balance", "fast Cash" , "exit"],
      },
    ]);
    if (userSlection.userAction === "Withdraw") {
      let withdraw = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: "Enter amount :",
        },
      ]);
      myBalance -= withdraw.amount;
      console.log(`Your remming balance ${myBalance}.`);
    } else if (userSlection.userAction === "Check Balance") {
      console.log(`Your balance is :${myBalance}`);
    } else if (userSlection.userAction === "fast Cash") {
      let fastCash = await inquirer.prompt([
        {
          message: "enter a fast Cash aamount",
          name: "value",
          type: "list",
          choices: ["500", "1000", "1500", "10000"],
        },
      ]);
      if (fastCash.value === "500") {
        myBalance -= fastCash.value;
        console.log(`your reming balance ${myBalance}`);
      }else if(fastCash.value === "1000"){
        myBalance -= fastCash.value;
        console.log(`your reming balance ${myBalance}`);
      }else if(fastCash.value === "1500" ){
        myBalance -= fastCash.value;
        console.log(`your reming balance ${myBalance}`);
      }else{
        myBalance -= fastCash.value;
        console.log(`your reming balance ${myBalance}`);
      }
    }else{
      console.log("Thank you take care!");
      
    }
  } else {
    console.log("Incorrect pin code.");
  }
}

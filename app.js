#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 21123;
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
            choices: ["Withdraw", "Check Balance"],
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
    }
    else {
        console.log(`Your balance is :${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code.");
}

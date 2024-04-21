#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let pincode = 445566;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pincode:",
    type: "number"
});
if (pinAnswer.pin === pincode) {
    console.log("****** Correct pin code ******");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "What do you want to do?",
        type: "list",
        choices: ["Withdraw", "Check Balance"],
    });
    if (operationAns.operation === "Withdraw") {
        let selectAnswer = await inquirer.prompt([
            {
                name: "select",
                message: "Please select an option:",
                type: "list",
                choices: ["Enter amount", "Fast cash"]
            }
        ]);
        if (selectAnswer.select === "Enter amount") {
            let amountAnswer = await inquirer.prompt([{
                    name: "amount",
                    message: "Enter amount that you want to withdraw:",
                    type: "number"
                }]);
            if (amountAnswer.amount <= myBalance) {
                myBalance -= amountAnswer.amount;
                console.log(`Successfuly withdrew amount ${amountAnswer.amount}.Your remaining balance is: ${myBalance}`);
            }
            else {
                console.log("Insufficient Balance!!!");
            }
        }
        else if (selectAnswer.select === "Fast cash") {
            let cashAnswer = await inquirer.prompt({
                name: "cash",
                message: "Select the amount to withdraw",
                type: "list",
                choices: ["500", "1000", "5000", "10000", "15000", "20000"]
            });
            if (cashAnswer.cash <= myBalance) {
                myBalance -= cashAnswer.cash;
                console.log(`Successfuly withdrew amount ${cashAnswer.cash}.Your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current account balance is: ${myBalance}`);
    }
}
else {
    console.log("Invalid pincode!!! ");
}

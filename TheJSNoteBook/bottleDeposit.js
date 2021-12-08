/**
 * In many jurisdictions a small deposit is added to drink containers to encourage people
to recycle them. In one particular jurisdiction, drink containers holding one liter or
less have a $0.10 deposit, and drink containers holding more than one liter have a
$0.25 deposit.
Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will be
received for returning those containers. Format the output so that it includes a dollar
sign and always displays exactly two decimal places
 */
const prompt = require("prompt-sync")();
const less_deposit = 0.10;
const high_deposit = 0.25; // in dollars
const liter = prompt("Input the volume of your container in liters:  ");
const less_reward = liter * less_deposit;
const great_reward = liter * high_deposit;
if(liter <= 1){
console.log("you have recieved $" + less_reward.toFixed(2));
}
else{
    console.log("you have recieved $" + great_reward.toFixed(2));
}


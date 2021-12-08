/**
 * Pretend that you have just opened a new savings account that earns 4 percent interest
per year. The interest that you earn is paid at the end of the year, and is added
to the balance of the savings account. Write a program that begins by reading the
amount of money deposited into the account from the user. Then your program should
compute and display the amount in the savings account after 1, 2, and 3 years. Display
each amount so that it is rounded to 2 decimal places.
 */
/**
 * lets use the formuala way where i = p(1+r)**n
 */
const prompt = require("prompt-sync")();
const amount_deposited = prompt("Input the amount deposited into the account: ");
const rate = 0.04;
const interest_at_year1 = +amount_deposited *((1 + +rate)**1);
const interest_at_year2 = +amount_deposited *((1 + +rate)**2);
const interest_at_year3 = +amount_deposited *((1 + +rate)**3);

console.log("Amount after 1 year: ", interest_at_year1.toFixed(2));
console.log("Amount after 2 years: ", interest_at_year2.toFixed(2));
console.log("Amount after 3 years: ", interest_at_year3.toFixed(2));
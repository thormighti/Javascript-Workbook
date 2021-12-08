/**
 * The program that you create for this exercise will begin by reading the cost of a meal
ordered at a restaurant from the user. Then your program will compute the tax and
tip for the meal. Use your local tax rate when computing the amount of tax owing.
Compute the tip as 18 percent of the meal amount (without the tax). The output from
your program should include the tax amount, the tip amount, and the grand total for
the meal including both the tax and the tip. Format the output so that all of the values
are displayed using two decimal places.
 */
const prompt = require("prompt-sync")();
const cost_of_meal = prompt("Input meal cost: ");
const value_added_tax = 0.07;
const tip_per = 0.18;
const tip = cost_of_meal * tip_per;
const tax = cost_of_meal * value_added_tax;
const grand_total = +cost_of_meal + +tip + +tax;
console.log("Your bill is : " + grand_total.toFixed(2) + " naira");
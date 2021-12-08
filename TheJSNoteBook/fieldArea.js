/**
 * Create a program that reads the length and width of a farmer’s field from the user in
feet. Display the area of the field in acres.
 */
const prompt = require("prompt-sync")();

const width = prompt("Enter the width of the field\n");
const length = prompt("Enter the length of the field\n");

const area = width * length * 43560;
console.log("the area of the field is : " +  area + "acres");
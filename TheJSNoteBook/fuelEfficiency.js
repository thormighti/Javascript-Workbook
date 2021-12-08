/**
 * In the United States, fuel efficiency for vehicles is normally expressed in miles-per-
gallon (MPG). In Canada, fuel efficiency is normally expressed in liters-per-hundred
kilometers (L/100 km). Use your research skills to determine how to convert from
MPG to L/100 km. Then create a program that reads a value from the user in American
units and displays the equivalent fuel efficiency in Canadian units
 */
//1 mpg = 235.2 l/100km

const prompt = require("prompt-sync")();
const num = prompt("inputs the US fuel efficiency value : ");
const convert = 235.2 /num;
console.log("the Canadian value is : "+ +convert.toFixed(2) + "L/100km");

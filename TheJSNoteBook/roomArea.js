/**
 * Write a program that asks the user to enter the width and length of a room. Once
the values have been read, your program should compute and display the area of the
room. The length and the width will be entered as floating point numbers. Include
units in your prompt and output message; either feet or meters, depending on which
unit you are more comfortable working with.
 */
const prompt = require("prompt-sync")();

const width = prompt("Enter the width of the room\n");
const length = prompt("Enter the length of the room\n");
const area = width * length;
console.log("The area of the room is: " + area + "ft");
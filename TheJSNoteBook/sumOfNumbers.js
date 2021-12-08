/**
 * Write a program that reads a positive integer, n, from the user and then displays the
sum of all of the integers from 1 to n. The sum of the first n positive integers can be
computed using the formula:
 */

const prompt = require("prompt-sync")();
const num = prompt("Input the number: ");
const sum = (+num * (+num + 1)) / 2;       // withput adding the plus sign at the begining , it behaves like a string
console.log("Sum of numbers is : ", sum);
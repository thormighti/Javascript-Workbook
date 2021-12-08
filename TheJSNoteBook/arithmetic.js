/**
 * Create a program that reads two integers, a and b, from the user. Your program should
compute and display:
• The sum of a and b
• The difference when b is subtracted from a
• The product of a and b
The quotient when a is divided by b
The remainder when a is divided by b
The result of log 10 a
The result of a b
 */
const prompt = require("prompt-sync")();
const a = prompt("input first number: ");
const b = prompt("input second number: ");
const sum = +a + +b;
const diff = a - b;
const quotient = a / b;
const prod = a * b;
const remainder = a % b;
const log = Math.log10(a);
const power = Math.pow(a,b);
console.log("Sum of the numbers : ",sum);
console.log("Diffrence of the numbers : ", diff);
console.log("Qoutient of the numbers : ", quotient.toFixed(2));
console.log("Remainder of the numbers : ",remainder);
console.log("Log of the numbers : ", log.toFixed(4));
console.log("power of number : ",power);
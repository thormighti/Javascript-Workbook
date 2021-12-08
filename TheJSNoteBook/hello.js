/**
 * Write a program that asks the user to enter his or her name. The program should
respond with a message that says hello to the user, using his or her name
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What is your name?", function(answer){
    console.log('Hello ' , answer);
    rl.close();
});
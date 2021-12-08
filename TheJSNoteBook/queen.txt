//implement the code in c

//for statement 01- one for loop
const prompt = require("prompt-sync")();
const numbers = prompt("Input the numbers: ");
for(let i = -5; i <= numbers; i++){
    console.log(i); // seperate by spaces here
}

//for statement 02 - if inside a forloop
const prompt = require("prompt-sync")();
//input the numbers
const numbers = prompt("Input the numbers: ");
for(let i = 1; i <= numbers; i++){
    //if statement for the condition
    if(i % 3 == 0 || i % 4 == 0 ){
    console.log(i);
    }
}


//this program involves a nested loop

// for statement 03 - nested for loop
const prompt = require("prompt-sync")();
const numbers = prompt("Input the numbers: ");
for(let i = 1; i <= numbers; i++){

   console.log();
    for(let j = 1; j <=i; j++){
        console.log(j);
    }

}

//break and continue - continue
const prompt = require("prompt-sync")();
const numbers = 100
for(let i = 1; i <= 100; i++){
   if(i % 7 === 0){
       continue;
   }
   console.log(i);
}

// break and continue 01 - break
const prompt = require("prompt-sync")();
const numbers = prompt("input the number: ")
for(let i = 1; i <= numbers; i++){
    if(i % 7 === 0 && i % 5 === 0){
        break;
    }
    console.log(i);
}


// Good luck. C and javascript are very similar . go conquer!!!!!!
// let's take the inputt first

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

// now convert input to numbers

num1 = Number(num1);
num2 = Number(num2);

// lets calucute the sum 

let sum = num1 + num2;

// now let check even or odd 

if (sum % 2 === 0) {
    console.log("even sum");
} else {
    console.log("Odd sum");
}
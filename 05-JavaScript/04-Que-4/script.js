let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));
let num3 = Number(prompt("Enter third Number"));
// we take the user input

if (num1 > num2 && num1 > num3) {
    console.log("Largest is:" + num1);
} else if (num2 > num3) {
    console.log("Largest is:" + num2);
} else {
    console.log("Largest is:" + num3);

}
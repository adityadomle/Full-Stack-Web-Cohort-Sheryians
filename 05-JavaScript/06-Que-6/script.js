let num1 = Number(prompt("Enter fist number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = (prompt("Enter operator (+, -, *, /):"));

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    console.log("Invalid operator");
}

console.log("Result is:" + result);

let a = Number(prompt("Enter first number (a):"));
let b = Number(prompt("Enter first second number (b):"));

console.log("Before swapping: a=",a,"b =", b);

//swaping logic
a = a + b;
b = a - b;
a = a - b;

console.log("After swapping: a=",a, "b =", b);

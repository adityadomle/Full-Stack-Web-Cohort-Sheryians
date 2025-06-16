let num = Number(prompt("Enter a number for multiplication table:"));

console.log("Multiplication Table of " + num + ":");

for (let i = 0; i < 100; i++) {
    console.log(num + " x " + i + " = " + (num * i));
};

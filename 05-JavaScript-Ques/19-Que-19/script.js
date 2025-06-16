let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

let second;

if ((a > b && a < c) || (a > c && a < b)) {
    secod = a;
} else if ((b > a && b < c) || (b > c && b < a)) {
    second = b;
} else {
    second = c;
}

console.log("Second largest number is:", second);

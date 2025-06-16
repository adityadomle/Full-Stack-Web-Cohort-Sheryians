let num = Number(prompt("Enter a three-digit number:"));

let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reverced number is:", reverse);

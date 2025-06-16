let num = Number(prompt("Enter a number:"));
let reversed = 0;

while (num > 0) {
    let digit = num % 10;             // last digit nikaal lo
    reversed = reversed * 10 + digit; // us digit ko reversed number me daal do
    num = Math.floor(num / 10);       // last digit hata do
}

console.log("Reversed number is:", reversed);

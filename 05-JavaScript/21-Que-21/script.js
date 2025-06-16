let num = Number(prompt("Enter a number:"));
let count = 0;

num = Math.abs(num); // Negative number handle karne ke liye

while (num > 0) {
    let digit = num % 10;         // Last digit nikalo
    if (digit % 2 === 0) {        // Even check
        count++;
    }
    num = Math.floor(num / 10);   // Last digit hata do
}

console.log("Number of even digits:", count);

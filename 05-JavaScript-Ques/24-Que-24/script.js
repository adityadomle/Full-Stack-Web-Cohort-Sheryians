let input = prompt("Enter numbers separated by commas (e.g. 1,2,3,5):");

let arr = input.split(",").map(Number); // Convert string to array of numbers

let n = arr.length + 1; // Total elements including the missing one
let expectedSum = (n * (n + 1)) / 2; // Formula for sum of 1 to n
let actualSum = 0;

for (let num of arr) {
    actualSum += num;
}

let missing = expectedSum - actualSum;

console.log("Missing number is:", missing);

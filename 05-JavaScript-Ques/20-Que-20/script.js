let word = prompt("Enter a word:");
let counts = {};

// Step 1: Count characters
for (let char of word) {
    if (counts[char]) {
        counts[char]++;
    } else {
        counts[char] = 1;
    }
}

// Step 2: Find first non-repeating character
let found = false;

for (let char of word) {
    if (counts[char] === 1) {
        console.log("First non-repeating character is:", char);
        found = true;
        break;
    }
}

if (!found) {
    console.log("No non-repeating character found.");
}

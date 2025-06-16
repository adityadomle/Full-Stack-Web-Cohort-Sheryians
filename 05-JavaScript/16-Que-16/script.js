let word = prompt("Enter a word:");

let reversed = word.split("").reverse().join("");

if (word === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

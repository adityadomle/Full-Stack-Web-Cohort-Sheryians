let word = prompt("Enter a word:");
let toggled = "";

for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (char === char.toUpperCase()) {
        toggled += char.toLowerCase();
    } else {
        toggled += char.toUpperCase();
    }
}

console.log("Toggled case:", toggled);

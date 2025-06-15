let char = prompt("Enter a single character");

if (char.length !== 1) {
    console.log("Please enter only one character.");
} else {
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
        console.log("Uppercase letter");

    } else if (code >= 97 && code <= 122) {
        console.log("Lowercase letter");

    } else {
        console.log("Not a letter");
    }
}
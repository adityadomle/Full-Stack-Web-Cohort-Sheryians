let age = prompt("Enter your age:");
// we take the input from the user

age = Number(age);

// now lets check conditions 

if (age < 18) {
    console.log("You are kiddo!!!");
} else if (age >= 18 && age <= 60) {
    console.log("You are Adult!");
} else (console.log("Your are Senior citizen."));
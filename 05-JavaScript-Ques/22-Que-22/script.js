let age = Number(prompt("Enter your age:"));
let salary = Number(prompt("Enter your salary:"));

if (age < 18) {
    console.log("Not eligible");
} else {
    if (salary < 20000) {
        console.log("Low Salary");
    } else if (salary >= 50000) {
        console.log("High Salary");
    } else {
        console.log("Medium Salary");
    }
}

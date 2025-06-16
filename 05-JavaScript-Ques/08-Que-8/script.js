let name = prompt("Enter your name:");
let time = Number(prompt("Enter the time inn 24-hour format (0-23):"))

if (time >= 5 && time < 12) {
    console.log("Good Morning," + name + "!");
} else if (time >= 12 && time < 17) {
    console.log("Good Afternoon," + name + "!");
} else if(time >= 17 && time <21){
    console.log("Good Evening," + name + "!");
} else {
    console.log("Good Night," + name + "!");  
}
let color = prompt("Enter traffic light color (red,yellow,green:");

color = color.toLowerCase();

if (color === "red") {
    console.log("Stop!");
} else if (color === "yellow") {
    console.log("Get Ready!");
} else if (color === "green") {
    console.log("Go");
} else {
    console.log("Invalid Error!!");
};
let isOn = false;

function toggleLight() {
    const bulb = document.getElementById("bulb");
    if (isOn) {
        bulb.style.backgroundColor = "gray"; // Light OFF
        isOn = false;
    } else {
        bulb.style.backgroundColor = "yellow"; // Light ON
        isOn = true;
    }
}
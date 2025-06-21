let btn = document.getElementById("addBtn");
let status = document.getElementById("status");

btn.addEventListener("click", function () {
  status.innerHTML = "Request Sending...";
  status.style.color = "orange";
  btn.disabled = true; // temporarily disable button
  btn.innerHTML = "Processing...";
  btn.style.backgroundColor = "#dfe6e9";

  setTimeout(function () {
    status.innerHTML = "Friends ❤️";
    status.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "#636e72";
    btn.disabled = false; // enable button again
  }, 3000); // 3 second delay
});

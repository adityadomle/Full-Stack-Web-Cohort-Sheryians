// Double click like
const likeBox = document.querySelector(".like-box");
const heart = document.querySelector(".heart");

likeBox.addEventListener("dblclick", () => {
  heart.classList.add("show");
  setTimeout(() => {
    heart.classList.remove("show");
  }, 800);
});

// Custom cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mouseenter", () => {
  cursor.style.opacity = 1;
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = 0;
});

document.querySelectorAll("*").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hovering");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovering");
  });
}); 


// Navbar hide/show on scroll
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
});

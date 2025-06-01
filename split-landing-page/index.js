const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => container.classList.add("split-left"));
left.addEventListener("mouseleave", () => container.classList.remove("split-left"));

right.addEventListener("mouseenter", () => container.classList.add("split-right"));
right.addEventListener("mouseleave", () => container.classList.remove("split-right"));
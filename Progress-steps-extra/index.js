let next = document.getElementById("next");
let prev = document.getElementById("prev");
let circles = document.querySelectorAll(".circle");
let progressBar = document.querySelector(".progress-bar");
let stepsText = document.querySelector(".stepsText");
let reset = document.querySelector(".reset");
let spinner = document.querySelector(".spinner");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    stepsText.style.display = "none";
    progressBar.style.display = "none";
    spinner.classList.remove("hidden");

    setTimeout(() => {
         stepsText.textContent = `Step ${currentActive} out of ${circles.length}`;

    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    let actives = document.querySelectorAll(".active");

    progressBar.style.width = (actives.length - 1)/(circles.length - 1) * 100 + "%";

    if (currentActive === 1) {
        next.disabled = false;
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
        prev.disabled = false;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }

    spinner.classList.add("hidden");
    stepsText.style.display = "block";
    progressBar.style.display = "flex";
    }, 500)
   
}

update();

reset.addEventListener("click", () => {
    currentActive = 1;
    update();
})
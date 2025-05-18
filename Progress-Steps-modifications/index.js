let next = document.getElementById("next");
let prev = document.getElementById("prev");
let circle = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");
let stepText = document.getElementById("stepText");
let reset = document.querySelector(".reset");
const spinner = document.getElementById("spinner");
let progressSteps = document.querySelector(".progress-steps");
let toggleBtn = document.getElementById("toggleOrientation");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circle.length) {
        currentActive = circle.length;
    }

    update();
})

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update () {
    progressSteps.style.display = 'none';
    stepText.style.display = 'none';
    spinner.classList.remove("hidden");

    setTimeout(() => {
        circle.forEach((circle, idx) => {
            if(idx < currentActive) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        })

        updateProgressBar();

        let actives = document.querySelectorAll(".active");

        if (currentActive === 1) {
            next.disabled = false;
            prev.disabled = true; 
        } else if (currentActive === circle.length) {
            next.disabled = true;
            prev.disabled = false; 
        } else {
            next.disabled = false;
            prev.disabled = false;
        }

        stepText.textContent = `Step ${currentActive} out of ${circle.length}`;

        spinner.classList.add("hidden");
        progressSteps.style.display = 'flex';
        stepText.style.display = 'block';

    }, 500);

    
}

update();

reset.addEventListener("click", () => {
    currentActive = 1;
    update();
})

toggleBtn.addEventListener("click", () => {
    if (progressSteps.classList.contains("horizontal")) {
        progressSteps.classList.remove("horizontal");
        progressSteps.classList.add("vertical");
    } else {
        progressSteps.classList.remove("vertical");
        progressSteps.classList.add("horizontal");  
    }

    updateProgressBar();
})

function updateProgressBar() {
    const orientation = progressSteps.classList.contains("horizontal") ? "horizontal" : "vertical";
    const ratio = (currentActive - 1) / (circle.length - 1);

    if (orientation === "horizontal") {
        progress.style.width = ratio * 100 + "%";
        progress.style.height = "4px";
    } else {
        progress.style.height = ratio * 100 + "%";
        progress.style.width = "4px";
    }
}
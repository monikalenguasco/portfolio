let panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener ("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

let currentIndex = 0;

function showNextSlide() {
    removeActiveClasses();
    panels[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % panels.length
}

setInterval(showNextSlide, 5000);
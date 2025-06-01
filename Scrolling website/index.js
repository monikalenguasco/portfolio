const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", checkSections);

checkSections();

function checkSections() {
    const triggerBottom = window.innerHeight / 10 * 7;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    })
}
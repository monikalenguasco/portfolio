const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const faqBox = toggle.parentElement;
        faqBox.classList.toggle("active")
    })
})

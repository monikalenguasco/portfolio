var panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

var removeActiveClasses = function() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
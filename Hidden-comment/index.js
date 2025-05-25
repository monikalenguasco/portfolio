const container = document.querySelector(".container");
const btnComment = document.querySelector(".btn-comment");
const comment = document.querySelector(".comment");

btnComment.addEventListener("click", () => {
    container.classList.toggle("active");
    comment.focus();
})
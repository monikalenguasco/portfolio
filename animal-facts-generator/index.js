const fact = document.querySelector(".fact");
const btn = document.querySelector(".btn");

btn.addEventListener("click", generateFact)

generateFact()

async function generateFact() {
    try {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json();
        fact.innerText = data.fact;
    } catch (error) {
        fact.innerText = "Can't load any fact";
        console.error(error);
    }
}


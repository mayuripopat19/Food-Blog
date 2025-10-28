const container = document.querySelector(".recipe-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
});

next.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
});
document.querySelector(".prev").addEventListener("click", () => {
    document.querySelector(".recipe-container").scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelector(".next").addEventListener("click", () => {
    document.querySelector(".recipe-container").scrollBy({ left: 300, behavior: "smooth" });
});

const burger = document.querySelector(".burger");
const navLinks = document.querySelector("nav ul");
const links = navLinks.querySelectorAll("a");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    })
})
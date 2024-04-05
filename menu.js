const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector(".aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
    aside.classList.remove("aside");
    console.log("open")
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
    aside.classList.add("aside");
})
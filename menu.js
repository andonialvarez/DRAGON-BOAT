const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector(".aside");
const volver = document.querySelector(".volver")

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
    aside.classList.remove("aside");
    volver.classList.remove("volver")
    console.log("open")
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
    aside.classList.add("aside");
    cargarProductos(productos);
})
const menuOfthePage = document.querySelector ('.menu-of-the-page')
const menuOfTheHeader = document.querySelector ('.menu-of-the-header')

menuOfthePage.addEventListener("click", () => {
    menuOfthePage.classList.toggle("ativo");
    menuOfTheHeader.classList.toggle("ativo");
})
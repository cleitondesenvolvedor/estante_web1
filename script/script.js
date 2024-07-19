const btn_hamburguer = document.getElementById("btn-hamburguer")
const navMenu = document.getElementById("menu-nav")

btn_hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle("aparecer")
})
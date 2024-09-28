//NavBar scroll.......
window.addEventListener('scroll',()=>{
    let nav = document.querySelector("nav") //Nav tag use
    nav.classList.toggle("nav-scroll",window.scrollY>0);
})

// Menu-Bar js.... close and open ;
let menuBar = document.querySelector(".menu-bar")
let menuButton = document.querySelector(".menu-button")

menuButton.addEventListener('click',()=>{
    menuBar.classList.toggle('menu-none')
})  
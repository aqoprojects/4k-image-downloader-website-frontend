let menuOpen = document.querySelector(".hamburger")
let menuClose = document.querySelector(".menu-close")
menuOpen.addEventListener("click", ()=>{
  document.querySelector(".menu").style.display = "block"
})
menuClose.addEventListener("click", ()=>{
  document.querySelector(".menu").style.display = "none"
})
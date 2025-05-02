let closeFullScreen = document.querySelector(".full-screen-close")

let fullScreenImage = document.querySelector(".photo-full-screen-mode")

closeFullScreen.addEventListener("click", ()=>{
  fullScreenImage.classList.add("hidden")
})


let fullscreenBtn = document.querySelectorAll(".photo-full-screen")

fullscreenBtn.forEach(element => {
  element.addEventListener("click", ()=>{
    let getImage = element.dataset.image
    fullScreenImage.querySelector(".full-screen-image").src=getImage
    fullScreenImage.classList.remove("hidden")
    document.body.classList.add("no-scroll")
  })
});
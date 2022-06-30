// Navbar
const menu=document.querySelector(".menu")
const navbar=document.querySelector(".navbar")

menu.addEventListener("click",()=>{
    navbar.classList.toggle("change")
    menu.classList.toggle("change")
})
// End of navbar

// Section-2 video
const video=document.querySelector(".video")
const btn=document.querySelector(".buttons i")
const videoBar=document.querySelector(".video-bar")

function playPause(){
    if(video.paused){
        video.play()
        btn.className="far fa-pause-circle"
        video.style.opacity="0.8"
    }else{
        video.pause()
        btn.className="far fa-play-circle"
        video.style.opacity=".5"
    }
}
video.addEventListener("timeupdate",()=>{
    width=(video.currentTime/video.duration)*100
    videoBar.style.width=`${width}%`
    if(video.currentTime===video.duration){
        videoBar.style.width="0"
        btn.className="far fa-play-circle"
        video.style.opacity='.5'
    }
})
btn.addEventListener("click",playPause)
// End of section-2 video

// swipe effect
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });
// end of swipe effect

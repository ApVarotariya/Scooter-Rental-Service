burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
logo = document.querySelector(".logo")
rightNav = document.querySelector(".right-nav")

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class-resp")
  logo.classList.toggle("v-class-resp")
  navbar.classList.toggle("h-nav-resp")
})

burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
logo = document.querySelector(".logo")
rightnav = document.querySelector(".rightnav")

burger.addEventListener("click", () => {
  rightnav.classList.toggle("v-class-resp")
  // logo.classList.toggle("v-class-resp")
  navbar.classList.toggle("h-nav-resp")
})

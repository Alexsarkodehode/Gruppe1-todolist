// Hamburger menu

const navBtnEl = document.querySelector(".hamburger");
const navbarEl = document.querySelector(".navbar");

navBtnEl.addEventListener("click", function () {
  navBtnEl.classList.toggle("is-active");
  navbarEl.classList.toggle("is-active");
});

// Hamburger menu

const navBtnEl = document.querySelector(".hamburger");
const navbarEl = document.querySelector(".navbar");

navBtnEl.addEventListener("click", function () {
  navBtnEl.classList.toggle("is-active");
  navbarEl.classList.toggle("is-active");
});
/* ----------------------------
!!!! Link to Deve's Github !!!!
----------------------------- */
const alexanderGithub = document.querySelector("#alexander");
const andreGithub = document.querySelector("#andre");
const ilakiaGithub = document.querySelector("#ilakia");

alexanderGithub.addEventListener("click", function () {
  window.open("https://github.com/Alexsarkodehode", "_blank");
});

andreGithub.addEventListener("click", function () {
  window.open("https://github.com/AndreK-B06", "_blank");
});
ilakiaGithub.addEventListener("click", function () {
  window.open("https://github.com/Ilakiab08", "_blanck");
});

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
const githubs = {
  alexanderGithub: document.querySelector("#alexander"),
  andreGithub: document.querySelector("#andre"),
  ilakiaGithub: document.querySelector("#ilakia"),
};

githubs.alexanderGithub.addEventListener("click", function () {
  window.open("https://github.com/Alexsarkodehode", "_blank");
});

githubs.andreGithub.addEventListener("click", function () {
  window.open("https://github.com/AndreK-B06", "_blank");
});
githubs.ilakiaGithub.addEventListener("click", function () {
  window.open("https://github.com/Ilakiab08", "_blanck");
});
//great use on btns

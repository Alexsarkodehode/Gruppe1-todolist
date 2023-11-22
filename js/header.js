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

// const githubBtn = {
//   alex: query,
//   andre: query,
//   ilakia: query,
// };
// const githubLink = {
//   alex: link,
//   andre: link,
//   ilakia: link,
// };
// githubBtn.alex.addEventListener("click", function () {
//   window.open(githubLink.alex);
// });
// githubBtn.andre.addEventListener("click", function () {
//   window.open(githubLink.andre);
// });
// githubBtn.ilakia.addEventListener("click", function () {
//   window.open(githubLink.ilakia);
// });

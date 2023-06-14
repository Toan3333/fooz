const toggle = document.querySelector(".header__bar");
const menu = document.querySelector(".header-menu");
toggle.addEventListener("click", function () {});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut();

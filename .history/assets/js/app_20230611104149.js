function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut();
const toggle = document.querySelector(".header__bar");
const menu = document.querySelector(".header-menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});

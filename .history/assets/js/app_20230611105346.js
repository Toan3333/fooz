function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut();

const toggle = document.querySelector(".header__bar");
const menu = document.querySelector(".header-nav");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (menu.contains(e.target) && e.target.matches(".header__bar")) {
    // Clicked in box
  } else {
    // Clicked outside the box
  }
});

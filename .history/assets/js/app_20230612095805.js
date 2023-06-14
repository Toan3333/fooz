function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 3000);
}
window.onload = fadeOut();

const toggle = document.querySelector(".header__bar-icon");
const menu = document.querySelector(".header-nav");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header__bar-icon")) {
    menu.classList.remove(activeClass);
  }
});
const headerNav = document.getElementById("myDiv");
const link = headerNav.getElementsByClassName("header-link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
  });
}

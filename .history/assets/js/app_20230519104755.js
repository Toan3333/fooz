function loader() {
  document.querySelector(".loader-container").classList.add("fadeout");
}
function fadeout() {
  setInterval(loader, 3000);
}

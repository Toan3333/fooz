var headerNav = document.getElementById("myDiv");
var link = headerNav.getElementsByClassName("header-link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

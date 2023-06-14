function changeProductList(type, element) {
  let tabs = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.background = "#04b90b";
  }
  element.style.background = "#ffffff";
  element.style.color = "#ffffff";
}

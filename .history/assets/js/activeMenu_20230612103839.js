function changeProductList(type, element) {
  let tabs = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.background = "#ffffff";
    tabs[i].style.color = "#000000";
  }
  element.style.background = "#04b90b";
  element.style.color = "#ffffff";
  element.style.borderRadius = "8px";
  switch (type) {
    case "fast-food":
      document.getElementById("fast-food");
      break;

    default:
      break;
  }
}

function lightMode() {
  var e = document.body;
  e.classList.toggle("light-mode");

  var element = document.getElementById("lightMode");
  element.classList.remove("fa fa-moon");
  element.classList.add("fa fa-sun");
}

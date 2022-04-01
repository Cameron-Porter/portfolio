function darkMode() {
  var e = document.body;
  e.classList.toggle("dark-mode");

  var element = document.getElementById("darkMode");
  element.classList.remove("fa fa-moon");
  element.classList.add("fa fa-sun");
}

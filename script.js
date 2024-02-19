document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector("nav");
  window.onscroll = function () {
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#f79b69";
    } else {
      navbar.style.backgroundColor = "#f2864b";
    }
  };
});

var menuIcon = document.querySelector(".menu-icon");
var slidebar = document.querySelector(".slidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function() {
    slidebar.classList.toggle("small-slidebar");
    container.classList.toggle("large-container");
}
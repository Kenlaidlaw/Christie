const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// taking the active class of home when about is clicked
const homeClick = document.getElementById("home_click");
const aboutClick = document.getElementById("about_click");
const galleryClick = document.getElementById("gallery_click");
const contactClick = document.getElementById("contact_click");

aboutClick.addEventListener("click", aboutCurrent);

function aboutCurrent() {
  aboutClick.classList.add("current");
  homeClick.classList.remove("current");
  galleryClick.classList.remove("current");
  contactClick.classList.remove("current");
}

homeClick.addEventListener("click", homeCurrent);

function homeCurrent() {
  aboutClick.classList.remove("current");
  homeClick.classList.add("current");
  galleryClick.classList.remove("current");
  contactClick.classList.remove("current");
}

galleryClick.addEventListener("click", galleryCurrent);

function galleryCurrent() {
  aboutClick.classList.remove("current");
  homeClick.classList.remove("current");
  galleryClick.classList.add("current");
  contactClick.classList.remove("current");
}
homeClick.addEventListener("click", contentCurrent);

function contentCurrent() {
  aboutClick.classList.remove("current");
  homeClick.classList.remove("current");
  galleryClick.classList.remove("current");
  contactClick.classList.add("current");
}

// slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider-img");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

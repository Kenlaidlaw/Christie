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
const homeClick = document.getElementById('home_click');
const aboutClick = document.getElementById('about_click');

aboutClick.addEventListener('click', aboutCurrent);

function aboutCurrent() {
  aboutClick.classList.add('current')
  homeClick.classList.remove('current')
}

homeClick.addEventListener('click', homeCurrent);

function homeCurrent() {
  aboutClick.classList.remove('current')
  homeClick.classList.add('current')
}


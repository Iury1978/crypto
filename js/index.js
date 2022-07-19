const headerNavBtn = document.querySelector(".header__nav-btn");
const headerNav = document.querySelector(".header__nav");

headerNavBtn.addEventListener('click', () => {
  headerNav.classList.toggle("header__nav_open");
})
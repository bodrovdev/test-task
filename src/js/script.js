let navButton = document.getElementById('nav-button');
let menuButton = document.getElementById('nav-menu');
let menuLogo = document.getElementById('nav-logo');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('navigation-menu__burger--opened');
  menuButton.classList.toggle('page-nav--opened');
  menuLogo.classList.toggle('navigation-menu__logo-block--opened');
})

const hamburgerMenu = document.querySelector('.hamburger');
const closeButton = document.querySelector('.closeBtn');
const popNav = document.querySelectorAll('.pop-nav');

function openNav() {
  document.getElementById('mobileNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('mobileNav').style.display = 'none';
}

hamburgerMenu.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
popNav.forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('mobileNav').style.display = 'none';
  });
});
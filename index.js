function openNav() {
  document.getElementById('mobileNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('mobileNav').style.display = 'none';
}

document.querySelector('.hamburger').addEventListener('click', openNav);
document.querySelector('.closeBtn').addEventListener('click', closeNav);
document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('mobileNav').style.display = 'none';
  });
});
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
// Card creation for mobile version.
// const projects = [{
//   id: '1',
//   title: 'Project name goes here',
//   features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
//   image: './assets/images/Rectangle21.svg',
//   img: './assets/images/Union.svg',
//   sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
//   sideImage: [
//       './assets/images/Rectangle21.svg',
//       './assets/images/Rectangle21.svg',
//       './assets/images/Rectangle21.svg',
//       './assets/images/Rectangle21.svg',
//   ],
//   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// enim ad minim veniam, quis nostrud exercitation ullamco laboris
// <br /><br />
// nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
// amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi.`,
//   linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
//   linkToLive: 'https://github.com/NurkaAmre',
//   btn: 'See Source',
//   side: ['Next Project', 'Previous Project'],
//   icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
//   btnForPopup: ['See Live','See Source']
// }, {
//   id: '2',
//   title: 'Project name goes here',
//   features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
//   image: './assets/images/Rectangle22.svg',
//   img: './assets/images/Union.svg',
//   sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
//   sideImage: [
//       './assets/images/Rectangle22.svg',
//       './assets/images/Rectangle22.svg',
//       './assets/images/Rectangle22.svg',
//       './assets/images/Rectangle22.svg',
//   ],
//   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// enim ad minim veniam, quis nostrud exercitation ullamco laboris
// <br /><br />
// nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
// amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi.`,
//   linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
//   linkToLive: 'https://github.com/NurkaAmre',
//   btn: 'See Source',
//   side: ['Next Project', 'Previous Project'],
//   icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
//   btnForPopup: ['See Live','See Source']
// }, {
//   id: '3',
//   title: 'Project name goes here',
//   features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
//   image: './assets/images/Rectangle23.svg',
//   img: './assets/images/Union.svg',
//   sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
//   sideImage: [
//       './assets/images/Rectangle23.svg',
//       './assets/images/Rectangle23.svg',
//       './assets/images/Rectangle23.svg',
//       './assets/images/Rectangle23.svg',
//   ],
//   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// enim ad minim veniam, quis nostrud exercitation ullamco laboris
// <br /><br />
// nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
// amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi.`,
//   linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
//   linkToLive: 'https://github.com/NurkaAmre',
//   btn: 'See Source',
//   side: ['Next Project', 'Previous Project'],
//   icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
//   btnForPopup: ['See Live','See Source']
// }, {
//   id: '4',
//   title: 'Project name goes here',
//   features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
//   image: './assets/images/Rectangle24.svg',
//   img: './assets/images/Union.svg',
//   sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
//   sideImage: [
//       './assets/images/Rectangle24.svg',
//       './assets/images/Rectangle24.svg',
//       './assets/images/Rectangle24.svg',
//       './assets/images/Rectangle24.svg',
//   ],
//   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// enim ad minim veniam, quis nostrud exercitation ullamco laboris
// <br /><br />
// nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
// amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi.`,
//   linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
//   linkToLive: 'https://github.com/NurkaAmre',
//   btn: 'See Source',
//   side: ['Next Project', 'Previous Project'],
//   icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
//   btnForPopup: ['See Live','See Source']
// }, {
//   id: '5',
//   title: 'Project name goes here',
//   features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
//   image: './assets/images/Rectangle25.svg',
//   img: './assets/images/Union.svg',
//   sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
//   sideImage: [
//       './assets/images/Rectangle25.svg',
//       './assets/images/Rectangle25.svg',
//       './assets/images/Rectangle25.svg',
//       './assets/images/Rectangle25.svg',
//   ],
//   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// enim ad minim veniam, quis nostrud exercitation ullamco laboris
// <br /><br />
// nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
// amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi.`,
//   linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
//   linkToLive: 'https://github.com/NurkaAmre',
//   btn: 'See Source',
//   side: ['Next Project', 'Previous Project'],
//   icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
//   btnForPopup: ['See Live','See Source']
// },  {
//   id: '6',
//   title: 'Project name goes here',
//   features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
//   image: './assets/images/Rectangle26.svg',
//   img: './assets/images/Union.svg',
//   sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
//   sideImage: [
//       './assets/images/Rectangle26.svg',
//       './assets/images/Rectangle26.svg',
//       './assets/images/Rectangle26.svg',
//       './assets/images/Rectangle26.svg',
//   ],
//   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// enim ad minim veniam, quis nostrud exercitation ullamco laboris
// <br /><br />
// nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
// amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi.`,
//   linkToSource: 'https://nurkaamre.github.io/portfolio-mobile-version/',
//   linkToLive: 'https://github.com/NurkaAmre',
//   btn: 'See Source',
//   side: ['Next Project', 'Previous Project'],
//   icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
//   btnForPopup: ['See Live','See Source']
// },
// ];

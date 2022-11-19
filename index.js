const hamburgerMenu = document.querySelector('.hamburger');
const closeButton = document.querySelector('.closeBtn');
const popNav = document.querySelectorAll('.pop-nav');
const myForm = document.querySelector('#form');
const errorMessage = document.querySelector('#errorMessage');
const emailInput = document.querySelector('#myEmail');
const fullName = document.querySelector('#fullName');
const textArea = document.querySelector('#msg');

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

myForm.addEventListener('submit', (e) => {
  const emailContent = emailInput.value;
  const nameContent = fullName.value;
  const textContent = textArea.value;
  const testCondition = /[A-Z]/;

  if (testCondition.test(emailContent)) {
    e.preventDefault();
    errorMessage.innerText = 'Email should be in lower-case';
  } else {
    // store the data
    const storedObject = {};
    storedObject.fullName = nameContent;
    storedObject.emailInput = emailContent;
    storedObject.textArea = textContent;
    const serializedObject = JSON.stringify(storedObject);
    localStorage.setItem('userData', serializedObject);
  }
});


const projects = [{
  id: '1',
  class: 'item2',
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  image: './assets/images/Rectangle21.svg',
  img: './assets/images/Union.svg',
  sideArrows: ['./assets/icons/left.png', './assets/icons/right.png'],
  span: '3',
  sideImage: [
    './assets/images/Rectangle21.svg',
    './assets/images/Rectangle21.svg',
    './assets/images/Rectangle21.svg',
    './assets/images/Rectangle21.svg',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
<br /><br />
nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi.`,
  linkToSource: 'https://solorics.github.io/Portfolio-Mobile-FIrst/',
  linkToLive: 'https://github.com/solorics',
  btn: 'See Source',
  side: ['Next Project', 'Previous Project'],
  icons: ['./assets/icons/Vector.png', './assets/icons/Union.png'],
  btnForPopup: ['See Live', 'See Source'],
  nextPrevious: ['./assets/icons/pre.png', './assets/icons/next.png'],
},

function fillData() {
  const desirializedObject = JSON.parse(localStorage.getItem('userData'));
  fullName.value = desirializedObject.fullName;
  emailInput.value = desirializedObject.emailInput;
  textArea.value = desirializedObject.textArea;
}

window.addEventListener('load', fillData);
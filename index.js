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
// Add your Code below this line

function fillData() {
}


window.addEventListener('load', fillData);
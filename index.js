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

const firstInput = document.querySelector('#fullName');
const storedObject = {};
firstInput.addEventListener('change', () => {
  storedObject.fullName = firstInput.value;
  storedObject.emailInput = emailInput.value;
  storedObject.textArea = textArea.value;
  const serializedObject = JSON.stringify(storedObject);
  localStorage.setItem('userData', serializedObject);
});
emailInput.addEventListener('change', () => {
  storedObject.fullName = firstInput.value;
  storedObject.emailInput = emailInput.value;
  storedObject.textArea = textArea.value;
  const serializedObject = JSON.stringify(storedObject);
  localStorage.setItem('userData', serializedObject);
});
textArea.addEventListener('change', () => {
  storedObject.fullName = firstInput.value;
  storedObject.emailInput = emailInput.value;
  storedObject.textArea = textArea.value;
  const serializedObject = JSON.stringify(storedObject);
  localStorage.setItem('userData', serializedObject);
});

function fillData() {
  const desirializedObject = JSON.parse(localStorage.getItem('userData'));
  fullName.value = desirializedObject.fullName;
  emailInput.value = desirializedObject.emailInput;
  textArea.value = desirializedObject.textArea;
}

window.addEventListener('load', fillData);

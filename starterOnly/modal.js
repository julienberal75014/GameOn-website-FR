function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const form = document.querySelector("form");
const closeModalBtn = document.querySelector("#btn-close-modal");

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Close Modal form
function closeModal() {
  modalbg.style.display = 'none';
  window.location.reload();
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeModalBtn.addEventListener("click", closeModal);

// DOM form elements

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.querySelector(".locations");
const conditions = document.querySelector("#checkbox1");

// regex

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const firstNameRegex = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const lastNameRegex = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const ageRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^[0-9]{1,2}$/;


// Alert elements 

const firstAlert = document.getElementById("firstAlert");
const lastAlert = document.getElementById("lastAlert");
const emailAlert = document.getElementById("emailAlert");
const birthdateAlert = document.getElementById("birthdateAlert");
const quantityAlert = document.getElementById("quantityAlert");
const cityAlert = document.getElementById("cityAlert");
const userTermsAlert = document.getElementById("userTermsAlert");

// Validation

const confirmationMessage = document.getElementById("messageForm");
confirmationMessage.style.display = "none";

// Validation function

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validate() {
  let firstNameValidate;
  let lastNameValidate;
  let emailValidate;
  let birthDateValidate;
  let quantityValidate;
  let locationsValidate;
  let conditionsValidate;

  if (firstName.value.match(firstNameRegex) && firstName.value.trim().length >= 2) {
    firstAlert.style.display = "none";
    firstName.style.border = "none";
    firstNameValidate = true;
  } else {
    firstAlert.textContent = "Merci d'entrer un prénom valide";
    firstAlert.style.color = "red";
    firstAlert.style.fontSize = "15px";
    firstName.style.border = "2px solid red";
    firstAlert.style.display = "block";
    firstNameValidate = false;
  }

  if (lastName.value.match(lastNameRegex) && lastName.value.trim().length >= 2) {
    lastAlert.style.display = "none";
    lastName.style.border = "none";
    lastNameValidate = true;
  } else {
    lastAlert.textContent = "Merci d'entrer un nom valide";
    lastAlert.style.color = "red";
    lastAlert.style.fontSize = "15px";
    lastName.style.border = "2px solid red";
    lastAlert.style.display = "block";
    lastNameValidate = false;
  }

  if (email.value.match(emailRegex)) {
    emailAlert.style.display = "none";
    emailAlert.style.border = "none";
    emailValidate = true;
  }
  else {
    emailAlert.textContent = "Merci d'entrer un email valide";
    emailAlert.style.color = "red";
    emailAlert.style.fontSize = "15px";
    email.style.border = "2px solid red";
    emailAlert.style.display = "block";
    emailValidate = false;
  }

  if (birthDate.value.match(ageRegex)) {
    birthdateAlert.style.display = "none";
    birthdateAlert.style.border = "none";
    birthDateValidate = true;
  } else {
    birthdateAlert.textContent = "Merci d'entrer une date de naissance valide";
    birthdateAlert.style.color = "red";
    birthdateAlert.style.fontSize = "15px";
    birthDate.style.border = "2px solid red";
    birthdateAlert.style.display = "block";
    birthDateValidate = false;
  }

  if (quantity.value.match(quantityRegex)) {
    quantityAlert.style.display = "none";
    quantityAlert.style.border = "none";
    quantityValidate = true;
  } else {
    quantityAlert.textContent = "Merci d'entrer un nombre valide entre 0 et 99";
    quantityAlert.style.color = "red";
    quantityAlert.style.fontSize = "15px";
    quantity.style.border = "2px solid red";
    quantityAlert.style.display = "block";
    quantityValidate = false;
  }

  if (locations.value === "0") {
    cityAlert.textContent = "Merci de choisir une ville";
    cityAlert.style.color = "red";
    cityAlert.style.fontSize = "15px";
    locations.style.border = "2px solid red";
    cityAlert.style.display = "block";
    locationsValidate = false;
  } else {
    cityAlert.style.display = "none";
    locations.style.border = "none";
    locationsValidate = true;
  }

  if (conditions.checked) {
    userTermsAlert.style.display = "none";
    userTermsAlert.style.border = "none";
    conditionsValidate = true;
  } else {
    userTermsAlert.textContent = "Merci de valider les conditions d'utilisation";
    userTermsAlert.style.color = "red";
    userTermsAlert.style.fontSize = "15px";
    userTermsAlert.style.display = "block";
    conditionsValidate = false;
  }

  if (firstNameValidate && lastNameValidate && emailValidate && birthDateValidate && quantityValidate && locationsValidate && conditionsValidate) {
    confirmationMessage.style.display = "block";
  }

}





























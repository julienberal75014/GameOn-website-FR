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
}

// Close modal button
function closeModalButton() {
  modalbg.style.display = 'none';
  window.location.reload();
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeModalBtn.addEventListener("click", closeModalButton);

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
const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const numberRegex = /^[a-zA-Z\-1-9]+$/;
const ageRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^[0-9]{1,2}$/;


// Alert elements 

const firstAlert = document.getElementById("firstAlert");
const lastAlert = document.getElementById("lastAlert");
const emailAlert = document.getElementById("emailAlert");
const birthdateAlert = document.getElementById("birthdateAlert");
const quantityAlert = document.getElementById("quantityAlert");
const locationAlert = document.getElementById("cityAlert");
const userTermsAlert = document.getElementById("userTermsAlert");

// Confirmation message

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
  let birthDateValue = birthDate.value;
  let date = new Date(birthDateValue);
  let currentDate = new Date();
  let quantityValidate;
  let locationsValidate;
  let conditionsValidate;

  // First name validation
  // Vérifie que le prénom match avec les regex et qu'il possède au moins 2 caractères, si c'est le cas cela est validé
  // Si le champ du prénom est vide un message d'erreur s'affiche
  // Si le prénom ne match pas avec les regex et compte moins de 2 caractères un message d'erreur s'affiche
  if (firstName.value.match(nameRegex) && firstName.value.match(numberRegex) && firstName.value.trim().length >= 2) {
    firstAlert.style.display = "none";
    firstName.style.border = "none";
    firstNameValidate = true;
  } else if (firstName.value === "") {
    firstAlert.textContent = "Merci de renseigner votre prénom";
    firstAlert.style.color = "red";
    firstAlert.style.fontSize = "15px";
    firstName.style.border = "2px solid red";
    firstAlert.style.display = "block";
    firstNameValidate = false;
  } else {
    firstAlert.textContent = "Merci d'entrer un prénom valide ayant au moins 2 caractères";
    firstAlert.style.color = "red";
    firstAlert.style.fontSize = "15px";
    firstName.style.border = "2px solid red";
    firstAlert.style.display = "block";
    firstNameValidate = false;
  }

  // Last name validation
  // Vérifie que le nom match avec les regex et qu'il possède au moins 2 caractères, si c'est le cas cela est validé
  // Si le champ du nom est vide un message d'erreur s'affiche
  // Si le nom ne match pas avec les regex et compte moins de 2 caractères un message d'erreur s'affiche
  if (lastName.value.match(nameRegex) && lastName.value.match(numberRegex) && lastName.value.trim().length >= 2) {
    lastAlert.style.display = "none";
    lastName.style.border = "none";
    lastNameValidate = true;
  } else if (lastName.value === "") {
    lastAlert.textContent = "Merci de renseigner votre nom";
    lastAlert.style.color = "red";
    lastAlert.style.fontSize = "15px";
    lastName.style.border = "2px solid red";
    lastAlert.style.display = "block";
    lastNameValidate = false;
  } else {
    lastAlert.textContent = "Merci d'entrer un nom valide ayant au moins 2 caractères";
    lastAlert.style.color = "red";
    lastAlert.style.fontSize = "15px";
    lastName.style.border = "2px solid red";
    lastAlert.style.display = "block";
    lastNameValidate = false;
  }

  // Email validation
  // Vérifie que l'email match avec la regex, si c'est le cas cela est validé
  // Si le champ de l'email est vide un message d'erreur s'affiche
  // Si l'email ne match pas avec la regex un message d'erreur s'affiche
  if (email.value.match(emailRegex)) {
    emailAlert.style.display = "none";
    email.style.border = "none";
    emailValidate = true;
  } else if (email.value === "") {
    emailAlert.textContent = "Merci de renseigner votre email";
    emailAlert.style.color = "red";
    emailAlert.style.fontSize = "15px";
    email.style.border = "2px solid red";
    emailAlert.style.display = "block";
    emailValidate = false;
  } else {
    emailAlert.textContent = "Merci d'entrer un email valide";
    emailAlert.style.color = "red";
    emailAlert.style.fontSize = "15px";
    email.style.border = "2px solid red";
    emailAlert.style.display = "block";
    emailValidate = false;
  }

  // Birthdate validation
  // Vérifie que la date de naissance match avec la regex et que l'utilisateur n'est pas née après la date du jour, si c'est le cas cela est validé
  // Si le champ de la date de naissance est vide un message d'erreur s'affiche
  // Si la date de naissance ne match pas avec la regex ou que l'utilisateur est née après la date du jour un message d'erreur s'affiche
  if (birthDate.value.match(ageRegex) && date < currentDate) {
    birthdateAlert.style.display = "none";
    birthDate.style.border = "none";
    birthDateValidate = true;
  } else if (birthDate.value === "") {
    birthdateAlert.textContent = "Merci de renseigner votre date de naissance";
    birthdateAlert.style.color = "red";
    birthdateAlert.style.fontSize = "15px";
    birthDate.style.border = "2px solid red";
    birthdateAlert.style.display = "block";
    birthDateValidate = false;
  } else {
    birthdateAlert.textContent = "Merci d'entrer une date de naissance valide";
    birthdateAlert.style.color = "red";
    birthdateAlert.style.fontSize = "15px";
    birthDate.style.border = "2px solid red";
    birthdateAlert.style.display = "block";
    birthDateValidate = false;
  }

  // Quantity validation
  // Vérifie que la quantité match avec la regex, si c'est le cas cela est validé
  // Si le champ de la quantité est vide un message d'erreur s'affiche
  // Si la quantité n'est pas comprise entre 0 et 99 un message d'erreur s'affiche
  if (quantity.value.match(quantityRegex)) {
    quantityAlert.style.display = "none";
    quantity.style.border = "none";
    quantityValidate = true;
  } else if (quantity.value === "") {
    quantityAlert.textContent = "Merci de renseigner le nombre de tournois";
    quantityAlert.style.color = "red";
    quantityAlert.style.fontSize = "15px";
    quantity.style.border = "2px solid red";
    quantityAlert.style.display = "block";
    quantityValidate = false;
  } else {
    quantityAlert.textContent = "Merci d'entrer un nombre valide entre 0 et 99";
    quantityAlert.style.color = "red";
    quantityAlert.style.fontSize = "15px";
    quantity.style.border = "2px solid red";
    quantityAlert.style.display = "block";
    quantityValidate = false;
  }

  // Location validation
  // Si aucune ville n'a été sélectionnée un message d'erreur s'affiche
  // Si une ville a été sélectionnée cela est validé
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


  // Conditions validation
  // Si les conditions générales d'utilisation sont acceptées c'est validé
  // Si les conditions générales d'utilisation ne sont pas acceptées un message d'erreur s'affiche
  if (conditions.checked) {
    userTermsAlert.style.display = "none";
    conditionsValidate = true;
  } else {
    userTermsAlert.textContent = "Merci de valider les conditions d'utilisation";
    userTermsAlert.style.color = "red";
    userTermsAlert.style.fontSize = "15px";
    userTermsAlert.style.display = "block";
    conditionsValidate = false;
  }

  // Confirmation message
  // Si toutes les validations sont validées un message de confirmation s'affiche et le formulaire est envoyé + reset du formulaire
  // Si une des validations n'est pas validée le message de confirmation ne s'affiche pas
  if (firstNameValidate && lastNameValidate && emailValidate && birthDateValidate && quantityValidate && locationsValidate && conditionsValidate) {
    confirmationMessage.style.display = "block";
    form.reset();
  } else {
    confirmationMessage.style.display = "none";
  }
} // End of the function

function editNav() {
  var x = document.getElementById("myTopnav");
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
const btnCloseModal = document.getElementById("btn-close-modal");

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Close Modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

btnCloseModal.addEventListener("click", closeModal);

// regex

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const firstNameRegex = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
const lastNameRegex = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;




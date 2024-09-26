const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email = document.getElementById("email");
const genQuery = document.getElementById("gen-query");
const suppoRequ = document.getElementById("Support-reque");
const message = document.getElementById("message");
const consent = document.getElementById("checkbox");

//Errors
const firstNameError = document.getElementById("firstNameError");
const secondNameError = document.getElementById("secondNameError");
const emailError = document.getElementById("emailError");
const enquiryError = document.getElementById("enquiryError");
const messageError = document.getElementById("messageError");
const consentError = document.getElementById("consentError");

//Reactions
form.addEventListener("submit", (e) => {
  if (firstName.value === "" || firstName.value == null) {
    e.preventDefault();
    console.log("Please enter your first name");
  }

  if (lastName.value === "" || lastName.value == null) {
    e.preventDefault();
    secondNameError.innerHTML = "Please enter your second name";
  }

  if (email.value === "" || email.value == null) {
    e.preventDefault();
    emailError.innerHTML = "Please enter valid email address";
  }

  if (genQuery.checked === false && suppoRequ.checked === false) {
    e.preventDefault();
    enquiryError.innerHTML = "Please specify your enquiry";
  }

  if (message.value === "" || message.value == null) {
    e.preventDefault();
    messageError.innerHTML = "Please, leave your comment";
  }

  if (consent.checked === false) {
    e.preventDefault();
    consentError.innerHTML = "please, consent in order to submit this form";
  }
});

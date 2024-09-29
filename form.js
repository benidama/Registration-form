//Variables for inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAdress = document.getElementById("emailAdress");
const generalEnquiry = document.getElementById("generalEnquiry");
const supportRequest = document.getElementById("supportRequest");
const message = document.getElementById("message");
const consent = document.getElementById("consentCheckbox");
const form = document.getElementById("form");

//Variables for errors
const firstName_error = document.getElementById("firstName_error");
const lastName_error = document.getElementById("lastName_error");
const emailAdress_error = document.getElementById("emailAdress_error");
const enquiry_error = document.getElementById("enquiry_error");
const message_error = document.getElementById("message_error");
const consent_error = document.getElementById("consent_error");

//Reactions
form.addEventListener("submit", (e) => {
  if (firstName.value === "" || firstName.value == null) {
    e.preventDefault();
    firstName_error.innerHTML = "Please enter your first name";
  }

  if (lastName.value === "" || lastName.value == null) {
    e.preventDefault();
    lastName_error.innerHTML = "Please enter your last name";
  }

  if (emailAdress.value === "" || emailAdress.value == null) {
    e.preventDefault();
    emailAdress_error.innerHTML = "Please enter your email address";
  }

  if (generalEnquiry.checked === false && supportRequest.checked === false) {
    e.preventDefault();
    enquiry_error.innerHTML = "Please specify your enquiry";
  }

  if (message.value === "" || message.value == null) {
    e.preventDefault();
    message_error.innerHTML = "Please describe your question";
  }

  if (consent.checked === false) {
    e.preventDefault();
    consent_error.innerHTML = "Please accept the privacy policy";
  }
});

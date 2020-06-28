const formContainer = document.getElementById("formContainer");

function goToForm() {
    formContainer.scrollIntoView({
        behavior: "smooth"
    })
}

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const selectInput = document.getElementById("selectInput");

const form = document.getElementById("appointment-form");

form.onsubmit = function (event) {
    event.preventDefault();

    form.reset();
}
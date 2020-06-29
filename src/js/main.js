const formContainer = document.getElementById("formContainer");

function goToForm() {
    formContainer.scrollIntoView({
        behavior: "smooth"
    })
}

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

const form = document.getElementById("appointment-form");

let nameRegex = /[A-Za-z]+$/;
let emailRegex = /^\S+@\S+\.\S+$/;
let numRegex = /[0-9]+$/;

const validateName = () => {
    if (nameInput.value === "" || nameRegex.test(nameInput.value) === false) {
        nameInput.placeholder = "Print your name";
        nameInput.style.border = "2px solid #e30b0b"
        nameInput.style.color = "#c40b0b";
        nameInput.classList.add("error");
    } else {
        nameInput.placeholder = "Name";
        nameInput.style.border = "none";
        nameInput.style.color = "#959595";
        nameInput.classList.remove("error");
    }
}

const validateEmail = () => {
    if (emailInput.value === "" || emailRegex.test(emailInput.value) === false) {
        emailInput.placeholder = "Print your email";
        emailInput.style.border = "2px solid #e30b0b"
        emailInput.style.color = "#c40b0b";
        emailInput.classList.add("error");
    } else {
        emailInput.placeholder = "Email";
        emailInput.style.border = "none";
        emailInput.style.color = "#959595";
        emailInput.classList.remove("error");
    }
}

const validatePhone = () => {
    if (phoneInput.value === "" || numRegex.test(phoneInput.value) === false) {
        phoneInput.placeholder = "Print your phone";
        phoneInput.style.border = "2px solid #e30b0b"
        phoneInput.style.color = "#c40b0b";
        phoneInput.classList.add("error");
    } else {
        phoneInput.placeholder = "Phone";
        phoneInput.style.border = "none";
        phoneInput.style.color = "#959595";
        phoneInput.classList.remove("error");
    }
}

form.onsubmit = function (event) {
    event.preventDefault();

    validateName();
    validateEmail();
    validatePhone();

    form.reset();
}

// SLIDER

// external js: ../flickity/flickity.js

var utils = window.fizzyUIUtils;

var carousel = document.querySelector('.gallery__slider');
var flkty = new Flickity(carousel, {
    prevNextButtons: false,
    pageDots: false
});

// elements
var cellsButtonGroup = document.querySelector('.gallery__slider-controls');
var cellsButtons = utils.makeArray(cellsButtonGroup.children);

// update buttons on select
flkty.on('select', function () {
    var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
    var selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
    previousSelectedButton.classList.remove('is-selected');
    selectedButton.classList.add('is-selected');
});

// cell select
cellsButtonGroup.addEventListener('click', function (event) {
    if (!matchesSelector(event.target, '.gallery__slider-btn')) {
        return;
    }
    var index = cellsButtons.indexOf(event.target);
    flkty.select(index);
});
const formContainer=document.getElementById("formContainer");function goToForm(){formContainer.scrollIntoView({behavior:"smooth"})}const nameInput=document.getElementById("nameInput"),emailInput=document.getElementById("emailInput"),phoneInput=document.getElementById("phoneInput"),selectInput=document.getElementById("selectInput"),form=document.getElementById("appointment-form");form.onsubmit=function(e){e.preventDefault(),form.reset()};
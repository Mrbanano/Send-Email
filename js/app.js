//variables
const email = document.getElementById("email");
const subject = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const btnSend = document.getElementById("enviar");
//Event
EventListener();

function EventListener() {
  //button
  document.addEventListener("DOMContentLoaded", starApp);
  //input
  email.addEventListener("blur", validateInput);
  subject.addEventListener("blur", validateInput);
  message.addEventListener("blur", validateInput);
}

//function
function starApp() {
  btnSend.disabled = true;
}

//validate input

function validateInput() {
  //validate no empty
  validatelength(this);

  if (this.type === "email") {
    validateEmail(this);
  }
  //empty
  let errores = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (errores.length === 0) {
      btnSend.disabled = false;
    }
  }
}
//validate length
function validatelength(field) {
  console.log(field.value.length);
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}
//validate email
function validateEmail(field) {
  const email = field.value;
  if (email.indexOf("@") !== -1) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

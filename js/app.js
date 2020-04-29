//variables
const email = document.getElementById("email");
const subject = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const btnSend = document.getElementById("enviar");
const btnReset = document.getElementById("resetBtn");
const formSend = document.getElementById("enviar-mail");
//Event
EventListener();

function EventListener() {
  //button
  document.addEventListener("DOMContentLoaded", starApp);
  //input
  email.addEventListener("blur", validateInput);
  subject.addEventListener("blur", validateInput);
  message.addEventListener("blur", validateInput);
  //btn Send
  btnSend.addEventListener("click", SendEmail);
  //btn reset
  btnReset.addEventListener("click", ResetForm);
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
//reset Form
function ResetForm(e) {
  e.preventDefault();
  formSend.reset();
}
//send email
function SendEmail(e) {
  e.preventDefault();
  //block inputs
  inputDisable(true);
  //spiner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "block";
  //img email
  const send = document.createElement("img");
  send.src = "img/mail.gif";
  send.style.display = "block";
  //change img
  setTimeout(function () {
    spinner.style.display = "none";
    document.querySelector("#loaders").appendChild(send);
    //remove items
    setTimeout(function () {
      send.remove();
      formSend.reset();
      inputDisable(false);
    }, 3000);
  }, 3000);
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
//validate email type
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
//control disable
function inputDisable(state) {
  email.disabled = state;
  subject.disabled = state;
  message.disabled = state;
}

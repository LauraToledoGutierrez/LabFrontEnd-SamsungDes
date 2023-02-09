function validar(){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;
  var error = document.getElementById("error");
  var errorE = document.getElementById("errorE");
  var errorP = document.getElementById("errorP");
  var errorP2 = document.getElementById("errorP2");
  var input = document.getElementById("nombre");
  var inputE = document.getElementById("email");
  var inputP = document.getElementById("password");
  var inputP2 = document.getElementById("password2");
  
  validateName(input, error, nombre);
  validateName(input, error, nombre);
  validateEmail(inputE, errorE, email);
  validatePassword1(inputP, errorP, password);
  validatePassword2(inputP2, errorP2, password, password2);
  allValidate(input, inputE, inputP, inputP2);
}
  

function validateEmailType(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validatePassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}
function validatePasswordMatch(password, confirmPassword) {
  if (password === confirmPassword) {
    return true;
  } else {
    return false;
  }
}
function invalidateInput(input, error, errorMessage){
  error.textContent = errorMessage;
  error.classList.add("error");
  input.classList.remove("input-valid");
  input.classList.add("input-invalid");
  input.style.display = "inline-block";
}
function validateInput(input, error, errorMessage){
  error.textContent = errorMessage;
  error.classList.remove("error");
  input.classList.remove("input-invalid");
  input.classList.add("input-valid");
  input.style.display = "inline-block";
}

function validateName(input, error, nombre) {
  if (nombre == "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!isNaN(nombre)) {
    invalidateInput(input, error, "El nombre solo puede contener caracteres alfabeticos"); 
  } else {
    validateInput(input, error, " ");
  }
}
function validateEmail(input, error, email) {
  if (email == "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!validateEmailType(input.value)) {
    invalidateInput(input, error, "Email invalido");
  } else {
    validateInput(input, error, " ");
  }
}
function validatePassword1(input, error, password) {
  if (password == "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!validatePassword(input.value)) {
    invalidateInput(input, error, "Debe tener más de 8 caracteres");
  } else {
    validateInput(input, error, " ");
  }
}

function validatePassword2(input, error, password, password2) {
  if (password2 == "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!validatePasswordMatch(password, password2)) {
    invalidateInput(input, error, "Las contraseñas no coinciden");
  } else {
    validateInput(input, error, " ");
  }
}

function allValidate(input, inputE, inputP, inputP2){
  if(input.classList.contains("input-valid") && 
    inputE.classList.contains("input-valid") &&
    inputP.classList.contains("input-valid") &&
    inputP2.classList.contains("input-valid")){
      alert("Todos los inputs están válidos");
    }
}

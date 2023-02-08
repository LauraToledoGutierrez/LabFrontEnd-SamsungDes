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
  
  if (nombre == "") {
    error.textContent = "Rellene este campo";
    error.classList.add("error");
    input.setAttribute("title", "ERRRRRRROR");
    input.classList.remove("input-valid");
    input.classList.add("input-invalid");
    input.style.display ="inline-block";

  } else {
    error.textContent = "";
    error.classList.remove("error");
    input.classList.remove("input-invalid");
    input.classList.add("input-valid");
    input.style.display ="inline-block";
  }
  if (email==""){
    errorE.textContent = "Rellene este campo";
    errorE.classList.add("error");
    inputE.classList.remove("input-valid");
    inputE.classList.add("input-invalid");
    inputE.style.display ="inline-block";
  }
  else if (!validateEmail(inputE.value)){
    errorE.textContent = "Email invalido";
    errorE.classList.add("error");
    inputE.classList.remove("input-valid");
    inputE.classList.add("input-invalid");
    inputE.style.display ="inline-block";
  }
  else {
    errorE.textContent="";
    errorE.classList.remove("error");
    inputE.classList.remove("input-invalid");
    inputE.classList.add("input-valid");
    inputE.style.display ="inline-block";
  }
  if(!isNaN(nombre) && !nombre==""){ //ECHARLE UN OJO 
    error.textContent = "El nombre solo puede contener caracteres alfabeticos";
    error.classList.add("error");
    input.classList.remove("input-valid");
    input.classList.add("input-invalid");
    
  } else if(isNaN(nombre)) {
    error.textContent = "";
    error.classList.remove("error");
    input.classList.remove("input-invalid");
    input.classList.add("input-valid");
  }

  if(password == ""){
    errorP.textContent = "Rellene este campo";
    errorP.classList.add("error");
    inputP.classList.remove("input-valid");
    inputP.classList.add("input-invalid");
    inputP.style.display ="inline-block";
  }
  else if(!validatePassword(inputP.value)){
    errorP.textContent="Debe tener mas de 8 caracteres";
    errorP.classList.add("error");
    inputP.classList.remove("input-valid");
    inputP.classList.add("input-invalid");
    inputP.style.display ="inline-block";
  }
  else{
    errorP.textContent="";
    errorP.classList.remove("error");
    inputP.classList.remove("input-invalid");
    inputP.classList.add("input-valid");
    inputP.style.display ="inline-block";
  }

  if(password2 == ""){
    errorP2.textContent = "Rellene este campo";
    errorP2.classList.add("error");
    inputP2.classList.remove("input-valid");
    inputP2.classList.add("input-invalid");
    inputP2.style.display ="inline-block";
  }
  else if(!validatePasswordMatch(inputP.value, inputP2.value)){
    errorP2.textContent = "Las contraseñas no coinciden";
    errorP2.classList.add("error");
    inputP2.classList.remove("input-valid");
    inputP2.classList.add("input-invalid");
    inputP2.style.display ="inline-block";
  }
  else{
    errorP2.textContent="";
    errorP2.classList.remove("error");
    inputP2.classList.remove("input-invalid");
    inputP2.classList.add("input-valid");
    inputP2.style.display ="inline-block";
  }

}
function validateEmail(email) {
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
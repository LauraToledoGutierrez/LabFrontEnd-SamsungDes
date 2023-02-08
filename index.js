

function validar(){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var error = document.getElementById("error");
  var errorE = document.getElementById("errorE");
  var input = document.getElementById("nombre");
  var inputE = document.getElementById("email");
  
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
    errorE.classList.add("errorE");
    inputE.style.border = "3px solid #ff0000";
  }
  else {
    errorE.textContent="";
    errorE.classList.remove("errorE");
    inputE.style.border ="";
  }
  if(!isNaN(nombre) && !nombre==""){
    errorText.textContent = "El nombre solo puede contener caracteres alfabeticos";
    errorText.classList.add("error");
    input.classList.remove("input-valid");
    input.classList.add("input-invalid");
    
  } else if(isNaN(nombre)) {
    errorText.textContent = "";
    errorText.classList.remove("error");
    input.classList.remove("input-invalid");
    input.classList.add("input-valid");
  }
}

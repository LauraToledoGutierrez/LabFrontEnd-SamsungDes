const inputs = document.querySelectorAll('.form-group #formulario input');

/* Función llamada al pulsar el botón 'Enviar' de nuestro formulario */
function validar(){
  /* Recuperamos lo valores y elementos HTML correspondientes con 'document.getElementById' */
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
  
  /* Llamadas a las funciones para validar los campos del form */
  validateName(input, error, nombre);
  validateEmail(inputE, errorE, email);
  validatePassword1(inputP, errorP, password);
  validatePassword2(inputP2, errorP2, password, password2);
  allValidate(input, inputE, inputP, inputP2);
}
  
/* Función para validar el email usando expresiones regulares */
function validateEmailType(email) {
  var exprReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return exprReg.test(email);
}

/* Función para validar la contraseña, validar que tenga una longitud de más de 8 cáracteres */
function validatePassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

/* Función para validar si las dos contraseñas introducidas en los campos correspondientes coinciden */
function validatePasswordMatch(password, confirmPassword) {
  if (password == confirmPassword) {
    return true;
  } else {
    return false;
  }
}

/* Función para indicar que el input es inválido, introducimos el elemento de entrada (input), elemento de error (error) y el mensaje de error (errorMessage)  */
function invalidateInput(input, error, errorMessage){
  /* Asigna el mensaje de error al contenido del elemento de error */
  error.textContent = errorMessage;
  /* Agrega la clase 'error' al elemento de error */
  error.classList.add("error");
  /* Elimina la clase 'input-valid' del elemento de entrada y agrega la clase 'input-invalid' */
  input.classList.remove("input-valid");
  input.classList.add("input-invalid");
  /* Establece el estilo 'display' del elemento de entrada como 'inline-block' */
  input.style.display = "inline-block";
}

/* Función para indicar que el input es validado, introducimos el elemento de entrada (input), elemento de error (error) y el mensaje de error (errorMessage)  */
function validateInput(input, error, errorMessage){
  /* Asigna el mensaje de error al contenido del elemento de error */
  error.textContent = errorMessage;
  /* Elimina la clase 'error' al elemento de error */
  error.classList.remove("error");
  /* Elimina la clase 'input-invalid' del elemento de entrada y agrega la clase 'input-valid' */
  input.classList.remove("input-invalid");
  input.classList.add("input-valid");
  /* Establece el estilo 'display' del elemento de entrada como 'inline-block' */
  input.style.display = "inline-block";
}

/* Función para validar el campo Nombre del formulario */
function validateName(input, error, nombre) {
  /* Controla si el campo esta vacío */
  if (nombre == "") {
    /* Si esta vacio llama a la funcion para invalidar ese campo */
    invalidateInput(input, error, "Rellene este campo");
  /* Controla si el nombre contiene un número o dígitos */
  } else if (!isNaN(nombre) || /\d/.test(nombre)) {
    /* Llama a la función para invalidar ese campo si el nombre contiene un número o dígitos */
    invalidateInput(input, error, "El nombre solo puede contener caracteres alfabeticos"); 
  /* Si el nombre es válido (no esta vacío y solo tienen carácteres alfabéticos) */
  } else {
    /* Llama a la función para validar el campo */
    validateInput(input, error, " ");
  }
}

/* Función para validar el campo Email del formulario */
function validateEmail(input, error, email) {
  /* Controla si el campo esta vacío */
  if (email == "") {
    /* Si esta vacío llama a la funcion para invalidar ese campo */
    invalidateInput(input, error, "Rellene este campo");
  /* Controla llamando a la funcion 'validateEmailType' si el formato del email es valido, devuelve false si es inválido */  
  } else if (!validateEmailType(input.value)) {
    /* Llama a la función para invalidar el campo si el formato es erróneo */ 
    invalidateInput(input, error, "Email invalido");
  /* Si el email es válido (no esta vacío y tiene el formato correcto) */
  } else {
    /* Llama a la función para validar el campo*/
    validateInput(input, error, " ");
  }
}

/* Función para validar el campo Clave del formulario */
function validatePassword1(input, error, password) {
  /* Controla si el campo esta vacío */
  if (password == "") {
     /* Si esta vacío llama a la funcion para invalidar ese campo */
    invalidateInput(input, error, "Rellene este campo");
  /* Controla llamando a la funcion 'validatePassword' si el formato de la clave es válido, devuelve false si es inválido */    
  } else if (!validatePassword(input.value)) {
     /* Llama a la función para invalidar el campo si el formato es erróneo */ 
    invalidateInput(input, error, "Debe tener más de 8 caracteres");
   /* Si la clave es válida (no esta vacía y tiene el formato correcto) */  
  } else {
    /* Llama a la funcion para validar el campo*/
    validateInput(input, error, " ");
  }
}

/* Función para validar el campo 'Confirme su clave' del formulario */
function validatePassword2(input, error, password, password2) {
  /* Controla si el campo esta vacío */
  if (password2 == "") {
    /* Si esta vacío llama a la funcion para invalidar ese campo */
    invalidateInput(input, error, "Rellene este campo");
  /* Controla llamando a la función 'validatePasswordMatch' si las dos claves introducidas coinciden, devuelve false si es inválido */   
  } else if (!validatePasswordMatch(password, password2)) {
    /* Llama a la funcion para invalidar el campo si no coinciden */ 
    invalidateInput(input, error, "Las contraseñas no coinciden");
  /* Si las dos claves introducidas son iguales y no esta vacío el campo */
  } else {
    /* Llama a la función para validar el campo*/
    validateInput(input, error, " ");
  }
}

/* Función para ver si todos los campos del form estan validados */
function allValidate(input, inputE, inputP, inputP2){
  /* Controla si todos los campos del form estan validados*/
  if(input.classList.contains("input-valid") && 
    inputE.classList.contains("input-valid") &&
    inputP.classList.contains("input-valid") &&
    inputP2.classList.contains("input-valid")){
      /* Si estan validados, salta una alerta indicándonos que la inscripción ha sido correcta */
      alert("La inscripción ha sido correcta");
    }
}

/* Valida los campos del formulario de registro, haciendo uso de un evento que es capturado cuando se produce un cambío en algun campo del formulario */
const validarFormulario = (e) => {
  /* Controla que campo ha sido cambiado según el nombre del campo (se obtiene a través de 'e.target.name') */
  switch (e.target.name) {
    /* Según el campo cambiado va llamando a su función de validación correspondiente */
    case "nombre":
      /* Recuperamos lo valores y elementos HTML correspondientes al campo con 'document.getElementById' */
      var error = document.getElementById("error");
      var inpNombre = document.getElementById("nombre");
      var inpNombreValor = document.getElementById("nombre").value;
      /* Llamamos a la función de validación */
      validateName(inpNombre,error,inpNombreValor);
      break;
      case "email":
        /* Recuperamos lo valores y elementos HTML correspondientes al campo con 'document.getElementById' */
        var error = document.getElementById("errorE");
        var inpEmail = document.getElementById("email");
        var inpEmailValor = document.getElementById("email").value;
        /* Llamamos a la función de validación */
        validateEmail(inpEmail,error,inpEmailValor);
      break;
      case "password":
        /* Recuperamos lo valores y elementos HTML correspondientes al campo con 'document.getElementById' */
        var error = document.getElementById("errorP");
        var inpPassword = document.getElementById("password");
        var inpPasswordValue = document.getElementById("password").value;
        /* Llamamos a la función de validación */
        validatePassword1(inpPassword,error,inpPasswordValue);
      break;
      case "password2":
        /* Recuperamos lo valores y elementos HTML correspondientes al campo con 'document.getElementById' */
        var error = document.getElementById("errorP2");
        var inpPassword2 = document.getElementById("password2");
        var inpPasswordValue = document.getElementById("password").value;
        var inpPassword2Value = document.getElementById("password2").value;
        /* Llamamos a la función de validación */
        validatePassword2(inpPassword2,error,inpPasswordValue,inpPassword2Value);
      break;
  }
}

/* Agregamos los eventos a cada elemento del arreglo de inputs, cada vez que ocurra alguno de estos eventos, se llamara a la función 'validarFormulario' */
inputs.forEach((input) => {
  /* Salta cuando el usuario suelta una tecla después de haber presionado y mantenido presionada */
  input.addEventListener('keyup', validarFormulario);
  /* Salta cuando el input pierde el foco (se hace click fuera del elemento) */
  input.addEventListener('blur', validarFormulario);
  /* Salta cuando se hace click en el input */
  input.addEventListener('click', validarFormulario);
});


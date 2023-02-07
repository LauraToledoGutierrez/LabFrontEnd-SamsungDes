

const form = document.querySelector('#create-account');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const inputs = form.querySelector("input");
const label = document.querySelector("#label");
const button = document.querySelector("#button");


form.addEventListener('submit', e => {
  e.preventDefault();

  if (username.value.length < 3) {
    alert('El nombre de usuario debe tener al menos 3 caracteres.');
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden.');
    return;
  }
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("invalid");
    } else {
      input.classList.add("valid");
    }
  });

});
function comprobar(){
    label.innerHTML = "MENSAJE";

}
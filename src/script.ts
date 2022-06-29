let d = document;
let iNombre = <HTMLInputElement>d.getElementById("inputNombre");
let iTelefono = <HTMLInputElement>d.getElementById("inputTelefono");
let iEmail = <HTMLInputElement>d.getElementById("inputEmail");
let btnEnviar = <HTMLButtonElement>d.getElementById("botonConsulta");
let captcha = Math.round(Math.random() * 1000000);
btnEnviar.addEventListener("click", () => {
  console.log(captcha);
});

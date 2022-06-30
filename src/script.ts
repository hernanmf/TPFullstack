let d = document;
let iNombre = <HTMLInputElement>d.getElementById("inputNombre");
let iTelefono = <HTMLInputElement>d.getElementById("inputTelefono");
let iEmail = <HTMLInputElement>d.getElementById("inputEmail");
let btnEnviar = <HTMLButtonElement>d.getElementById("botonConsulta");
let captcha = Math.round(Math.random() * 1000000);
let esNumero = new RegExp("^[0-9]*$");
let esNombre = new RegExp("^[a-zA-Z]+[A-Za-z_ ]+$");
let esMail = new RegExp(
  "^[\\w-]+(\\.[\\w-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
);

btnEnviar.addEventListener("click", () => {
  if (!esNombre.test(iNombre.value)) {
    alert(
      iNombre.value +
        "El nombre ingresado no es válido, revise los datos y vuelva a intentar"
    );
  } else {
    console.log(iNombre.value + " es raro");
  }
});

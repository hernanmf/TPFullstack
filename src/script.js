var d = document;
var iNombre = d.getElementById("inputNombre");
var iTelefono = d.getElementById("inputTelefono");
var iEmail = d.getElementById("inputEmail");
var btnEnviar = d.getElementById("botonConsulta");
var captcha = Math.round(Math.random() * 1000000);
btnEnviar.addEventListener("click", function () {
    console.log(captcha);
});

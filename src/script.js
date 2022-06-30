var d = document;
var iNombre = d.getElementById("inputNombre");
var iTelefono = d.getElementById("inputTelefono");
var iEmail = d.getElementById("inputEmail");
var btnEnviar = d.getElementById("botonConsulta");
var captcha = Math.round(Math.random() * 1000000);
var esNumero = new RegExp("^[0-9]*$");
var esNombre = new RegExp("^[a-zA-Z]+[A-Za-z_ ]+$");
var esMail = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
btnEnviar.addEventListener("click", function () {
    if (!esNombre.test(iNombre.value)) {
        alert(iNombre.value +
            " no es un nombre válido, revise los datos y vuelva a intentar");
    }
    else {
        console.log(iNombre.value + " es raro");
    }
});

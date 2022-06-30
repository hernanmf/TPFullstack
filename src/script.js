var d = document;
var iNombre = d.getElementById("inputNombre");
var iTelefono = d.getElementById("inputTelefono");
var iEmail = d.getElementById("inputEmail");
var taConsulta = d.getElementById("textAreaConsulta");
var btnEnviar = d.getElementById("botonConsulta");
var lCaptcha = d.getElementById("labelCaptcha");
var captcha = Math.round(Math.random() * 1000000);
lCaptcha.innerHTML = "CAPTCHA: " + captcha;
var esNumero = new RegExp("^[0-9]*$");
var esNombre = new RegExp("^[a-zA-Z]+[A-Za-z_ ]+$");
var esMail = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
var seEnvioConsulta = false;
btnEnviar.addEventListener("click", function () {
    if (!seEnvioConsulta) {
        taConsulta.value = taConsulta.value.trim();
        if (!esNombre.test(iNombre.value)) {
            alert("El nombre ingresado no es válido, revisa los datos y volve a intentarlo");
            captcha = Math.round(Math.random() * 1000000);
            lCaptcha.innerHTML = "CAPTCHA: " + captcha;
        }
        else if (!esNumero.test(iTelefono.value) ||
            iTelefono.value.length != 10) {
            alert("El telefono ingresado no es válido, revisa los datos y volve intentarlo");
            captcha = Math.round(Math.random() * 1000000);
            lCaptcha.innerHTML = "CAPTCHA: " + captcha;
        }
        else if (!esMail.test(iEmail.value)) {
            alert("El email ingresado no es válido, revisa los datos y volve intentarlo");
            captcha = Math.round(Math.random() * 1000000);
            lCaptcha.innerHTML = "CAPTCHA: " + captcha;
        }
        else if (taConsulta.value == "") {
            alert("Revisa tu consulta y volve a intentarlo");
            captcha = Math.round(Math.random() * 1000000);
            lCaptcha.innerHTML = "CAPTCHA: " + captcha;
        }
        else {
            var confirma = void 0;
            confirma = confirm("Revisa si tus datos de contacto son correctos.  \nNombre: " +
                iNombre.value +
                " \nTelefono: " +
                iTelefono.value +
                " \nEmail: " +
                iEmail.value);
            if (confirma) {
                var captchaIngresado = void 0;
                captchaIngresado = Number(prompt("Ingresa el Captcha que figura en la base del formulario:"));
                if (captcha === captchaIngresado) {
                    alert("Tu consulta fue enviada!\nTe agradecemos por ponerte en contacto con nosotros!, te responderemos a la brevedad y sino tambien podes agilizar la comunicacion a traves de las redes sociales.\nSaludos, Oh! Maria");
                    seEnvioConsulta = true;
                }
                else {
                    alert("El captcha ingresado es incorrecto reintenta enviar la consulta");
                    captcha = Math.round(Math.random() * 1000000);
                    lCaptcha.innerHTML = "CAPTCHA: " + captcha;
                }
            }
            else {
                captcha = Math.round(Math.random() * 1000000);
                lCaptcha.innerHTML = "CAPTCHA: " + captcha;
            }
        }
    }
    else {
        alert("Tu consulta ya fue enviada con anterioridad. Ni bien tengamos una respuesta nos pondremos en contacto con vos, de todos modos tambien podes agilizar la comunicacion a traves de las redes sociales.\nSaludos, Oh! Maria");
    }
});

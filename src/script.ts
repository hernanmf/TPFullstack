let d = document;
let iNombre = <HTMLInputElement>d.getElementById("inputNombre");
let iTelefono = <HTMLInputElement>d.getElementById("inputTelefono");
let iEmail = <HTMLInputElement>d.getElementById("inputEmail");
let taConsulta = <HTMLTextAreaElement>d.getElementById("textAreaConsulta");
let btnEnviar = <HTMLButtonElement>d.getElementById("botonConsulta");
let lCaptcha = <HTMLLabelElement>d.getElementById("labelCaptcha");
let captcha: number = Math.round(Math.random() * 1000000);
lCaptcha.innerHTML = "CAPTCHA: " + captcha;
let esNumero = new RegExp("^[0-9]*$");
let esNombre = new RegExp("^[a-zA-Z]+[A-Za-z_ ]+$");
let esMail = new RegExp(
  "^[\\w-]+(\\.[\\w-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
);
let seEnvioConsulta: boolean = false;

btnEnviar.addEventListener("click", () => {
  taConsulta.value = taConsulta.value.trim();
  if (!seEnvioConsulta) {
    if (!esNombre.test(iNombre.value)) {
      alert(
        "El nombre ingresado no es válido, revisa los datos y volve a intentarlo"
      );
      captcha = Math.round(Math.random() * 1000000);
      lCaptcha.innerHTML = "CAPTCHA: " + captcha;
    } else if (
      !esNumero.test(iTelefono.value) ||
      iTelefono.value.length != 10
    ) {
      alert(
        "El telefono ingresado no es válido, revisa los datos y volve intentarlo"
      );
      captcha = Math.round(Math.random() * 1000000);
      lCaptcha.innerHTML = "CAPTCHA: " + captcha;
    } else if (!esMail.test(iEmail.value)) {
      alert(
        "El email ingresado no es válido, revisa los datos y volve intentarlo"
      );
      captcha = Math.round(Math.random() * 1000000);
      lCaptcha.innerHTML = "CAPTCHA: " + captcha;
    } else if (taConsulta.value == "") {
      alert("Revisa tu consulta y volve a intentarlo");
      captcha = Math.round(Math.random() * 1000000);
      lCaptcha.innerHTML = "CAPTCHA: " + captcha;
    } else {
      let confirma: boolean;
      confirma = confirm(
        "Revisa si tus datos de contacto son correctos.  \nNombre: " +
          iNombre.value +
          " \nTelefono: " +
          iTelefono.value +
          " \nEmail: " +
          iEmail.value
      );
      if (confirma) {
        let captchaIngresado: number;
        captchaIngresado = Number(
          prompt("Ingresa el Captcha que figura en la base del formulario:")
        );
        if (captcha === captchaIngresado) {
          alert(
            "Tu consulta fue enviada!\nTe agradecemos por ponerte en contacto con nosotros!, te responderemos a la brevedad y sino tambien podes agilizar la comunicacion a traves de las redes sociales.\nSaludos, Oh! Maria"
          );
          seEnvioConsulta = true;
        } else {
          alert(
            "El captcha ingresado es incorrecto reintenta enviar la consulta"
          );
          captcha = Math.round(Math.random() * 1000000);
          lCaptcha.innerHTML = "CAPTCHA: " + captcha;
        }
      } else {
        captcha = Math.round(Math.random() * 1000000);
        lCaptcha.innerHTML = "CAPTCHA: " + captcha;
      }
    }
  } else {
    alert(
      "Tu consulta ya fue enviada con anterioridad. Ni bien tengamos una respuesta nos pondremos en contacto con vos, de todos modos tambien podes agilizar la comunicacion a traves de las redes sociales.\nSaludos, Oh! Maria"
    );
  }
});

//=====================================
// REGISTRO KAT ESPACIAL
//=====================================

window.onload = function () {

    iniciarValidaciones();

};


//=====================================
// INICIAR
//=====================================

function iniciarValidaciones() {

    var nombre = document.getElementById("txtNombre");
    var usuario = document.getElementById("txtUsuario");
    var password = document.getElementById("txtPassword");
    var confirmar = document.getElementById("txtConfirmar");
    var boton = document.getElementById("btnRegistrarme");

    if (nombre != null)
        nombre.onblur = validarNombre;

    if (usuario != null)
        usuario.onkeyup = validarUsuario;

    if (password != null)
        password.onkeyup = validarPassword;

    if (confirmar != null)
        confirmar.onkeyup = compararPasswords;

    if (boton != null)
        boton.onclick = validarFormulario;

}



//=====================================
// MENSAJES
//=====================================

function mostrarMensaje(texto, color) {

    var lbl = document.getElementById("lblMensaje");

    if (lbl == null)
        return true;

    lbl.innerHTML = texto;

    lbl.style.color = color;

}



//=====================================
// NOMBRE
//=====================================

function validarNombre() {

    var txt = document.getElementById("txtNombre");

    if (txt.value.trim() == "") {

        txt.style.borderColor = "#E53935";

        mostrarMensaje("Escribe tu nombre.", "#E53935");

        return false;

    }

    txt.style.borderColor = "#81C784";

    return true;

}



//=====================================
// USUARIO
//=====================================

function validarUsuario() {

    var txt = document.getElementById("txtUsuario");

    var valor = txt.value;

    var expresion = /^[A-Za-z0-9]+$/;

    if (valor.length < 6) {

        txt.style.borderColor = "#E53935";

        mostrarMensaje("El usuario debe tener mínimo 6 caracteres.", "#E53935");

        return false;

    }

    if (!expresion.test(valor)) {

        txt.style.borderColor = "#E53935";

        mostrarMensaje("Solo se permiten letras y números.", "#E53935");

        return false;

    }

    txt.style.borderColor = "#81C784";

    mostrarMensaje("", "#000");

    return true;

}



//=====================================
// PASSWORD
//=====================================

function validarPassword() {

    var txt = document.getElementById("txtPassword");

    if (txt.value.length < 6) {

        txt.style.borderColor = "#E53935";

        mostrarMensaje("La contraseña debe tener mínimo 6 caracteres.", "#E53935");

        return false;

    }

    txt.style.borderColor = "#81C784";

    return true;

}



//=====================================
// CONFIRMAR
//=====================================

function compararPasswords() {

    var p1 = document.getElementById("txtPassword");

    var p2 = document.getElementById("txtConfirmar");

    if (p2.value == "") {

        p2.style.borderColor = "#FFD7E7";

        return false;

    }

    if (p1.value != p2.value) {

        p2.style.borderColor = "#E53935";

        mostrarMensaje("Las contraseñas no coinciden.", "#E53935");

        return false;

    }

    p2.style.borderColor = "#81C784";

    mostrarMensaje("", "#000");

    return true;

}



//=====================================
// FORMULARIO
//=====================================

function validarFormulario() {

    var ok = true;

    if (!validarNombre())
        ok = false;

    if (!validarUsuario())
        ok = false;

    if (!validarPassword())
        ok = false;

    if (!compararPasswords())
        ok = false;

    if (!ok) {

        mostrarMensaje("Corrige los datos antes de continuar.", "#E53935");

        return false;

    }

    mostrarMensaje("Datos correctos.", "#4CAF50");

    return true;

}



//=====================================
// EFECTO INPUTS
//=====================================

document.addEventListener("focusin", function (e) {

    if (e.target.className == "txtCampo") {

        e.target.style.transition = ".30s";

        e.target.style.transform = "scale(1.02)";

    }

});


document.addEventListener("focusout", function (e) {

    if (e.target.className == "txtCampo") {

        e.target.style.transform = "scale(1)";

    }

});



//=====================================
// BOTON
//=====================================

document.addEventListener("mouseover", function (e) {

    if (e.target.className == "btnRegistro") {

        e.target.style.transition = ".25s";

        e.target.style.transform = "translateY(-2px)";

    }

});


document.addEventListener("mouseout", function (e) {

    if (e.target.className == "btnRegistro") {

        e.target.style.transform = "translateY(0px)";

    }

});
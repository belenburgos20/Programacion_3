const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const mensajeError = document.getElementById("mostrarMensajeError");

function validarFormulario() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        mensajeError.textContent = "Por favor, complete todos los campos.";
        return false;
    }

    if (!validarCorreoElectronico(email)) {
        mensajeError.textContent = "Por favor, ingrese un correo electrónico válido.";
        return false;
    }

    if (!validarContraseña(password)) {
        mensajeError.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
        return false;
    }

    mensajeError.textContent = ""; 
    return true;
}

function validarCorreoElectronico(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarContraseña(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}

loginForm.addEventListener("submit", function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});
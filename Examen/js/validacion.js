document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const motivo = document.getElementById("motivo");
        const mensaje = document.getElementById("mensaje");
        const consentimiento = document.getElementById("consentimiento");

        let esValido = true;
        let mensajeError = "";

        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,60}$/;
        if (!regexNombre.test(nombre.value.trim())) {
            esValido = false;
            mensajeError += "• Ingrese un nombre válido.\n";
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo.value.trim())) {
            esValido = false;
            mensajeError += "• Ingrese un correo electrónico válido.\n";
        }

        const regexTel = /^(\+591|591)?[67][0-9]{7}$/;
        if (!regexTel.test(telefono.value.trim())) {
            esValido = false;
            mensajeError += "• El teléfono debe ser un número celular válido.\n";
        }

        if (motivo.value === "") {
            esValido = false;
            mensajeError += "• Seleccione un motivo de contacto.\n";
        }

        if (mensaje.value.trim().length < 10) {
            esValido = false;
            mensajeError += "• El mensaje debe contener al menos 10 caracteres.\n";
        }

        if (!consentimiento.checked) {
            esValido = false;
            mensajeError += "• Debe autorizar el uso de sus datos para enviar la consulta.\n";
        }

        if (!esValido) {
            alert("Error en el formulario:\n\n" + mensajeError);
        } else {
            alert("¡Mensaje enviado con éxito! Espera hasta que te llegue.");
            form.reset();
        }
    });
});
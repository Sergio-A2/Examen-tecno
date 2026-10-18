document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact_form");
    const feedback = document.getElementById("form_feedback");
    if (!form) return;

    const fields = {
        nombre: document.getElementById("nombre"),
        correo: document.getElementById("correo"),
        telefono: document.getElementById("telefono"),
        motivo: document.getElementById("motivo"),
        mensaje: document.getElementById("mensaje"),
        consentimiento: document.getElementById("consentimiento")
    };
    Object.values(fields).forEach(input => {
        if (!input) return;
        input.addEventListener("input", () => {
            if (input.checkValidity()) {
                input.style.borderColor = "var(--success_color)";
            } else {
                input.style.borderColor = "var(--error_color)";
            }
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const errores = [];

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,60}$/.test(fields.nombre.value.trim())) {
            errores.push("Nombre inválido.");
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.correo.value.trim())) {
            errores.push("Correo electrónico inválido.");
        }
        if (!/^(\+591|591)?[67][0-9]{7}$/.test(fields.telefono.value.trim())) {
            errores.push("Celular inválido (8 dígitos).");
        }
        if (!fields.motivo.value) {
            errores.push("Seleccione un motivo.");
        }
        if (fields.mensaje.value.trim().length < 10) {
            errores.push("El mensaje debe contener al menos 10 caracteres.");
        }
        if (!fields.consentimiento.checked) {
            errores.push("Debe aceptar los términos de contacto.");
        }

        if (errores.length > 0) {
            feedback.className = "form_feedback error";
            feedback.innerHTML = `<strong>Errores detectados:</strong><br>• ${errores.join("<br>• ")}`;
        } else {
            feedback.className = "form_feedback success";
            feedback.innerHTML = "<strong>¡Éxito!</strong> Formulario validado y enviado correctamente.";
            form.reset();
            Object.values(fields).forEach(f => f && (f.style.borderColor = "var(--border_color)"));
        }
    });
});
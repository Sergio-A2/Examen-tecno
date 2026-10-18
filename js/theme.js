document.addEventListener("DOMContentLoaded", () => {
    const theme_btn = document.getElementById("btn_modo_oscuro");
        let is_dark_mode = false;
    try {
        const stored_theme = localStorage.getItem("site_theme_config");
        if (stored_theme) {
            const parsed = JSON.parse(stored_theme);
            is_dark_mode = parsed.is_dark === true;
        }
    } catch (e) {
        console.error("Error al parsear el tema desde localStorage", e);
    }

    function apply_theme(dark) {
        document.body.classList.toggle("dark_theme", dark);
        if (theme_btn) {
            theme_btn.setAttribute("aria-pressed", dark ? "true" : "false");
            theme_btn.innerHTML = dark
                ? '<span class="theme_icon">&#9728;&#65039;</span> Modo Claro'
                : '<span class="theme_icon">&#127769;</span> Modo Oscuro';
        }
    }

    apply_theme(is_dark_mode);

    if (theme_btn) {
        theme_btn.addEventListener("click", () => {
            is_dark_mode = !is_dark_mode;
            apply_theme(is_dark_mode);
            localStorage.setItem("site_theme_config", JSON.stringify({ is_dark: is_dark_mode }));
        });
    }
});
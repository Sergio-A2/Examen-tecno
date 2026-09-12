document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("btn-modo-oscuro");
    const currentTheme = localStorage.getItem("site-theme") || "light";

    function updateButtonUI(isDark) {
        if (!themeBtn) return;
        
        if (isDark) {
            themeBtn.innerHTML = '<span class="theme-icon">&#9728;&#65039;</span> Modo Claro';
            themeBtn.setAttribute("aria-label", "Cambiar a tema claro");
            themeBtn.setAttribute("aria-pressed", "true");
        } else {
            themeBtn.innerHTML = '<span class="theme-icon">&#127769;</span> Modo Oscuro';
            themeBtn.setAttribute("aria-label", "Cambiar a tema oscuro");
            themeBtn.setAttribute("aria-pressed", "false");
        }
    }

    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        updateButtonUI(true);
    } else {
        document.body.classList.remove("dark-theme");
        updateButtonUI(false);
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const isDarkNow = document.body.classList.toggle("dark-theme");
            localStorage.setItem("site-theme", isDarkNow ? "dark" : "light");
            updateButtonUI(isDarkNow);
        });
    }
});
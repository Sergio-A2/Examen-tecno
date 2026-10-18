document.addEventListener("DOMContentLoaded", () => {
    const menu_btn = document.getElementById("btn_menu_toggle");
    const nav_menu = document.getElementById("nav_menu");

    if (!menu_btn || !nav_menu) return;

    menu_btn.addEventListener("click", () => {
        const is_expanded = menu_btn.getAttribute("aria-expanded") === "true";
        const next_state = !is_expanded;
        menu_btn.setAttribute("aria-expanded", String(next_state));
        nav_menu.classList.toggle("is_active", next_state);
    });

    nav_menu.querySelectorAll(".nav_link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 1024) {
                menu_btn.setAttribute("aria-expanded", "false");
                nav_menu.classList.remove("is_active");
            }
        });
    });
});
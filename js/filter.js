document.addEventListener("DOMContentLoaded", () => {
    const input_buscador = document.getElementById("input_buscador");
    const container = document.getElementById("skills_container");
    if (!input_buscador || !container) return;
    const initial_skills = Object.freeze([
        { name: "JavaScript", value: 85, level: "Avanzado" },
        { name: "Vue.js", value: 75, level: "Intermedio" },
        { name: "Python", value: 70, level: "Intermedio" },
        { name: "C++", value: 65, level: "Intermedio" },
        { name: "Redes & Packet Tracer", value: 90, level: "Experto" }
    ]);

    input_buscador.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase().trim();
        const filtered_html = initial_skills
            .filter(item => item.name.toLowerCase().includes(term))
            .map(item => `
                <li data-skill="${item.name}">
                    <label>${item.name}:</label>
                    <meter min="0" max="100" value="${item.value}" low="40" high="80" optimum="90">${item.value}%</meter>
                    <span>${item.value}% (${item.level})</span>
                </li>
            `)
            .join("");

        container.innerHTML = filtered_html || '<li>No se encontraron habilidades que coincidan.</li>';
    });
});
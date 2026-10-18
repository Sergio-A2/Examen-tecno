document.addEventListener("DOMContentLoaded", () => {
    const status_box = document.getElementById("github_status");
    const container = document.getElementById("github_repos_container");
    const username = "Sergio-A2"; 

    async function fetch_github_repos() {
        if (!status_box || !container) return;

        // Estado 1: Loading
        status_box.className = "api_status loading";
        status_box.textContent = "Cargando repositorios públicos desde GitHub API...";
        container.innerHTML = "";

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
            if (!response.ok) {
                if (response.status === 404) throw new Error("404: Usuario de GitHub no encontrado.");
                if (response.status === 403) throw new Error("403: Límite de peticiones de la API excedido.");
                throw new Error(`Error en el servidor: HTTP ${response.status}`);
            }

            const repos = await response.json();
            status_box.className = "api_status";
            status_box.textContent = "";

            if (repos.length === 0) {
                container.innerHTML = "<p>No se encontraron repositorios públicos.</p>";
                return;
            }

            container.innerHTML = repos.map(repo => `
                <article class="repo_card">
                    <h4><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h4>
                    <p>${repo.description || "Sin descripción proporcionada."}</p>
                    <p><small>Lenguaje principal: ${repo.language || "Varios"} | Forks: ${repo.forks_count}</small></p>
                </article>
            `).join("");

        } catch (error) {
            status_box.className = "api_status error";
            status_box.textContent = `Error al consumir la API: ${error.message}`;
        }
    }

    fetch_github_repos();
});
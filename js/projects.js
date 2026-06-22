document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects");

  if (!container) {
    console.error("Container #projects não encontrado");
    return;
  }

  fetch("./data/projects.json", { cache: "no-store" })
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro ao carregar JSON: " + res.status);
      }
      return res.json();
    })
    .then(projects => {
      container.innerHTML = "";

      projects.forEach(p => {

        const actionButton = p.link
          ? `
            <a href="${p.link}"
               target="_blank"
               rel="noopener noreferrer"
               class="project-link">
               <i class="fa-solid fa-arrow-up-right-from-square"></i>
               Acessar Projeto
            </a>
          `
          : `
            <span class="project-private">
              <i class="fa-solid fa-lock"></i>
              Projeto Interno
            </span>
          `;

        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
          <div class="project-header">
            <span class="project-category">${p.category ?? "Projeto"}</span>
            <span class="project-year">${p.year ?? ""}</span>
          </div>

          <h3>
            <i class="fa-solid fa-diagram-project"></i>
            ${p.name}
          </h3>

          <p>${p.description}</p>

          <div class="impact">
            <i class="fa-solid fa-bolt"></i>
            ${p.impact}
          </div>

          <div class="stack">
            ${p.stack.map(t => `<span>${t}</span>`).join("")}
          </div>

          <div class="project-footer">
            ${actionButton}
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Erro:", err);
      container.innerHTML = "<p>Erro ao carregar projetos.</p>";
    });
});
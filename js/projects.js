document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects");

  if (!container) {
    console.error("Container #projects não encontrado");
    return;
  }

  const url = window.location.pathname.includes("/projects")
    ? "./data/projects.json"
    : "data/projects.json";

  fetch(url, { cache: "no-store" })
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro ao carregar JSON: " + res.status);
      }
      return res.json();
    })
    .then(projects => {
      container.innerHTML = "";

      projects.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
          <h3><i class="fa-solid fa-diagram-project"></i> ${p.name}</h3>
          <p>${p.description}</p>
          <p class="impact"><i class="fa-solid fa-bolt"></i> ${p.impact}</p>
          <small>${p.stack.join(" • ")}</small>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Erro:", err);
      container.innerHTML = "<p>Erro ao carregar projetos.</p>";
    });
});
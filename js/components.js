async function loadComponent(selector, url) {
  const target = document.querySelector(selector);

  if (!target) return;

  try {
    const res = await fetch(url);
    const html = await res.text();

    target.innerHTML = html;

    initNavbarLogic();

  } catch (err) {
    console.error("Erro ao carregar componente:", err);
  }
}

function initNavbarLogic() {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  if (!themeToggle) return;

  // pega tema salvo ou sistema
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");

  root.setAttribute("data-theme", savedTheme);

  function updateIcon(theme) {
    themeToggle.innerHTML =
      theme === "light"
        ? `<i class="fa-solid fa-sun"></i>`
        : `<i class="fa-solid fa-moon"></i>`;
  }

  updateIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");

    const next = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    updateIcon(next);
  });
}
async function loadComponent(selector, url) {
  const target = document.querySelector(selector);

  if (!target) return;

  try {
    const res = await fetch(url);
    const html = await res.text();

    target.innerHTML = html;

    // 👇 SÓ AQUI depois do DOM existir
    initNavbarLogic();

  } catch (err) {
    console.error("Erro ao carregar componente:", err);
  }
}

function initNavbarLogic() {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  if (!themeToggle) {
    console.warn("themeToggle não encontrado");
    return;
  }

  // aplicar tema salvo OU sistema
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  function updateIcon() {
    const current = root.getAttribute("data-theme");

    themeToggle.innerHTML =
      current === "light"
        ? `<i class="fa-solid fa-sun"></i>`
        : `<i class="fa-solid fa-moon"></i>`;
  }

  updateIcon();

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");

    if (current === "light") {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }

    updateIcon();
  });
}
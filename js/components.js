async function loadComponent(selector, url) {
  const target = document.querySelector(selector);

  if (!target) return;

  const res = await fetch(url);
  const html = await res.text();

  target.innerHTML = html;

  // reativar scripts dependentes da navbar
  initNavbarLogic();
}

function initNavbarLogic() {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  // carregar tema salvo
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  function updateIcon(theme) {
    if (!themeToggle) return;

    themeToggle.innerHTML =
      theme === "light"
        ? `<i class="fa-solid fa-sun"></i>`
        : `<i class="fa-solid fa-moon"></i>`;
  }

  const currentTheme = root.getAttribute("data-theme") || "dark";
  updateIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");

      if (current === "light") {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        updateIcon("dark");
      } else {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        updateIcon("light");
      }
    });
  }
}
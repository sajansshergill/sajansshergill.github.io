const header = document.getElementById("main-header");
const nav = document.getElementById("site-nav");
const navToggle = document.getElementById("nav-toggle");
const themeToggle = document.getElementById("theme-toggle");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(setHeaderState);
}, { passive: true });
setHeaderState();

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.textContent = open ? "Close" : "Menu";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "Menu";
    });
  });
}

(function initTheme() {
  if (!themeToggle) return;

  function applyTheme(theme) {
    const safe = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = safe;
    const isDark = safe === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light" : "Dark";
    try {
      localStorage.setItem("theme", safe);
    } catch {
      // private mode
    }
  }

  applyTheme(document.documentElement.dataset.theme || "light");
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();

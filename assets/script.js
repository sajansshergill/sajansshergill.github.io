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

function closeNav() {
  if (!nav || !navToggle) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = "Menu";
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.textContent = open ? "Close" : "Menu";
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
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
      // storage unavailable in private mode
    }
  }

  applyTheme(document.documentElement.dataset.theme || "light");
  themeToggle.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
})();

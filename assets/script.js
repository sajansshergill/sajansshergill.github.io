// Typing effect
const roles = ["Data Analyst", "Data Engineer", "QA Engineer", "Data Scientist", "SQL & Python"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000;

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("typing-text");

function typeEffect() {
  if (!textElement) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting && charIndex <= currentRole.length) {
    textElement.textContent = currentRole.substring(0, charIndex++);
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    textElement.textContent = currentRole.substring(0, charIndex--);
    setTimeout(typeEffect, erasingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, delayBetweenWords);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll detection for header style
const header = document.getElementById("main-header");

function updateHeaderState() {
  if (!header) return;

  if (window.scrollY > window.innerHeight - header.offsetHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(updateHeaderState);
});
updateHeaderState();

function createRevealObserver(threshold) {
  if (!("IntersectionObserver" in window)) {
    return null;
  }

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold });
}

// Scroll-triggered animation for cert cards
const certCards = document.querySelectorAll(".cert-card");
const certObserver = createRevealObserver(0.1);

certCards.forEach((card) => {
  if (certObserver) {
    certObserver.observe(card);
  } else {
    card.classList.add("visible");
  }
});

// Scroll reveal for additional cards
const revealCards = document.querySelectorAll(
  ".education-card, .experience-card, .project-item, .gallery-card"
);
const revealObserver = createRevealObserver(0.15);

function revealCard(card) {
  if (revealObserver) {
    revealObserver.observe(card);
  } else {
    card.classList.add("visible");
  }
}

revealCards.forEach(revealCard);

// GitHub Projects (client-side fetch)
const githubContainer = document.querySelector(".github-projects[data-github-user]");
const githubGrid = document.getElementById("github-projects-grid");
const githubStatus = document.getElementById("github-projects-status");

async function fetchGitHubRepos(username, perPage) {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=${encodeURIComponent(perPage)}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json"
    }
  });

  if (!res.ok) {
    throw new Error(`GitHub API error (${res.status})`);
  }

  return res.json();
}

function formatNumber(n) {
  try {
    return new Intl.NumberFormat(undefined).format(n);
  } catch {
    return String(n);
  }
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  } catch {
    return "";
  }
}

function renderRepos(repos) {
  if (!githubGrid) return;

  githubGrid.innerHTML = "";

  repos.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "project-item github-repo-card";

    const icon = document.createElement("img");
    icon.src = "/assets/icons/github-icon.jpg";
    icon.alt = `GitHub icon for ${repo.name}`;
    card.appendChild(icon);

    const title = document.createElement("h3");
    title.className = "repo-name";
    const titleLink = document.createElement("a");
    titleLink.href = repo.html_url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.textContent = repo.name;
    title.appendChild(titleLink);
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.className = "repo-description";
    desc.textContent = repo.description ? repo.description : "No description provided.";
    card.appendChild(desc);

    const bottom = document.createElement("div");
    bottom.className = "repo-bottom";

    const lang = document.createElement("span");
    lang.className = "repo-badge repo-language";
    lang.textContent = repo.language ? repo.language : "Misc";
    bottom.appendChild(lang);

    const stars = document.createElement("span");
    stars.className = "repo-badge repo-stars";
    stars.textContent = `Stars ${formatNumber(repo.stargazers_count || 0)}`;
    bottom.appendChild(stars);

    const updated = document.createElement("span");
    updated.className = "repo-badge repo-updated";
    const formatted = formatDate(repo.updated_at);
    updated.textContent = formatted ? `Updated ${formatted}` : "Recently updated";
    bottom.appendChild(updated);

    card.appendChild(bottom);

    const viewLink = document.createElement("a");
    viewLink.className = "project-button";
    viewLink.href = repo.html_url;
    viewLink.target = "_blank";
    viewLink.rel = "noopener noreferrer";
    viewLink.textContent = "View Repo";
    card.appendChild(viewLink);

    githubGrid.appendChild(card);
    revealCard(card);
  });
}

(async function initGitHubProjects() {
  if (!githubContainer || !githubGrid || !githubStatus) return;

  const username = githubContainer.dataset.githubUser;
  const perPageRaw = githubContainer.dataset.githubLimit;
  const perPage = Number(perPageRaw || 6);

  githubStatus.textContent = "Loading latest repositories...";

  const cacheKey = `github-repos-${username}-${perPage}`;
  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
  } catch {
    // Ignore cache issues (private mode, storage disabled, etc.)
  }

  const cacheAgeMs = 1000 * 60 * 30; // 30 minutes
  if (cached && cached.ts && Array.isArray(cached.repos) && Date.now() - cached.ts < cacheAgeMs) {
    githubStatus.textContent = "Up to date.";
    renderRepos(cached.repos);
    return;
  }

  try {
    const repos = await fetchGitHubRepos(username, perPage);
    const visibleRepos = repos
      .filter((r) => !r.fork)
      .slice(0, perPage);

    renderRepos(visibleRepos);
    githubStatus.textContent = visibleRepos.length ? "" : "No repositories found.";

    try {
      localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), repos: visibleRepos }));
    } catch {
      // Ignore caching errors
    }
  } catch (err) {
    githubStatus.textContent = "Could not load GitHub projects right now. Please try again later.";
    // Still render something if there are static fallback cards already on the page.
  }
})();

// Theme toggle (light/dark)
(function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const storageKey = "theme";

  function getPreferredTheme() {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === "light" || stored === "dark") return stored;
    } catch {
      // ignore
    }

    // Fall back to system preference
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function applyTheme(theme) {
    const safeTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = safeTheme;

    const isDark = safeTheme === "dark";
    toggleBtn.setAttribute('aria-pressed', String(isDark));
    toggleBtn.textContent = isDark ? "Light mode" : "Dark mode";

    try {
      localStorage.setItem(storageKey, safeTheme);
    } catch {
      // ignore
    }
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
})();

// Typing Effect (keep existing)
const roles = ["Data Analyst", "Data Scientist"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000;

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("typing-text");

function typeEffect() {
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
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > window.innerHeight - header.offsetHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll-triggered animation for cert cards
const certCards = document.querySelectorAll('.cert-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

certCards.forEach(card => observer.observe(card));

// Modal cart logic for old modal
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');

if (openModalBtn && closeModalBtn && modalOverlay) {
  openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });
}

// --- MODAL LOGIC FOR PROJECTS ---
const projectsData = [
  {
    title: "Customer Churn Prediction & Insights Dashboard (Power BI)",
    image: "/assets/images/customer-churn-prediction-powerbi.png",
    liveLink: "https://your-streamlit-app-1.streamlit.app/",
    githubLink: "https://github.com/sajansshergill/subscription-service-churn"
  },
  {
    title: "Ethical Price Tracker - Streamlit Dashboard",
    image: "/assets/images/ethical-price-tracker-dashboard-streamlit.png",
    liveLink: "https://your-ethical-price-tracker.streamlit.app/",
    githubLink: "https://github.com/sajansshergill/ethical-price-tracker"
  },
  {
    title: "AI-Enhanced Job Listings Analyzer - Streamlit Dashboard",
    image: "/assets/images/ai-enchanced-remote-joblisting-streamlit.png",
    liveLink: "https://your-job-listing-analyzer.streamlit.app/",
    githubLink: "https://github.com/sajansshergill/job-listing-analyzer"
  },
  {
    title: "Adaptive Infrastructure Performance Monitoring - Streamlit Dashboard",
    image: "/assets/images/adaptive-infrastructure-performance-monitoring-streamlit.png",
    liveLink: "https://your-performance-monitoring.streamlit.app/",
    githubLink: "https://github.com/sajansshergill/performance-monitoring"
  },
  {
    title: "PromptEval: Testing and Documenting the Effectiveness of AI Prompts using Python + Power BI",
    image: "/assets/images/promptEval-powerbi.png",
    liveLink: "https://your-prompt-eval-app.streamlit.app/",
    githubLink: "https://github.com/sajansshergill/PromptEval"
  }
];

let currentProjectIndex = 0;

const modalProjectImage = document.getElementById('modalProjectImage');
const modalProjectTitle = document.getElementById('modalProjectTitle');
const modalProjectLink = document.getElementById('modalProjectLink');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');
const projectModalOverlay = document.getElementById('projectModalOverlay');
const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
const openProjectModalBtns = document.querySelectorAll('.open-project-modal-btn');

function openProjectModal(index) {
  if (index >= 0 && index < projectsData.length) {
    currentProjectIndex = index;
    const project = projectsData[currentProjectIndex];

    modalProjectImage.src = project.image;
    modalProjectTitle.textContent = project.title;
    modalProjectLink.href = project.liveLink;
    modalProjectLink.textContent = "🔗 Live Streamlit App";

    prevProjectBtn.disabled = (currentProjectIndex === 0);
    nextProjectBtn.disabled = (currentProjectIndex === projectsData.length - 1);

    projectModalOverlay.style.display = 'flex';
  }
}

openProjectModalBtns.forEach(button => {
  button.addEventListener("click", (event) => {
    const index = parseInt(event.target.dataset.projectIndex);
    if (!isNaN(index)) {
      openProjectModal(index);
    }
  });
});

if (closeProjectModalBtn) {
  closeProjectModalBtn.addEventListener('click', () => {
    projectModalOverlay.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === projectModalOverlay) {
    projectModalOverlay.style.display = 'none';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModalOverlay.style.display === 'flex') {
    projectModalOverlay.style.display = 'none';
  }
});

if (prevProjectBtn) {
  prevProjectBtn.addEventListener("click", () => {
    openProjectModal(currentProjectIndex - 1);
  });
}

if (nextProjectBtn) {
  nextProjectBtn.addEventListener("click", () => {
    openProjectModal(currentProjectIndex + 1);
  });
}
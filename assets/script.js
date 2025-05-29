// Typing Effect
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
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll-triggered animation (optional)
const certCards = document.querySelectorAll('.cert-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

certCards.forEach(card => observer.observe(card));

// Modal cart logic
const openButtons = document.querySelectorAll(".openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const project = btn.getAttribute("data-project");

    let content = "";
    if (project === "churn") {
      content = `
        <img src="/assets/images/churn-dashboard.png" class="modal-img" alt="Churn Dashboard" />
        <h3>Customer Churn Prediction & Insights Dashboard</h3>
        <a href="https://github.com/sajansshergill/subscription-service-churn" class="project-button" target="_blank">GitHub</a>
      `;
    } else if (project === "energy") {
      content = `
        <img src="/assets/images/energy-dashboard.png" class="modal-img" alt="Energy Dashboard" />
        <h3>Energy Pricing and Cost Analysis Dashboard</h3>
        <a href="https://github.com/sajansshergill/energy-cost-dashboard" class="project-button" target="_blank">GitHub</a>
      `;
    }

    modalContent.innerHTML = content;
    modalOverlay.style.display = "flex";
  });
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

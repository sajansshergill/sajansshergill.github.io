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

// Modal logic for simple Power BI view
const openButtons = document.querySelectorAll(".openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const project = btn.getAttribute("data-project");

    let content = "";
    if (project === "churn") {
      content = `
        <img src="/assets/images/customer-churn-prediction-powerbi.png" alt="Churn Dashboard" class="modal-img" />
        <h3>Customer Churn Prediction & Insights Dashboard</h3>
        <p><a href="https://github.com/sajansshergill/subscription-service-churn" target="_blank">🔗 GitHub Repository</a></p>
      `;
    } else if (project === "intern") {
      content = `
        <img src="/assets/images/intern-onboarding-analytics-powerbi.png" alt="Intern Dashboard" class="modal-img" />
        <h3>Intern Onboarding Analytics & Resource Hub</h3>
        <p><a href="https://github.com/sajansshergill/intern-onboarding-analytics" target="_blank">🔗 GitHub Repository</a></p>
      `;
    }

    modalContent.innerHTML = content;
    modalOverlay.classList.add("active");
  });
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

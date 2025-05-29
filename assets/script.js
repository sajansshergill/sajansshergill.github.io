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

// Modal cart logic
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalImg = document.getElementById('modalProjectImg');
const modalTitle = document.getElementById('modalProjectTitle');
const modalLink = document.getElementById('modalProjectLink');

const projectData = [
  {
    title: "Customer Churn Prediction & Insights Dashboard",
    img: "/assets/images/customer-churn-prediction-powerbi.png",
    link: "https://github.com/sajansshergill/subscription-service-churn"
  },
  {
    title: "Intern Onboarding Analytics Dashboard",
    img: "/assets/images/intern-onboarding-analytics-powerbi.png",
    link: "https://github.com/sajansshergill/intern-onboarding-analytics"
  },
  {
    title: "PromptEval Dashboard",
    img: "/assets/images/promptEval-powerbi.png",
    link: "https://github.com/sajansshergill/PromptEval"
  }
];

document.querySelectorAll('.open-project-modal-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    const project = projectData[index];
    modalImg.src = project.img;
    modalTitle.textContent = project.title;
    modalLink.href = project.link;
    modalOverlay.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});


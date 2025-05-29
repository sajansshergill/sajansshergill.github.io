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
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');

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

// --- NEW/UPDATED MODAL LOGIC FOR PROJECTS ---

// Project Data - IMPORTANT: Ensure this array matches your HTML data-project-index
const projectsData = [
  {
    title: "Customer Churn Prediction & Insights Dashboard (Power BI)",
    image: "/assets/images/customer-churn-prediction-powerbi.png",
    githubLink: "https://github.com/sajansshergill/subscription-service-churn"
  },
  {
    title: "Ethical Price Tracker - Streamlit Dashboard",
    image: "/assets/images/ethical-price-tracker-dashboard-streamlit.png",
    githubLink: "https://github.com/sajansshergill/ethical-price-tracker"
  },
  {
    title: "AI-Enhanced Job Listings Analyzer - Streamlit Dashboard",
    image: "/assets/images/ai-enchanced-remote-joblisting-streamlit.png",
    githubLink: "https://github.com/sajansshergill/job-listing-analyzer" 
  },
  {
    title: "Adaptive Infrastructure Performance Monitoring - Streamlit Dashboard",
    image: "/assets/images/adaptive-infrastructure-performance-monitoring-streamlit.png",
    githubLink: "https://github.com/sajansshergill/performance-monitoring" 
  },
  {
    title: "PromptEval: Testing and Documenting the Effectiveness of AI Prompts using Python + Power BI",
    image: "/assets/images/promptEval-powerbi.png",
    githubLink: "https://github.com/sajansshergill/PromptEval"
  }
];

let currentProjectIndex = 0; // Tracks which project is currently displayed in the modal

// Get modal elements by their CORRECT IDs
const projectModalOverlay = document.getElementById("projectModalOverlay");
const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");
const modalProjectImage = document.getElementById("modalProjectImage");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectLink = document.getElementById("modalProjectLink");
const prevProjectBtn = document.getElementById("prevProjectBtn");
const nextProjectBtn = document.getElementById("nextProjectBtn");

// Get all buttons that should open the modal
const openProjectModalBtns = document.querySelectorAll(".open-project-modal-btn"); // Select by the class

// Function to populate and open the modal
function openProjectModal(index) {
  if (index >= 0 && index < projectsData.length) {
    currentProjectIndex = index; // Update the current index
    const project = projectsData[currentProjectIndex]; // Get the project data

    modalProjectImage.src = project.image; // Set modal image source
    modalProjectTitle.textContent = project.title; // Set modal title
    modalProjectLink.href = project.githubLink; // Set modal GitHub link

    // Update navigation button states (enable/disable based on current index)
    prevProjectBtn.disabled = (currentProjectIndex === 0);
    nextProjectBtn.disabled = (currentProjectIndex === projectsData.length - 1);

    projectModalOverlay.classList.add("active"); // Add "active" class to show the modal
  }
}

// Event listeners for opening modals
openProjectModalBtns.forEach(button => {
  button.addEventListener("click", (event) => {
    // Get the index from the 'data-project-index' attribute of the clicked button
    const index = parseInt(event.target.dataset.projectIndex);
    openProjectModal(index); // Call the function to open the modal with this project
  });
});

// Event listener for closing the modal via the 'x' button
closeProjectModalBtn.addEventListener("click", () => {
  projectModalOverlay.classList.remove("active"); // Remove "active" class to hide the modal
});

// Close modal when clicking outside (on the overlay itself)
projectModalOverlay.addEventListener("click", (event) => {
  if (event.target === projectModalOverlay) { // Check if the click was directly on the overlay
    projectModalOverlay.classList.remove("active");
  }
});

// Keyboard navigation (Escape key to close)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModalOverlay.classList.contains("active")) {
    projectModalOverlay.classList.remove("active");
  }
});

// Navigation inside the modal (Prev/Next buttons)
prevProjectBtn.addEventListener("click", () => {
  openProjectModal(currentProjectIndex - 1); // Go to previous project
});

nextProjectBtn.addEventListener("click", () => {
  openProjectModal(currentProjectIndex + 1); // Go to next project
});
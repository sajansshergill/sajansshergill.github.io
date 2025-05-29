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


// Get elements *inside* the modal that will display project data
// These IDs are assumed to be present within your single modal-cart structure
const modalProjectImage = document.getElementById('modalProjectImage');
const modalProjectTitle = document.getElementById('modalProjectTitle');
const modalProjectLink = document.getElementById('modalProjectLink');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');

// Also select ALL buttons that are meant to open a project modal (using a class, as you have multiple)
const openProjectModalBtns = document.querySelectorAll('.open-project-modal-btn');


// Function to populate and open the modal
function openProjectModal(index) {
  if (index >= 0 && index < projectsData.length) {
    currentProjectIndex = index;
    const project = projectsData[currentProjectIndex];

    if (modalProjectImage) modalProjectImage.src = project.image;
    if (modalProjectTitle) modalProjectTitle.textContent = project.title;
    if (modalProjectLink) modalProjectLink.href = project.githubLink;

    // Update navigation button states
    if (prevProjectBtn) prevProjectBtn.disabled = (currentProjectIndex === 0);
    if (nextProjectBtn) nextProjectBtn.disabled = (currentProjectIndex === projectsData.length - 1);

    if (modalOverlay) modalOverlay.style.display = 'flex'; // Use style.display for consistency
  }
}


// Event listeners for opening modals
// First, check if the single 'openModalBtn' exists and add its listener
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    // If you only have ONE specific button with id="openModalBtn" for a project,
    // you might need to manually set the index here, or rely on it being the first project.
    // For a single button that opens the first project:
    openProjectModal(0); // Assuming this specific button opens the first project (index 0)
    // If this openModalBtn is intended for a different project, change the index.
  });
}

// Then, add listeners for all other project-specific "VIEW" buttons using the class
openProjectModalBtns.forEach(button => {
  button.addEventListener("click", (event) => {
    const index = parseInt(event.target.dataset.projectIndex);
    if (!isNaN(index)) { // Ensure the data-project-index is a valid number
      openProjectModal(index);
    }
  });
});


// Event listener for closing the modal via the 'x' button
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    if (modalOverlay) modalOverlay.style.display = 'none';
  });
}

// Close modal when clicking outside (on the overlay itself)
if (modalOverlay) {
  window.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });
}

// Keyboard navigation (Escape key to close)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay && modalOverlay.style.display === 'flex') {
    modalOverlay.style.display = 'none';
  }
});

// Navigation inside the modal (Prev/Next buttons)
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
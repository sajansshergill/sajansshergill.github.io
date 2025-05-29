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

// Scroll detection for header style (MODIFIED)
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  // Change background and text color when scrolled past the hero section
  if (window.scrollY > window.innerHeight - header.offsetHeight) {
    // window.innerHeight is the height of the viewport
    // header.offsetHeight is the height of the header
    // This condition means "when the user has scrolled past the initial hero height minus the header height"
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Scroll-triggered animation for cert cards (keep existing)
const certCards = document.querySelectorAll('.cert-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

certCards.forEach(card => observer.observe(card));

// --- NEW/REVISED MODAL LOGIC (from previous response, ensure this is correct and unique IDs are used) ---

// Project Data - Add all your project details here
const projectsData = [
  {
    title: "Customer Churn Prediction & Insights Dashboard",
    image: "/assets/images/customer-churn-prediction-powerbi.png", // Image to show in modal
    githubLink: "https://github.com/sajansshergill/subscription-service-churn"
  },
  {
    title: "Intern Onboarding Analytics & Resource Hub",
    image: "/assets/images/intern-onboarding-analytics-powerbi.png",
    githubLink: "https://github.com/sajansshergill/intern-onboarding-analytics"
  },
  {
    title: "Another Exciting Project", // Example for a third project
    image: "/assets/images/your-next-project-detail-image.png", // Make sure this image exists
    githubLink: "https://github.com/sajansshergill/another-project"
  },
  {
    title: "Fourth Project Example", // Example for a fourth project
    image: "/assets/images/your-fourth-project-image-detail.png", // Make sure this image exists
    githubLink: "https://github.com/sajansshergill/fourth-project"
  }
  // Add more project objects here
];

let currentProjectIndex = 0;

// Get modal elements
const projectModalOverlay = document.getElementById("projectModalOverlay");
const closeProjectModalBtn = document.getElementById("closeProjectModalBtn");
const modalProjectImage = document.getElementById("modalProjectImage");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectLink = document.getElementById("modalProjectLink");
const prevProjectBtn = document.getElementById("prevProjectBtn");
const nextProjectBtn = document.getElementById("nextProjectBtn");

// Get all buttons that open the modal
const openProjectModalBtns = document.querySelectorAll(".open-project-modal-btn");

// Function to populate and open the modal
function openProjectModal(index) {
  if (index >= 0 && index < projectsData.length) {
    currentProjectIndex = index;
    const project = projectsData[currentProjectIndex];

    modalProjectImage.src = project.image;
    modalProjectTitle.textContent = project.title;
    modalProjectLink.href = project.githubLink;

    // Update navigation button states
    prevProjectBtn.disabled = (currentProjectIndex === 0);
    nextProjectBtn.disabled = (currentProjectIndex === projectsData.length - 1);

    projectModalOverlay.classList.add("active"); // Show modal
  }
}

// Event listeners for opening modals
openProjectModalBtns.forEach(button => {
  button.addEventListener("click", (event) => {
    const index = parseInt(event.target.dataset.projectIndex);
    openProjectModal(index);
  });
});

// Event listener for closing the modal
closeProjectModalBtn.addEventListener("click", () => {
  projectModalOverlay.classList.remove("active"); // Hide modal
});

// Close modal when clicking outside (on the overlay)
projectModalOverlay.addEventListener("click", (event) => {
  if (event.target === projectModalOverlay) {
    projectModalOverlay.classList.remove("active");
  }
});

// Keyboard navigation (Escape key to close)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModalOverlay.classList.contains("active")) {
    projectModalOverlay.classList.remove("active");
  }
});

// Navigation inside the modal
prevProjectBtn.addEventListener("click", () => {
  openProjectModal(currentProjectIndex - 1);
});

nextProjectBtn.addEventListener("click", () => {
  openProjectModal(currentProjectIndex + 1);
});
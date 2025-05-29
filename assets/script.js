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
\const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn'); // This targets the main close button

// Select all close buttons for individual images
const individualCloseBtns = document.querySelectorAll('.close-modal-btn');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

// Event listener for the main close button
closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Event listeners for individual close buttons
individualCloseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // This assumes clicking any of these individual 'x' buttons should also close the entire modal.
    // If they are meant to hide just their specific image/project within the modal,
    // your modal structure needs to change to have individual project cards that can be hidden.
    // For now, this will close the entire modal.
    modalOverlay.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
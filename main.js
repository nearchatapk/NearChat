// Real-time clock for phone mockup
function updatePhoneTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Convert to 12-hour format
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = hours + ":" + minutes;

  const timeElement = document.querySelector(".time");
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

// Update time every second
function startPhoneClock() {
  updatePhoneTime(); // Set initial time
  setInterval(updatePhoneTime, 1000); // Update every second
}

// Mobile menu functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.querySelector(".hamburger");

  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.querySelector(".hamburger");

  mobileMenu.classList.remove("active");
  hamburger.classList.remove("active");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.querySelector(".hamburger");

  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "%";

    // Random animation delay
    particle.style.animationDelay = Math.random() * 15 + "s";

    // Random animation duration
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Smooth scrolling for navigation links
document
  .querySelectorAll('nav a[href^="#"], .mobile-menu a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(28, 42, 58, 0.95)";
  } else {
    header.style.background = "rgba(28, 42, 58, 0.9)";
  }
});

// Download app function
function downloadApp() {
  // Create a temporary download link
  const link = document.createElement("a");
  link.href = "#"; // Replace with actual app download link
  link.download = "NearChat.apk";

  // Show download modal
  showModal(
    "Download Started!",
    "Your NearChat app download should begin shortly. Check your downloads folder."
  );
}

// Submit feedback function
function submitFeedback(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    // Here you would normally send the data to a server
    console.log("Feedback submitted:", { name, email, message });

    // Reset form
    document.querySelector(".feedback-form").reset();

    // Show success modal
    showModal(
      "Thank You!",
      `Hi ${name}! Your feedback has been sent successfully. We appreciate your input and will get back to you soon.`
    );
  }
}

// Modal functions
function showModal(title, message) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Initialize particles and clock when page loads
window.addEventListener("load", function () {
  createParticles();
  startPhoneClock(); // Start the real-time clock
});

// Add scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".feature-card, .section-title");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize scroll animations
window.addEventListener("scroll", animateOnScroll);

// Set initial state for animated elements
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".feature-card");
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s ease";
  });
});

// Close mobile menu when window is resized to desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Prevent body scroll when mobile menu is open
function preventBodyScroll() {
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;

  if (mobileMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

// Update the toggle function to include scroll prevention
const originalToggleMobileMenu = toggleMobileMenu;
toggleMobileMenu = function () {
  originalToggleMobileMenu();
  preventBodyScroll();
};

const originalCloseMobileMenu = closeMobileMenu;
closeMobileMenu = function () {
  originalCloseMobileMenu();
  document.body.style.overflow = "auto";
};

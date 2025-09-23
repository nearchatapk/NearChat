// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after click
    document.getElementById("navLinks").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
  });
});


// Feedback form handling
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const feedbackData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    console.log("Feedback submitted:", feedbackData);

    document.getElementById("successMessage").style.display = "block";
    this.reset();

    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
  });

// Header background on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.1)";
  }
});

// Add animation on scroll for feature cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".feature-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(card);
});

// =======================
// Mobile menu toggle
// =======================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

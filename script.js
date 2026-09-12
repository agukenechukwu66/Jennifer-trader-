// Apex Forex Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const nav = document.querySelector('nav');
  const userIcon = document.querySelector('.user-icon');

  // Interactive Click Event for User Profile
  if (userIcon) {
    userIcon.addEventListener('click', () => {
      alert('Login / Register modal coming soon!');
    });
  }

  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.textContent.trim().toLowerCase();
      console.log(`Navigating to ${target} section...`);
    });
  });
});

// Smooth scroll for navigation
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple feedback for the contact form
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = 'Thank you for your message! (Simulated)';
    form.reset();
  });
}
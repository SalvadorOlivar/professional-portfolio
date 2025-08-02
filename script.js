// Scroll suave para navegación
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

// Feedback simple para el formulario de contacto
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = '¡Gracias por tu mensaje! (Simulado)';
    form.reset();
  });
}
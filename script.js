/* ------------ Mobile Nav Toggle ----------------- */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (navToggle && nav) {
  // Toggle menu open/close
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Auto-close menu when a link is tapped (on mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 640) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}


/* ------------ Lightbox (Galerry Image Viewer) ----------------- */ 
const lb = document.getElementById('lb');
const lbImg = document.getElementById('lb-img');
const lbClose = document.getElementById('lb-close');

if (lb && lbImg) {
  document.addEventListener('click', e => {
    const a = e.target.closest('.lightbox a');
    if (!a) return;
    e.preventDefault();
    lbImg.src = a.href;
    lb.hidden = false;
  });

  lb.addEventListener('click', e => {
    if (e.target === lb) lb.hidden = true; // close on overlay click
  });

  lbClose?.addEventListener('click', () => (lb.hidden = true));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lb.hidden = true;
  });
}


/* ------------ Contact Form (basic validation) ----------------- */ 
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    const status = document.getElementById('form-status');
    let valid = true;

    // Clear previous errors
    form.querySelectorAll('.error').forEach(el => (el.textContent = ''));

    // Validate fields
    if (!name.value.trim()) {
      name.nextElementSibling.textContent = 'Please enter your name.';
      valid = false;
    }
    if (!email.validity.valid) {
      email.nextElementSibling.textContent = 'Please enter a valid email.';
      valid = false;
    }
    if (!message.value.trim()) {
      message.nextElementSibling.textContent = 'Please describe your project.';
      valid = false;
    }

    if (!valid) {
      status.textContent = 'Please fix the errors above.';
      status.style.color = '#b91c1c';
      return;
    }

    // Success feedback (replace with backend/form service later)
    status.textContent = 'Thanks! Your message has been sent.';
    status.style.color = '#2f855a';
    form.reset();
  });
}


/* ------------ Update footer year ----------------- */ 
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();



// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Year in footer
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form (basic client-side validation + demo submission)
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    let ok = true;

    // Clear previous errors
    form.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!name.value.trim()) {
      ok = false; name.nextElementSibling.textContent = 'Please enter your name.';
    }
    if (!email.validity.valid) {
      ok = false; email.nextElementSibling.textContent = 'Please enter a valid email.';
    }
    if (!message.value.trim()) {
      ok = false; message.nextElementSibling.textContent = 'Please describe your project.';
    }

    const status = document.getElementById('form-status');

    if (!ok) {
      status.textContent = 'Please fix the errors above.';
      status.style.color = '#b91c1c';
      return;
    }

    // Demo success (replace with your backend or form service)
    status.textContent = 'Thanks! Your message has been sent.';
    status.style.color = '#2f855a';
    form.reset();
  });
}


document.addEventListener('click', e=>{
  const a = e.target.closest('.lightbox a'); if(!a) return;
  e.preventDefault();
  const lb = document.getElementById('lb');
  const img = document.getElementById('lb-img');
  img.src = a.href; lb.hidden = false;
});
document.getElementById('lb-close')?.addEventListener('click', ()=> {
  document.getElementById('lb').hidden = true;
});
document.getElementById('lb')?.addEventListener('click', e=>{
  if(e.target.id==='lb') e.currentTarget.hidden = true;
});


// // --- Simple lightbox ---
// (function(){
//   const gallery = document.querySelector('.gallery-grid.lightbox');
//   const lb = document.getElementById('lb');
//   const lbImg = document.getElementById('lb-img');
//   const lbClose = document.getElementById('lb-close');
//   if (!gallery || !lb || !lbImg || !lbClose) return;

//   // Open
//   gallery.addEventListener('click', (e) => {
//     const a = e.target.closest('a');
//     if (!a) return;
//     e.preventDefault();
//     lbImg.src = a.getAttribute('href');     // use full-size image URL
//     lb.hidden = false;
//   });

//   // Close (button, overlay click, or Esc)
//   lbClose.addEventListener('click', () => lb.hidden = true);
//   lb.addEventListener('click', (e) => { if (e.target === lb) lb.hidden = true; });
//   document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.hidden = true; });
// })();


// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}


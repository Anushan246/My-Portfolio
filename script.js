const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  // Close menu when a link is clicked (for better UX)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// Contact form toast notification
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Remove any existing toast
    let oldToast = document.querySelector('.toast-msg');
    if (oldToast) oldToast.remove();
    // Create toast
    let toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = 'Message sent!';
    document.body.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2500);
    contactForm.reset();
  });
} 
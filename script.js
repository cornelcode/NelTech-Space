// Basic interactivity and form behavior
document.addEventListener('DOMContentLoaded', () => {
  // set years
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year-2')?.textContent = y;
  document.getElementById('year-3')?.textContent = y;

  // mobile menu
  const hambtn = document.getElementById('hambtn');
  const nav = document.getElementById('nav');
  hambtn?.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });

  // contact form: use mailto (no backend). Compose email body.
  const form = document.getElementById('contactForm');
  const mailtoBtn = document.getElementById('mailtoBtn');

  function composeMailto() {
    const name = document.getElementById('name')?.value || 'No name';
    const email = document.getElementById('email')?.value || 'No email';
    const message = document.getElementById('message')?.value || '';
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    return `mailto:c44553199@gmail.com?subject=${subject}&body=${body}`;
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = composeMailto();
    // try to open mail client
    window.location.href = mail;
  });

  mailtoBtn?.addEventListener('click', () => {
    window.location.href = composeMailto();
  });
});

// Basic interactions: theme toggle, mobile menu toggle, form stub.
(function () {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const yearSpan = document.getElementById('year');

  // set year
  yearSpan.textContent = new Date().getFullYear();

  // Load preference from localStorage (if exists)
  const stored = localStorage.getItem('pref-theme');
  if (stored === 'dark') html.classList.add('dark');

  // helper to update button icons/aria
  function updateThemeButtons() {
    const isDark = html.classList.contains('dark');
    const icon = isDark ? '🌙' : '☀️';
    [themeToggle, themeToggleMobile].forEach(btn => {
      if (!btn) return;
      btn.textContent = icon;
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }
  updateThemeButtons();

  function toggleTheme() {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('pref-theme', isDark ? 'dark' : 'light');
    updateThemeButtons();
  }

  themeToggle?.addEventListener('click', toggleTheme);
  themeToggleMobile?.addEventListener('click', toggleTheme);

  // mobile menu toggle
  menuToggle?.addEventListener('click', function () {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    if (mobileMenu.hasAttribute('hidden')) {
      mobileMenu.removeAttribute('hidden');
      menuToggle.textContent = '✕';
    } else {
      mobileMenu.setAttribute('hidden', '');
      menuToggle.textContent = '☰';
    }
  });

  // simple contact form behaviour (fake)
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Normally you'd send the data to a server here.
    const name = contactForm.name.value || 'Friend';
    alert(`Thanks, ${name}! Your message was received (demo).`);
    contactForm.reset();
  });

  // close mobile menu when link clicked
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileMenu.setAttribute('hidden', '');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }
  });

})();

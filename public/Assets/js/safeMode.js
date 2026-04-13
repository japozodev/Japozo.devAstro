// --- ACTUALIZAR AÑO EN FOOTER ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- EMAIL CLICK-TO-REVEAL (gate humano contra scraping) ---
const emailLink = document.getElementById('email-link');
const revealEmail = () => {
  if (!emailLink) return '';
  if (emailLink.dataset.revealed === 'true') return emailLink.textContent;
  const decoded = atob(emailLink.dataset.emailB64 || '');
  emailLink.href = 'mailto:' + decoded;
  emailLink.textContent = decoded;
  emailLink.dataset.revealed = 'true';
  emailLink.removeAttribute('data-i18n');
  return decoded;
};
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    if (emailLink.dataset.revealed !== 'true') {
      e.preventDefault();
      revealEmail();
    }
  });
}
const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const decoded = revealEmail();
    if (!decoded) return;
    navigator.clipboard.writeText(decoded)
      .then(() => alert('Email copiado'));
  });
}

// --- REFERENCIAS DOM ---
const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

// --- MENÚ MÓVIL ---
// Toggle del menú cuando se hace click en el botón
mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cerrar el menú cuando se hace click en un enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// --- SCROLL-TRIGGERED SECTION REVEALS ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-reveal').forEach(section => {
  revealObserver.observe(section);
});

// --- SKILL TAGS: ENTRADA ESCALONADA ---
const skillsBox = document.querySelector('.skills-box');
if (skillsBox) {
  const tagsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-tag').forEach((tag, i) => {
          tag.style.animationDelay = `${i * 0.07}s`;
          tag.classList.add('tag-visible');
        });
        tagsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  tagsObserver.observe(skillsBox);

  // --- SKILL TAGS: BRILLO EN CADENA ---
  skillsBox.addEventListener('mouseover', (e) => {
    const tag = e.target.closest('.skill-tag');
    if (!tag) return;
    const allTags = [...skillsBox.querySelectorAll('.skill-tag')];
    const idx = allTags.indexOf(tag);
    allTags.forEach((t, i) => {
      const dist = Math.abs(i - idx);
      if (dist > 0 && dist <= 3) {
        t.style.transitionDelay = `${dist * 0.06}s`;
        t.classList.add('tag-glow');
      }
    });
  });

  skillsBox.addEventListener('mouseout', (e) => {
    const tag = e.target.closest('.skill-tag');
    if (!tag) return;
    skillsBox.querySelectorAll('.skill-tag').forEach(t => {
      t.style.transitionDelay = '0s';
      t.classList.remove('tag-glow');
    });
  });
}

// --- CAMBIO DE IDIOMA ---
const langToggleBtn = document.getElementById('lang-toggle');
const STORAGE_KEY = 'safeMode-lang';

// Aplicar todas las traducciones al DOM según el idioma activo
function applyLanguage(lang) {
  const strings = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) {
      const value = strings[key];
      if (value.includes('\n')) {
        el.innerHTML = value.replace(/\n/g, '<br>');
      } else {
        el.textContent = value;
      }
    }
  });
  langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
  langToggleBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
}

// Inicializar con el idioma guardado (por defecto español)
const savedLang = localStorage.getItem(STORAGE_KEY) || 'es';
applyLanguage(savedLang);

// Alternar idioma al hacer click
langToggleBtn.addEventListener('click', () => {
  const currentLang = localStorage.getItem(STORAGE_KEY) || 'es';
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem(STORAGE_KEY, nextLang);
  applyLanguage(nextLang);
});
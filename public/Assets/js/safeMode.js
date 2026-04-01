// --- ACTUALIZAR AÑO EN FOOTER ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- DECODIFICAR EMAIL (ofuscado en base64 contra scraping) ---
const email = atob('Y29udGFjdEBqYXBvem8uZGV2');
const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.href = 'mailto:' + email;
  emailLink.textContent = email;
}
const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email)
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

// --- ANIMACIÓN DE BARRAS DE PROGRESO ---
// Configuración del Intersection Observer
const observerOptions = {
  threshold: 0.2
};

// Animar barras de progreso cuando se hacen visibles en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
      observer.unobserve(bar);
    }
  });
}, observerOptions);

// Observar todos los elementos con clase progress-fill
document.querySelectorAll('.progress-fill').forEach(bar => {
  observer.observe(bar);
});

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
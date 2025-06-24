// IMMA - Application principale
import { initHeader } from './components/Header.js';

// Initialisation de l'application IMMA
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le header avec menu hamburger
  initHeader();

  // Initialiser le formulaire de recherche
  initSearchForm();

  // Initialiser la newsletter
  initNewsletter();

  // Animations au scroll
  initScrollAnimations();

  console.log('🏠 IMMA app initialized successfully');
});

// Gestion du formulaire de recherche
function initSearchForm() {
  const searchForm = document.getElementById('apartment-search');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(searchForm);
      const searchData = {
        propertyType: formData.get('property-type'),
        location: formData.get('location'),
        budgetMin: formData.get('budget-min'),
        budgetMax: formData.get('budget-max')
      };

      console.log('🔍 Recherche lancée:', searchData);

      // Ici, vous pourriez envoyer les données à votre API
      // ou rediriger vers une page de résultats
      alert('Recherche lancée ! (Fonctionnalité à implémenter)');
    });
  }
}

// Gestion de la newsletter
function initNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = newsletterForm.querySelector('.newsletter-input').value;
      console.log('📧 Inscription newsletter:', email);

      // Ici, vous pourriez envoyer l'email à votre API
      alert('Merci pour votre inscription ! (Fonctionnalité à implémenter)');
      newsletterForm.reset();
    });
  }
}

// Animations au scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observer les cartes de problèmes et les étapes
  const animatedElements = document.querySelectorAll('.problem-card, .step, .footer');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

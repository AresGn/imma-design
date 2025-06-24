// Importation et insertion des composants dans #app
import './Header.css';
import './Hero.css';

// Fonction pour charger un composant HTML dans le DOM
async function loadComponent(path, target) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector(target).insertAdjacentHTML('beforeend', html);
}

// Initialisation de l'app
window.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('./components/Header.html', '#app');
  await loadComponent('./components/Hero.html', '#app');
  // Ajouter d'autres composants ici
});

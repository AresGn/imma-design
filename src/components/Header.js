// Header IMMA - Gestion du menu de navigation
class HeaderIMMA {
  constructor() {
    this.hamburgerToggle = document.getElementById('hamburger-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navMenuClose = document.getElementById('nav-menu-close');
    this.navOverlay = document.getElementById('nav-overlay');

    this.init();
  }

  init() {
    // Événements pour ouvrir le menu
    this.hamburgerToggle?.addEventListener('click', () => this.openMenu());

    // Événements pour fermer le menu
    this.navMenuClose?.addEventListener('click', () => this.closeMenu());
    this.navOverlay?.addEventListener('click', () => this.closeMenu());

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen()) {
        this.closeMenu();
      }
    });

    // Fermer le menu lors du clic sur un lien de navigation
    const navMenuItems = document.querySelectorAll('.nav-menu-item');
    navMenuItems.forEach(item => {
      item.addEventListener('click', () => this.closeMenu());
    });
  }

  openMenu() {
    this.navMenu?.classList.add('open');
    this.navOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
  }

  closeMenu() {
    this.navMenu?.classList.remove('open');
    this.navOverlay?.classList.remove('open');
    document.body.style.overflow = ''; // Restaurer le scroll
  }

  isMenuOpen() {
    return this.navMenu?.classList.contains('open') || false;
  }
}

// Fonction d'initialisation pour compatibilité
export function initHeader() {
  new HeaderIMMA();
}

// Export de la classe pour utilisation directe
export default HeaderIMMA;

# Guide de Design UI/UX pour IMMA
## Plateforme de Recherche d'Appartement Intelligente

---

## 🎯 Vue d'ensemble du projet

**IMMA** est une plateforme web intelligente qui automatise la recherche d'appartements pour les particuliers et étudiants en France. Le design doit refléter l'innovation technologique tout en restant accessible et rassurant.

---

## 🎨 Identité Visuelle & Branding

### Palette de Couleurs Principale
```css
:root {
  /* Couleurs primaires - Innovation & Confiance */
  --primary-blue: #2563eb;
  --primary-dark: #1e40af;
  --primary-light: #dbeafe;
  
  /* Couleurs secondaires - Jeunesse & Dynamisme */
  --accent-green: #10b981;
  --accent-orange: #f59e0b;
  --accent-purple: #8b5cf6;
  
  /* Couleurs neutres */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-600: #4b5563;
  --gray-900: #111827;
  
  /* États & Actions */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
}
```

### Typographie
```css
/* Police principale - Moderne et lisible */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
}

/* Hiérarchie typographique */
.text-hero {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-h1 {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.text-h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
}

.text-h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
}

.text-body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}

.text-caption {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
}
```

---

## 📐 Layout & Structure

### Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive breakpoints */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

### Spacing System
```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
}
```

---

## 🏗️ Structure des Pages

### 1. Header Navigation
```html
<header class="header">
  <div class="container">
    <nav class="nav">
      <div class="nav-brand">
        <img src="logo-imma.svg" alt="IMMA" class="logo">
      </div>
      <ul class="nav-menu">
        <li><a href="#comment-ca-marche">Comment ça marche</a></li>
        <li><a href="#fonctionnalites">Fonctionnalités</a></li>
        <li><a href="#tarifs">Tarifs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button class="btn btn-ghost">Se connecter</button>
        <button class="btn btn-primary">Commencer</button>
      </div>
    </nav>
  </div>
</header>
```

### 2. Hero Section
```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class="text-hero">
        Trouvez votre appartement 
        <span class="text-gradient">sans effort</span>
      </h1>
      <p class="text-body hero-description">
        IMMA automatise votre recherche d'appartement grâce à l'intelligence artificielle. 
        Renseignez vos critères, notre IA s'occupe du reste : recherche, contact et organisation des visites.
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary btn-lg">
          <span>Commencer ma recherche</span>
          <svg class="icon"><!-- Icône flèche --></svg>
        </button>
        <button class="btn btn-ghost btn-lg">
          <svg class="icon"><!-- Icône play --></svg>
          <span>Voir la démo</span>
        </button>
      </div>
    </div>
    <div class="hero-visual">
      <div class="dashboard-preview">
        <!-- Aperçu du tableau de bord utilisateur -->
      </div>
    </div>
  </div>
</section>
```

### 3. Section Problèmes Identifiés
```html
<section class="problems">
  <div class="container">
    <h2 class="text-h2 section-title">Les défis de la recherche d'appartement</h2>
    <div class="grid grid-2">
      <div class="problem-card">
        <div class="problem-icon">
          <svg><!-- Icône temps --></svg>
        </div>
        <h3>Perte de temps considérable</h3>
        <p>Navigation entre multiple sites (Le Bon Coin, PAP, SeLoger...)</p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">
          <svg><!-- Icône données --></svg>
        </div>
        <h3>Annonces de mauvaise qualité</h3>
        <p>Annonces obsolètes, incomplètes ou en doublon</p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">
          <svg><!-- Icône contact --></svg>
        </div>
        <h3>Contact manuel fastidieux</h3>
        <p>Nécessité de contacter soi-même chaque agence ou propriétaire</p>
      </div>
      <div class="problem-card">
        <div class="problem-icon">
          <svg><!-- Icône calendrier --></svg>
        </div>
        <h3>Coordination complexe</h3>
        <p>Difficile d'organiser efficacement les visites</p>
      </div>
    </div>
  </div>
</section>
```

### 4. Solution IMMA
```html
<section class="solution">
  <div class="container">
    <div class="solution-header">
      <h2 class="text-h2">Notre solution intelligente</h2>
      <p class="text-body">IMMA révolutionne la recherche d'appartement grâce à l'automatisation</p>
    </div>
    
    <div class="solution-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Définissez vos critères</h3>
          <p>Renseignez votre ville, budget, type de logement et préférences</p>
          <div class="step-visual">
            <!-- Formulaire de critères en preview -->
          </div>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>L'IA recherche pour vous</h3>
          <p>Scan automatique des principales plateformes immobilières</p>
          <div class="step-visual">
            <!-- Animation de recherche automatique -->
          </div>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Contact automatique</h3>
          <p>Messages personnalisés envoyés aux agences et propriétaires</p>
          <div class="step-visual">
            <!-- Exemple de message généré -->
          </div>
        </div>
      </div>
      
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Visites organisées</h3>
          <p>Planification selon votre calendrier personnel</p>
          <div class="step-visual">
            <!-- Calendrier avec rendez-vous -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. Fonctionnalités Détaillées
```html
<section class="features">
  <div class="container">
    <h2 class="text-h2 section-title">Fonctionnalités complètes</h2>
    
    <div class="features-grid">
      <div class="feature-category">
        <h3>Interface Utilisateur</h3>
        <ul class="feature-list">
          <li>
            <div class="feature-icon">
              <svg><!-- Icône compte --></svg>
            </div>
            <div>
              <h4>Création de compte sécurisée</h4>
              <p>Profil personnalisé avec préférences sauvegardées</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg><!-- Icône formulaire --></svg>
            </div>
            <div>
              <h4>Formulaire de critères intelligent</h4>
              <p>Interface intuitive pour définir vos préférences</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg><!-- Icône calendrier --></svg>
            </div>
            <div>
              <h4>Intégration calendrier</h4>
              <p>Synchronisation Google Calendar et Outlook</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div class="feature-category">
        <h3>Recherche Intelligente</h3>
        <ul class="feature-list">
          <li>
            <div class="feature-icon">
              <svg><!-- Icône scan --></svg>
            </div>
            <div>
              <h4>Scan multi-plateformes</h4>
              <p>Scraping automatique des sites immobiliers</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg><!-- Icône filtre --></svg>
            </div>
            <div>
              <h4>Filtrage avancé</h4>
              <p>Prix, surface, meublé, proximité transports</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg><!-- Icône matching --></svg>
            </div>
            <div>
              <h4>Système de matching</h4>
              <p>Score de compatibilité avec vos préférences</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div class="feature-category">
        <h3>Agent Intelligent</h3>
        <ul class="feature-list">
          <li>
            <div class="feature-icon">
              <svg><!-- Icône message --></svg>
            </div>
            <div>
              <h4>Messages personnalisés</h4>
              <p>Génération automatique de demandes de visite</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg><!-- Icône contact --></svg>
            </div>
            <div>
              <h4>Contact automatique</h4>
              <p>Email et formulaires de contact</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg><!-- Icône agenda --></svg>
            </div>
            <div>
              <h4>Gestion d'agenda</h4>
              <p>Planification selon vos disponibilités</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### 6. Tableau de Bord Utilisateur
```html
<section class="dashboard-preview">
  <div class="container">
    <h2 class="text-h2">Votre tableau de bord personnel</h2>
    <div class="dashboard-mockup">
      <div class="dashboard-sidebar">
        <nav class="dashboard-nav">
          <a href="#" class="nav-item active">
            <svg class="icon"><!-- Icône accueil --></svg>
            <span>Aperçu</span>
          </a>
          <a href="#" class="nav-item">
            <svg class="icon"><!-- Icône recherche --></svg>
            <span>Mes recherches</span>
          </a>
          <a href="#" class="nav-item">
            <svg class="icon"><!-- Icône appartements --></svg>
            <span>Appartements trouvés</span>
          </a>
          <a href="#" class="nav-item">
            <svg class="icon"><!-- Icône calendrier --></svg>
            <span>Mes visites</span>
          </a>
          <a href="#" class="nav-item">
            <svg class="icon"><!-- Icône paramètres --></svg>
            <span>Paramètres</span>
          </a>
        </nav>
      </div>
      
      <div class="dashboard-content">
        <div class="dashboard-stats">
          <div class="stat-card">
            <div class="stat-number">24</div>
            <div class="stat-label">Appartements trouvés</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">8</div>
            <div class="stat-label">Demandes envoyées</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">3</div>
            <div class="stat-label">Visites planifiées</div>
          </div>
        </div>
        
        <div class="recent-findings">
          <h3>Dernières trouvailles</h3>
          <div class="apartment-cards">
            <!-- Cartes d'appartements -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎭 Composants UI

### Boutons
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-dark));
  color: white;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

.btn-ghost {
  background: transparent;
  color: var(--gray-600);
  border: 1px solid var(--gray-200);
}

.btn-ghost:hover {
  background: var(--gray-50);
  border-color: var(--gray-300);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
```

### Cartes
```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gray-100);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.apartment-card {
  position: relative;
  overflow: hidden;
}

.apartment-card .card-image {
  height: 200px;
  background: var(--gray-100);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.apartment-card .card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.apartment-card .price {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-blue);
}

.apartment-card .location {
  color: var(--gray-600);
  font-size: 0.875rem;
}

.apartment-card .features {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.apartment-card .feature {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--gray-500);
}
```

### Formulaires
```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--gray-700);
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
```

---

## 🎨 Animations & Interactions

### Animations CSS
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Interactions JavaScript
```javascript
// Intersection Observer pour les animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
    }
  });
}, observerOptions);

// Observer tous les éléments avec la classe 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Effet de parallaxe léger
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
```

---

## 📱 Responsive Design

### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

/* Mobile First Approach */
.container {
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Navigation mobile */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .nav-menu.open {
    display: flex;
  }
  
  .nav-toggle {
    display: block;
  }
}
```

---

## 🖼️ Assets & Iconographie

### Icônes Principales
- **Recherche automatique** : Robot/IA, loupe avec engrenages
- **Matching intelligent** : Cœur avec étoiles, cible
- **Contact automatique** : Enveloppe avec éclair, téléphone automatique
- **Calendrier** : Calendrier avec check, horloge
- **Tableau de bord** : Graphiques, statistiques
- **Appartements** : Bâtiment, clé, maison
- **Étudiants** : Graduation cap, sac à dos, livres
- **Jeunes actifs** : Cravate, ordinateur portable, métro

### Images Recommandées
- **Héros** : Jeunes utilisateurs sur mobile/ordinateur, interface du dashboard
- **Cas d'usage** : Étudiants dans appartement moderne, jeunes professionnels
- **Appartements** : Photos d'appartements modernes, cozy, bien éclairés
- **Processus** : Illustrations du workflow automatisé
- **Équipe** : Photos professionnelles mais accessibles

---

## 🎯 Personas & Use Cases

### Persona 1 : Étudiant (20-25 ans)
- **Besoin** : Appartement proche université, budget limité
- **Comportement** : Mobile-first, impatient, price-sensitive
- **Design** : Interface simple, prix mis en avant, géolocalisation

### Persona 2 : Jeune Actif (25-35 ans)
- **Besoin** : Appartement proche travail, confort moderne
- **Comportement** : Efficiency-focused, multi-device, qualité/prix
- **Design** : Fonctionnalités avancées, tableaux de bord détaillés

---

## 🔧 Guidelines Techniques

### Performance
- **Images** : WebP avec fallback, lazy loading
- **CSS** : Critical CSS inline, reste en async
- **JavaScript** : Code splitting, modules ES6
- **Fonts** : font-display: swap, preload des fonts critiques

### Accessibilité
- **Contraste** : Minimum 4.5:1 pour le texte normal
- **Navigation** : Fonctionnelle au clavier
- **Screen readers** : ARIA labels appropriés
- **Focus** : Indicateurs visuels clairs

### SEO
- **Structure** : Balises sémantiques (header, main, section, article)
- **Meta** : Descriptions uniques par page
- **Schema.org** : Markup pour les appartements
- **Images** : Alt text descriptif

---

## 📋 Checklist de Développement

### Phase 1 : Structure de base
- [ ] Setup du système de design (CSS variables)
- [ ] Header avec navigation responsive
- [ ] Hero section avec CTA principal
- [ ] Footer avec liens essentiels

### Phase 2 : Pages principales
- [ ] Landing page complète
- [ ] Page d'inscription/connexion
- [ ] Formulaire de critères
- [ ] Tableau de bord utilisateur

### Phase 3 : Fonctionnalités avancées
- [ ] Système de cartes d'appartements
- [ ] Intégration calendrier
- [ ] Notifications en temps réel
- [ ] Système de matching visuel

### Phase 4 : Optimisation
- [ ] Performance (Lighthouse > 90)
- [ ] Accessibilité (WCAG AA)
- [ ] Tests multi-navigateurs
- [ ] Responsive sur tous devices

---

## 🎨 Mood Board & Inspiration

### Style Visuel
- **Moderne** : Clean, minimal, beaucoup d'espace blanc
- **Technologique** : Gradients subtils, animations fluides
- **Rassurant** : Couleurs douces, témoignages, sécurité mise en avant
- **Jeune** : Illustrations modernes, photos de vraies personnes

### Références Design
- **Airbnb** : Pour les cartes d'appartements et la géolocalisation
- **Notion** : Pour le tableau de bord et l'organisation
- **Stripe** : Pour la clean aesthetic et les animations
- **Linear** : Pour les gradients et la modernité

---

Ce guide fournit une base complète pour développer l'interface IMMA en conservant l'excellence du design Oxia tout en l'adaptant parfaitement aux besoins spécifiques de la recherche automatisée d'appartements.
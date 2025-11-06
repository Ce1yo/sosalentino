# 🍕 So Salentino - Pizzeria Website

Site web moderne et sobre pour la pizzeria **So Salentino**, inspiré par l'authenticité des Pouilles.

## ✨ Caractéristiques

- **Design Moderne & Sobre** : Interface épurée avec palette de couleurs élégantes
- **100% HTML/CSS/JS Vanilla** : Aucune dépendance, léger et rapide
- **Responsive Design** : Optimisé pour tous les appareils
- **Animations Fluides** : Transitions et effets au scroll
- **Sections complètes** :
  - 🏠 Hero avec effet parallaxe
  - 📋 Menu avec 3 catégories de pizzas (12 pizzas)
  - ℹ️ Section À Propos avec statistiques
  - 📞 Contact avec formulaire de réservation

## 🛠️ Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS, Grid, Flexbox
- **JavaScript Vanilla** - Interactivité sans framework
- **Google Fonts** - Poppins & Playfair Display

## 🚀 Utilisation

### Option 1 : Python Server (Python 3)
```bash
python3 -m http.server 8000
```
Puis ouvrir : http://localhost:8000

### Option 2 : Python Server (Python 2)
```bash
python -m SimpleHTTPServer 8000
```

### Option 3 : Node.js http-server
```bash
npx http-server -p 8000
```

### Option 4 : PHP Server
```bash
php -S localhost:8000
```

### Option 5 : Live Server (VS Code Extension)
- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

## 📁 Structure du Projet

```
restaurant/
├── index.html      # Structure HTML principale
├── style.css       # Tous les styles CSS
├── script.js       # JavaScript pour l'interactivité
└── README.md       # Documentation
```

## 🎨 Palette de Couleurs

- **Primaire** : #d4a574 (Or/Beige)
- **Sombre** : #2d2d2d (Gris très foncé)
- **Clair** : #f5f5f5 (Gris clair)
- **Blanc** : #ffffff

## ✨ Fonctionnalités JavaScript

- Navigation fixe avec effet au scroll
- Menu hamburger responsive
- Smooth scroll pour la navigation
- Animations au scroll (Intersection Observer)
- Effet parallaxe sur le hero
- Formulaire de contact interactif
- Indicateur de section active dans la navigation

## 📱 Responsive Breakpoints

- **Mobile** : < 480px
- **Tablette** : 480px - 768px
- **Desktop** : > 768px

## 🎯 Personnalisation

### Modifier le menu
Éditez directement le HTML dans la section `#menu` (ligne ~42 de `index.html`)

### Changer les couleurs
Modifiez les variables CSS au début de `style.css` (lignes 1-10)

```css
:root {
    --primary: #d4a574;
    --dark: #2d2d2d;
    /* etc... */
}
```

### Ajouter des sections
Ajoutez de nouvelles balises `<section>` dans `index.html`

## 🌐 Déploiement

Le site peut être déployé gratuitement sur :

- **GitHub Pages** : Hébergement gratuit via GitHub
- **Netlify** : Glisser-déposer le dossier
- **Vercel** : Déploiement en un clic
- **Surge.sh** : `surge` dans le dossier

### Exemple avec GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [votre-repo]
git push -u origin main
```
Puis activez GitHub Pages dans les paramètres du repo.

## 📄 Licence

© 2024 So Salentino. Tous droits réservés.

---

**Note** : Ce site est une démo. Pour un usage en production, ajoutez :
- Backend pour le formulaire de contact
- Système de réservation réel
- Images professionnelles
- SEO et métadonnées
- Analytics

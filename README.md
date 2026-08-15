# HoteBoost — Centre d'aide (layout Notion)

Page de documentation type centre d'aide Notion, à trois colonnes :

- **Sidebar gauche** — toutes les fonctionnalités HoteBoost, en catégories dépliables
  (recherche + navigation), la fonctionnalité courante surlignée.
- **Contenu central** — l'article (ici « Messagerie centralisée »).
- **Sidebar droite** — le sommaire des chapitres de l'article, avec scrollspy
  (le chapitre visible est surligné, comme le "CONTENTS" de Notion).

## Fichiers
- `index.html` — top bar + layout 3 colonnes + article
- `styles.css` — thème corail, sidebars sticky, responsive
- `script.js` — navigation gauche (données), recherche, canaux, FAQ, sommaire + scrollspy

## Comportements
- Catégories dépliables/repliables à gauche, filtre de recherche
- Sommaire à droite généré automatiquement depuis les `<h2>` des sections
- Scrollspy : surligne le chapitre en cours de lecture
- Accordéon FAQ ; `prefers-reduced-motion` respecté

## Aperçu
Ouvrir `index.html` dans un navigateur.

> La maquette d'inbox est reconstituée en CSS (pas d'images externes).

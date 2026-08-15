# HoteBoost — Messagerie centralisée (layout centre d'aide)

Ta maquette de landing « Messagerie centralisée » placée au centre d'une
mise en page type centre d'aide Notion :

- **Sidebar gauche** — toutes les fonctionnalités HoteBoost (catégories dépliables + recherche)
- **Centre** — la maquette qui défile (hero, 7 canaux, messagerie centralisée, témoignage, CTA, FAQ)
- **Sidebar droite** — « Sur cette page » : sommaire des sections avec scrollspy

## Fichiers
- `index.html` — top bar + layout 3 colonnes + sections de la maquette
- `styles.css` — thème corail, sidebars sticky, composants de la maquette, responsive
- `script.js` — nav gauche + recherche, cartes canaux, FAQ, sommaire (depuis data-toc) + scrollspy

## Comportements
- Sommaire droite généré depuis l'attribut `data-toc` des sections, surlignage au scroll
- Catégories dépliables + filtre de recherche à gauche
- Accordéon FAQ ; `prefers-reduced-motion` respecté

## Aperçu
Ouvrir `index.html` dans un navigateur.

> La maquette d'inbox et les fonds sombres (témoignage/CTA) sont en CSS (pas d'images externes).

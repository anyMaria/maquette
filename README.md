# HoteBoost — Landing « Messagerie centralisée »

Réplique en HTML/CSS/JS de la maquette Figma de la landing page HoteBoost
(fonctionnalité Messagerie centralisée), avec le méga-menu « Fonctionnalités »
intégré dans la navigation.

## Structure
- `index.html` — page complète (header + méga-menu, hero, 7 canaux, split, témoignage, CTA, FAQ, footer)
- `styles.css` — thème corail HoteBoost, mises en page responsive, animations
- `script.js` — données (méga-menu, canaux, FAQ), dropdown, accordéon FAQ, apparitions au scroll

## Sections
1. Header flottant + dropdown méga-menu (rail de 5 catégories + carte promo)
2. Hero : badges, titre, carte de notification, sous-titre, CTA, icônes de canaux
3. « 7 canaux réunis, 0 messages oubliés » — grille de 6 cartes
4. « Toutes vos conversations au même endroit » — texte + checklist + maquette d'inbox (mock CSS)
5. Témoignage (fond sombre)
6. Bannière CTA « Ne ratez plus aucun message »
7. FAQ (accordéon) + fonctionnalités liées
8. Footer

## Interactions
- Ouverture du méga-menu au survol/clic de « Fonctionnalités »
- Bascule des fonctionnalités au survol des catégories (entrée décalée)
- Accordéon FAQ
- Apparitions au scroll (IntersectionObserver), désactivées si `prefers-reduced-motion`

## Notes
- La maquette d'interface (inbox) et le fond de la bannière CTA sont reconstitués
  en CSS (pas d'images externes). Remplaçables par les visuels réels si besoin.
- Les polices utilisent Poppins (Google Fonts) avec fallback système.

## Aperçu
Ouvrir `index.html` dans un navigateur.

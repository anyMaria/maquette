/* ------------------------------------------------------------------
   HoteBoost — méga-menu "Fonctionnalités"
   Données + rendu du rail latéral et du panneau de fonctionnalités.
   ------------------------------------------------------------------ */

// Petite bibliothèque d'icônes (SVG inline, style linéaire).
const ICONS = {
  calendarCheck: '<path d="M8 2v4M16 2v4M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="m9 15 2 2 4-4"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  bank: '<path d="M3 21h18M4 10h16M5 21V10M9 21V10M15 21V10M19 21V10M12 3l8 4H4l8-4Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v9h14v-9"/><path d="M12 8S10.5 3 7.5 4.5 12 8 12 8ZM12 8s1.5-5 4.5-3.5S12 8 12 8Z"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 8-8M17 5l2.5 2.5M14.5 7.5 17 10"/>',
  star: '<path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2Z"/>',
  spray: '<path d="M9 3h4v4H9zM7 9h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z"/><path d="M17 5h1M19 3v2M19 8v1M6 3v2"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
  sparkles: '<path d="M12 3l1.6 4.3L18 9l-4.4 1.7L12 15l-1.6-4.3L6 9l4.4-1.7L12 3Z"/><path d="M19 14l.7 1.9L21.5 17l-1.8.7L19 20l-.7-1.9L16.5 17l1.8-.6L19 14Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  clipboard: '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 13h6M9 17h4"/>',
  receipt: '<path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3l-2 1.5L15 3l-2 1.5L11 3 9 4.5 7 3Z"/><path d="M8 8h8M8 12h6"/>',
};

// Enveloppe un chemin SVG dans un <svg> configuré (trait fin).
function svg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

// Les 5 catégories du rail + leurs fonctionnalités.
const CATEGORIES = [
  {
    id: 'nuits-vides',
    icon: 'calendarCheck',
    label: 'Ne laissez plus de nuits vides',
    // ⚠️ Contenu à confirmer : non visible sur les maquettes fournies.
    note: 'Chaque nuit compte. Remplissez votre calendrier.',
    link: "Optimisez votre taux d'occupation",
    features: [
      { icon: 'clock', title: 'Offres de dernière minute', desc: 'Ajustez automatiquement les prix des nuits proches restées vides.' },
      { icon: 'calendarCheck', title: 'Séjours prolongés', desc: 'Proposez la nuit d’avant ou d’après en un clic au voyageur.' },
      { icon: 'message', title: 'Relances automatiques', desc: 'Recontactez vos anciens voyageurs au bon moment.' },
    ],
  },
  {
    id: 'reservations-directes',
    icon: 'rocket',
    label: 'Boostez vos réservations directes',
    note: 'Votre site. Vos conditions. Zéro commission.',
    link: 'Recevez des réservations directes',
    features: [
      { icon: 'globe', title: 'Site de réservation directe', desc: 'Encaissez sans commission, directement sur votre compte Stripe.' },
      { icon: 'card', title: 'Paiements en ligne', desc: 'Carte, Apple Pay, Google Pay, Klarna — encaissez en toute sérénité.' },
      { icon: 'bank', title: 'Chèques-Vacances ANCV', desc: '30 millions de bénéficiaires règlent en direct sur votre site, via ANCV Connect.' },
    ],
  },
  {
    id: 'experience',
    icon: 'heart',
    label: 'Offrez une expérience inoubliable',
    note: 'Des voyageurs chouchoutés. Des avis 5 étoiles.',
    link: 'Impressionnez vos voyageurs',
    features: [
      { icon: 'book', title: 'Livret d’accueil digital', desc: 'Toutes les infos pratiques, accessibles par QR code.' },
      { icon: 'gift', title: 'Extras & Bons cadeaux', desc: 'Vendez des extras et bons cadeaux, paiement intégré.' },
      { icon: 'key', title: 'Serrures connectées', desc: 'Codes temporaires Nuki & Igloohome, zéro remise de clés.' },
      { icon: 'star', title: 'Avis clients', desc: 'Collectez et valorisez vos avis par la gamification.' },
    ],
  },
  {
    id: 'temps',
    icon: 'clock',
    label: 'Libérez vos journées',
    note: 'Paramétrez une fois. Laissez HoteBoost gérer le reste.',
    link: 'Gagnez du temps',
    features: [
      { icon: 'spray', title: 'Entretien & Ménage', desc: 'Ménages créés automatiquement à chaque réservation, intervenants prévenus.' },
      { icon: 'message', title: 'Messagerie centralisée', desc: 'Tous vos messages voyageurs dans une seule boîte.' },
      { icon: 'sparkles', title: 'Assistant IA', desc: 'Pilotez votre activité en langage naturel.' },
    ],
  },
  {
    id: 'securite',
    icon: 'shield',
    label: 'Sécurisez votre activité',
    note: 'Contrats, cautions, conformité. Tout est couvert.',
    link: 'Protégez vos séjours',
    features: [
      { icon: 'file', title: 'Contrat & Caution', desc: 'Conditions acceptées à la réservation, caution par empreinte bancaire Stripe.' },
      { icon: 'clipboard', title: 'Fiche d’arrivée', desc: 'Fiche de police dématérialisée, conforme et sans papier.' },
      { icon: 'receipt', title: 'Facturation automatique', desc: 'Factures conformes générées et envoyées après chaque séjour.' },
    ],
  },
];

const railNav = document.getElementById('railNav');
const panel = document.getElementById('panel');
let activeId = CATEGORIES[0].id;

const goArrow = `<span class="rail__go">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg></span>`;

function renderRail() {
  railNav.innerHTML = CATEGORIES.map((cat) => `
    <button class="rail__item ${cat.id === activeId ? 'is-active' : ''}"
            data-id="${cat.id}" type="button">
      <span class="rail__ico">${svg(cat.icon)}</span>
      <span>${cat.label}</span>
      ${goArrow}
    </button>
  `).join('');
}

function renderPanel() {
  const cat = CATEGORIES.find((c) => c.id === activeId);
  const feats = cat.features.map((f) => `
    <article class="feat">
      <div class="feat__ico">${svg(f.icon)}</div>
      <div>
        <h4 class="feat__title">${f.title}</h4>
        <p class="feat__desc">${f.desc}</p>
      </div>
    </article>
  `).join('');

  panel.innerHTML = `
    <div class="panel__list">${feats}</div>
    <div class="panel__foot">
      <p class="panel__note">${cat.note}</p>
      <a class="panel__link" href="#">${cat.link} <span class="arrow">&rarr;</span></a>
    </div>
  `;
}

function setActive(id) {
  if (id === activeId) return;
  activeId = id;
  renderRail();
  panel.classList.add('is-swapping');
  window.setTimeout(() => {
    renderPanel();
    panel.classList.remove('is-swapping');
  }, 140);
}

railNav.addEventListener('click', (e) => {
  const btn = e.target.closest('.rail__item');
  if (btn) setActive(btn.dataset.id);
});

// Survol = aperçu instantané (comme un vrai méga-menu).
railNav.addEventListener('mouseover', (e) => {
  const btn = e.target.closest('.rail__item');
  if (btn) setActive(btn.dataset.id);
});

renderRail();
renderPanel();

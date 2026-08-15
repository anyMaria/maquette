/* ==================================================================
   HoteBoost — landing page "Messagerie centralisée"
   Méga-menu, cartes de canaux, FAQ, apparitions au scroll.
   ================================================================== */

/* ---------- Icônes (SVG inline, style linéaire) ---------- */
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
  refresh: '<path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.7-3M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.7 3"/><path d="M21 3v5h-5M3 21v-5h5"/>',
  trendingUp: '<path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>',
  puzzle: '<path d="M10 3v2.5a1.5 1.5 0 0 0 3 0V3h3a2 2 0 0 1 2 2v3h-2.5a1.5 1.5 0 0 0 0 3H21v3a2 2 0 0 1-2 2h-3v-2.5a1.5 1.5 0 0 0-3 0V19H8a2 2 0 0 1-2-2v-3H3.5a1.5 1.5 0 0 1 0-3H6V5a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  whatsapp: '<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"/><path d="M8.5 8.5c.3 3 2.5 5.2 5.5 5.5.7-.6.8-1.4.3-2l-1.3-.6-.9.9c-1-.4-1.8-1.2-2.2-2.2l.9-.9-.6-1.3c-.6-.5-1.4-.4-2 .3Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/><path d="M8 9h8M8 13h5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  building: '<path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M9 7h4M9 11h4M9 15h4"/>',
};

function svg(name, stroke = 1.7) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ---------- Données du méga-menu ---------- */
const CATEGORIES = [
  {
    id: 'nuits-vides', icon: 'calendarCheck', label: 'Ne laissez plus de nuits vides',
    note: 'Tous vos canaux synchronisés. Plus de trous dans le planning.',
    link: 'Remplissez votre calendrier',
    features: [
      { icon: 'refresh', title: 'Channel manager', desc: 'Synchronisez Booking, Airbnb et les autres en temps réel.' },
      { icon: 'trendingUp', title: 'Tarifs et promotions', desc: 'Promotions à règles et compensation des remises OTA : le direct reste le meilleur prix.' },
      { icon: 'puzzle', title: 'Intégrations', desc: 'Booking, Airbnb, Stripe, PriceLabs… tout connecté.' },
    ],
  },
  {
    id: 'reservations-directes', icon: 'rocket', label: 'Boostez vos réservations directes',
    note: 'Votre site. Vos conditions. Zéro commission.',
    link: 'Recevez des réservations directes',
    features: [
      { icon: 'globe', title: 'Site de réservation directe', desc: 'Encaissez sans commission, directement sur votre compte Stripe.' },
      { icon: 'card', title: 'Paiements en ligne', desc: 'Carte, Apple Pay, Google Pay, Klarna — encaissez en toute sérénité.' },
      { icon: 'bank', title: 'Chèques-Vacances ANCV', desc: '30 millions de bénéficiaires règlent en direct sur votre site, via ANCV Connect.' },
    ],
  },
  {
    id: 'experience', icon: 'heart', label: 'Offrez une expérience inoubliable',
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
    id: 'temps', icon: 'clock', label: 'Libérez vos journées',
    note: 'Paramétrez une fois. Laissez HoteBoost gérer le reste.',
    link: 'Gagnez du temps',
    features: [
      { icon: 'spray', title: 'Entretien & Ménage', desc: 'Ménages créés automatiquement à chaque réservation, intervenants prévenus.' },
      { icon: 'message', title: 'Messagerie centralisée', desc: 'Tous vos messages voyageurs dans une seule boîte.' },
      { icon: 'sparkles', title: 'Assistant IA', desc: 'Pilotez votre activité en langage naturel.' },
    ],
  },
  {
    id: 'securite', icon: 'shield', label: 'Sécurisez votre activité',
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
let activeId = CATEGORIES[3].id; // "Libérez vos journées" contient la Messagerie centralisée

const goArrow = `<span class="rail__go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M5 12h14M13 6l6 6-6 6"/></svg></span>`;

function renderRail() {
  railNav.innerHTML = CATEGORIES.map((cat) => `
    <button class="rail__item ${cat.id === activeId ? 'is-active' : ''}" data-id="${cat.id}" type="button">
      <span class="rail__ico">${svg(cat.icon)}</span>
      <span>${cat.label}</span>
      ${goArrow}
    </button>`).join('');
}

function renderPanel() {
  const cat = CATEGORIES.find((c) => c.id === activeId);
  const feats = cat.features.map((f, i) => `
    <article class="feat feat--enter" style="--i:${i}">
      <div class="feat__ico">${svg(f.icon)}</div>
      <div><h4 class="feat__title">${f.title}</h4><p class="feat__desc">${f.desc}</p></div>
    </article>`).join('');
  panel.innerHTML = `
    <div class="panel__list">${feats}</div>
    <div class="panel__foot feat--enter" style="--i:${cat.features.length}">
      <p class="panel__note">${cat.note}</p>
      <a class="panel__link" href="#">${cat.link} <span class="arrow">&rarr;</span></a>
    </div>`;
  requestAnimationFrame(() => panel.querySelectorAll('.feat--enter').forEach((el) => el.classList.add('is-in')));
}

function setActive(id) {
  if (id === activeId) return;
  activeId = id;
  renderRail();
  panel.classList.add('is-swapping');
  setTimeout(() => { renderPanel(); panel.classList.remove('is-swapping'); }, 140);
}

railNav.addEventListener('click', (e) => {
  const btn = e.target.closest('.rail__item');
  if (btn) setActive(btn.dataset.id);
});
railNav.addEventListener('mouseover', (e) => {
  const btn = e.target.closest('.rail__item');
  if (btn) setActive(btn.dataset.id);
});
renderRail();
renderPanel();

/* ---------- Ouverture / fermeture du méga-menu ---------- */
const megaTrigger = document.getElementById('megaTrigger');
const megaWrap = document.getElementById('megaWrap');
const megaBtn = megaTrigger.querySelector('.nav__link--btn');
let megaTimer;

function openMega() { clearTimeout(megaTimer); megaWrap.hidden = false; megaTrigger.classList.add('is-open'); megaBtn.setAttribute('aria-expanded', 'true'); }
function closeMega() { megaWrap.hidden = true; megaTrigger.classList.remove('is-open'); megaBtn.setAttribute('aria-expanded', 'false'); }
function scheduleClose() { megaTimer = setTimeout(closeMega, 160); }

megaTrigger.addEventListener('mouseenter', openMega);
megaTrigger.addEventListener('mouseleave', scheduleClose);
megaWrap.addEventListener('mouseenter', () => clearTimeout(megaTimer));
megaWrap.addEventListener('mouseleave', scheduleClose);
megaBtn.addEventListener('click', (e) => { e.preventDefault(); megaWrap.hidden ? openMega() : closeMega(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMega(); });

/* ---------- Canaux de la section "7 canaux réunis" ---------- */
const CHANNELS = [
  { icon: 'mail', title: 'Email (IMAP/SMTP)', desc: 'Connectez votre boîte mail existante. Les demandes de vos voyageurs remontent dans HoteBoost, vous répondez avec votre propre adresse.' },
  { icon: 'whatsapp', title: 'WhatsApp', desc: 'Le message envoyé la veille de l’arrivée, la question sur le parking — tout WhatsApp arrive dans la même boîte, rattaché au bon voyageur.' },
  { icon: 'instagram', title: 'Instagram & Messenger', desc: 'Les DM Instagram et les messages Facebook Messenger de votre page rejoignent la conversation. Plus besoin d’ouvrir les applis.' },
  { icon: 'chat', title: 'Chat de votre site', desc: 'Un visiteur pose une question sur votre site public ? Elle atterrit dans votre boîte HoteBoost, prête à recevoir votre réponse.' },
  { icon: 'building', title: 'Booking & Airbnb', desc: 'Les messages Booking et Airbnb connectés remontent aussi — le nombre d’OTA dépend de votre offre (2, 5 ou illimité).' },
  { icon: 'bell', title: 'Notifications push', desc: 'Un nouveau message ? Vous êtes prévenu instantanément sur votre téléphone. Vous répondez vite, vos voyageurs le sentent.' },
];
document.getElementById('channelCards').innerHTML = CHANNELS.map((c, i) => `
  <article class="channel-card" data-reveal style="--d:${(i % 3) * 90}ms">
    <div class="channel-card__ico">${svg(c.icon)}</div>
    <h3 class="channel-card__title">${c.title}</h3>
    <p class="channel-card__desc">${c.desc}</p>
  </article>`).join('');

/* ---------- Petits icônes de canaux du hero ---------- */
document.getElementById('heroChannels').innerHTML =
  ['mail', 'whatsapp', 'instagram', 'message', 'chat', 'building'].map((n) => svg(n)).join('');

/* ---------- Checklist de la section split ---------- */
document.getElementById('splitChecklist').innerHTML = [
  'Chaque message rattaché à la bonne réservation',
  'Réponse depuis HoteBoost, sans changer d’outil',
  'Historique complet de chaque voyageur',
].map((t) => `<li>${t}</li>`).join('');

/* ---------- FAQ (accordéon) ---------- */
const FAQ = [
  { q: 'Quels canaux puis-je connecter ?', a: 'Email (IMAP/SMTP), WhatsApp, Instagram, Facebook Messenger, le chat de votre site, ainsi que Booking et Airbnb. Le nombre d’OTA dépend de votre offre (2, 5 ou illimité).' },
  { q: 'Est-ce que je réponds depuis HoteBoost ?', a: 'Oui. Toutes vos conversations arrivent dans une seule boîte : vous lisez et répondez directement depuis HoteBoost, sans changer d’outil ni ouvrir chaque application.' },
  { q: 'Je retrouve les anciens échanges ?', a: 'Bien sûr. L’historique complet de chaque voyageur est conservé et rattaché à sa réservation, quel que soit le canal d’origine du message.' },
];
document.getElementById('faq').innerHTML = FAQ.map((f) => `
  <div class="faq__item">
    <button class="faq__q" type="button">
      <span>${f.q}</span>
      <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
    </button>
    <div class="faq__a"><p>${f.a}</p></div>
  </div>`).join('');

document.getElementById('faq').addEventListener('click', (e) => {
  const q = e.target.closest('.faq__q');
  if (!q) return;
  const item = q.parentElement;
  const answer = item.querySelector('.faq__a');
  const open = item.classList.toggle('is-open');
  answer.style.maxHeight = open ? answer.scrollHeight + 'px' : null;
});

/* ---------- Apparitions au scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

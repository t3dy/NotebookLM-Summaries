// File paths use relative paths assuming images are in parent directory
// For GitHub Pages, images will be in the repo root
const IMG = '../';
const PDF = '../';

// ── Data ──

const pages = {
    alchemy: {
        title: 'Alchemy',
        desc: 'The Great Work — transmutation, the philosopher\'s stone, and the alchemical tradition from Graeco-Egyptian origins through the Renaissance.',
        images: [
            { file: 'The Alchemical Paradox Infographic.png', title: 'The Alchemical Paradox' },
            { file: 'Atalanta Fugiens Nature\'s Secrets Guide.png', title: 'Atalanta Fugiens: Nature\'s Secrets Guide' },
            { file: 'The Art of the Stone.png', title: 'The Art of the Stone' },
            { file: 'The Alchemist and Elf Queen.png', title: 'The Alchemist and the Elf Queen' },
            { file: 'Albertus Magnus and Hermes Infographic.png', title: 'Albertus Magnus and Hermes' },
        ]
    },
    hermeticism: {
        title: 'Hermeticism',
        desc: 'The Hermetic tradition — Hermes Trismegistus, the Corpus Hermeticum, and the transmission of ancient wisdom.',
        images: [
            { file: 'Hermeticism and the Renaissance.png', title: 'Hermeticism and the Renaissance' },
            { file: 'Hermes Philosophus Ramon Martí\'s Perspective.png', title: 'Hermes Philosophus: Ramon Martí\'s Perspective' },
        ]
    },
    'renaissance-general': {
        title: 'Renaissance Magic — General',
        desc: 'The broader currents of Renaissance magical thought, manipulation, and governance.',
        images: [
            { file: 'Renaissance Roots of Mass Manipulation.png', title: 'Renaissance Roots of Mass Manipulation' },
            { file: 'Medieval Governance and Textual Insights.png', title: 'Medieval Governance and Textual Insights' },
        ]
    },
    trithemius: {
        title: 'Johannes Trithemius',
        desc: 'The Abbot-Magus — steganography, angelic magic, and the synthesis of magical theology.',
        images: [
            { file: 'Trithemius Synthesis of Magical Theology.png', title: 'Synthesis of Magical Theology' },
            { file: 'Trithemius and Paracelsus Comparison Chart.png', title: 'Trithemius and Paracelsus Comparison' },
            { file: 'Johannes Trithemius Wild Hunt Chronicler.png', title: 'Wild Hunt Chronicler' },
        ]
    },
    bruno: {
        title: 'Giordano Bruno',
        desc: 'The Nolan — infinite worlds, the art of memory, and the heroic frenzies.',
        images: [
            { file: 'Giordano Bruno Architect of Infinite.png', title: 'Architect of the Infinite' },
            { file: 'Giordano Bruno\'s Art of Memory.png', title: 'The Art of Memory' },
        ]
    },
    pico: {
        title: 'Pico della Mirandola',
        desc: 'The Phoenix of his age — the Oration on the Dignity of Man, Christian Kabbalah, and universal concordance.',
        images: [
            { file: 'Pico della Mirandola\'s Universal Mind.png', title: 'Pico\'s Universal Mind' },
        ]
    },
    ficino: {
        title: 'Marsilio Ficino',
        desc: 'The Platonic Theologian — translator of Plato and the Hermetica, architect of Renaissance Neoplatonism.',
        images: [
            { file: 'Marsilio Ficino\'s Early Apuleius Encounter.png', title: 'Ficino\'s Early Apuleius Encounter' },
        ]
    },
    agrippa: {
        title: 'Cornelius Agrippa',
        desc: 'The doubting magician — De Occulta Philosophia, the threefold universe, and the vanity of the sciences.',
        images: [
            { file: 'Cornelius Agrippa\'s Threefold Occult Universe.png', title: 'Agrippa\'s Threefold Occult Universe' },
        ]
    },
    kabbalah: {
        title: 'Kabbalah & Tarot',
        desc: 'The hidden tradition — Kabbalistic diagrams, Reuchlin\'s De Arte Cabalistica, and the history of the Tarot.',
        images: [
            { file: 'Architecture of Medieval Kabbalistic Diagrams.png', title: 'Architecture of Medieval Kabbalistic Diagrams' },
            { file: 'Johannes Reuchlin\'s De Arte Cabalistica.png', title: 'Reuchlin\'s De Arte Cabalistica' },
            { file: 'History of the Tarot Pivot.png', title: 'History of the Tarot' },
        ]
    },
    neoplatonism: {
        title: 'Neoplatonism',
        desc: 'The flight of the alone to the Alone — Plotinus, Iamblichus, and the Neoplatonic soul.',
        images: [
            { file: 'Guide to Plotinus\'s Universe.png', title: 'Guide to Plotinus\'s Universe' },
            { file: 'Iamblichus Architect of Neoplatonic Soul.png', title: 'Iamblichus: Architect of the Neoplatonic Soul' },
        ]
    },
    other: {
        title: 'Other Topics',
        desc: 'Swedenborg, Margaret Cavendish, games and education.',
        images: [
            { file: 'The Dual Worlds of Swedenborg.png', title: 'The Dual Worlds of Swedenborg' },
            { file: 'Margaret Cavendish The Blazing World.png', title: 'Margaret Cavendish: The Blazing World' },
            { file: 'Transforming K-8 Classrooms Through Games.png', title: 'Transforming K-8 Classrooms Through Games' },
            { file: 'The Role-Playing Society Infographic.png', title: 'The Role-Playing Society' },
            { file: 'Magic The Gathering Ecosystem Overview.png', title: 'Magic: The Gathering Ecosystem' },
            { file: 'MTG Limited Drafting Strategy Guide.png', title: 'MTG Limited Drafting Strategy Guide' },
        ]
    },

    // ── Slide Decks ──
    'slides-alchemy': {
        title: 'Slide Decks — Alchemy',
        desc: 'PDF slide decks on alchemical topics.',
        decks: [
            { file: 'Graeco-Egyptian_Alchemy.pdf', title: 'Graeco-Egyptian Alchemy', type: 'PDF Slide Deck' },
            { file: 'The_Abbot_and_The_Alchemist.pdf', title: 'The Abbot and The Alchemist', type: 'PDF Slide Deck' },
        ]
    },
    'slides-hermeticism': {
        title: 'Slide Decks — Hermeticism',
        desc: 'PDF slide decks on Hermetic topics.',
        decks: [
            { file: 'The_Persistence_of_Gnosis.pdf', title: 'The Persistence of Gnosis', type: 'PDF Slide Deck' },
            { file: 'The_Secret_Physics_Bridge.pdf', title: 'The Secret Physics Bridge', type: 'PDF Slide Deck' },
            { file: 'The_Universe_s_Source_Code.pdf', title: 'The Universe\'s Source Code', type: 'PDF Slide Deck' },
            { file: 'Visualizing_God_s_Mechanics.pdf', title: 'Visualizing God\'s Mechanics', type: 'PDF Slide Deck' },
        ]
    },
    'slides-renaissance': {
        title: 'Slide Decks — Renaissance Magic',
        desc: 'PDF slide decks and videos on Renaissance magical figures and themes.',
        decks: [
            { file: 'Bruno_Magic_Memory_Synthesis.pdf', title: 'Bruno: Magic Memory Synthesis', type: 'PDF Slide Deck' },
            { file: 'The_Infinite_Inversion.pdf', title: 'The Infinite Inversion (Bruno)', type: 'PDF Slide Deck' },
            { file: 'Faust_Paracelsus_Trithemius_Untangling_the_Magic.pdf', title: 'Faust, Paracelsus, Trithemius: Untangling the Magic', type: 'PDF Slide Deck' },
            { file: 'Monk_Magus_Cipher.pdf', title: 'Monk Magus Cipher (Trithemius)', type: 'PDF Slide Deck' },
            { file: 'The_Magus_and_the_Skeptic.pdf', title: 'The Magus and the Skeptic (Agrippa)', type: 'PDF Slide Deck' },
            { file: 'Solomon_s_Forbidden_Algorithm.pdf', title: 'Solomon\'s Forbidden Algorithm', type: 'PDF Slide Deck' },
            { file: 'Pico_s_Misunderstood_Manifesto.mp4', title: 'Pico\'s Misunderstood Manifesto', type: 'Video (MP4)' },
            { file: 'Agrippa__The_Doubting_Magician.mp4', title: 'Agrippa: The Doubting Magician', type: 'Video (MP4)' },
        ]
    },
    'slides-kabbalah': {
        title: 'Slide Decks — Kabbalah & Tarot',
        desc: 'PDF slide decks on Kabbalistic and Tarot topics.',
        decks: [
            { file: 'The_Book_of_Formation_A_Study_of_Influence.pdf', title: 'The Book of Formation: A Study of Influence', type: 'PDF Slide Deck' },
            { file: 'The_Cubic_Temple_of_Thought.pdf', title: 'The Cubic Temple of Thought', type: 'PDF Slide Deck' },
            { file: 'Tarot_Game_Oracle.pdf', title: 'Tarot: Game Oracle', type: 'PDF Slide Deck' },
        ]
    },
    'slides-neoplatonism': {
        title: 'Slide Decks — Neoplatonism',
        desc: 'PDF slide decks on Neoplatonic philosophy.',
        decks: [
            { file: 'Plotinus_The_Flight_to_the_Alone.pdf', title: 'Plotinus: The Flight to the Alone', type: 'PDF Slide Deck' },
            { file: 'The_Soul_s_Architecture.pdf', title: 'The Soul\'s Architecture', type: 'PDF Slide Deck' },
        ]
    },
    'slides-other': {
        title: 'Slide Decks — Other Topics',
        desc: 'PDF slide decks on other topics.',
        decks: [
            { file: 'Margaret_The_First_Fancy_and_Futurity.pdf', title: 'Margaret the First: Fancy and Futurity', type: 'PDF Slide Deck' },
            { file: 'Firesign_Theatre_Sound_Architects_of_the_Future.pdf', title: 'Firesign Theatre: Sound Architects of the Future', type: 'PDF Slide Deck' },
            { file: 'Shah_s_Learning_Technology.pdf', title: 'Shah\'s Learning Technology', type: 'PDF Slide Deck' },
            { file: 'Purposeful_Play_Classroom_Toolkit.pdf', title: 'Purposeful Play Classroom Toolkit', type: 'PDF Slide Deck' },
            { file: 'Worldmaking_Text_To_Virtual.pdf', title: 'Worldmaking: Text to Virtual', type: 'PDF Slide Deck' },
        ]
    },
};

// ── Rendering ──

function renderHome() {
    const sections = [
        { label: 'Infographics', items: [
            { page: 'alchemy', title: 'Alchemy', count: pages.alchemy.images.length },
            { page: 'hermeticism', title: 'Hermeticism', count: pages.hermeticism.images.length },
            { page: 'renaissance-general', title: 'Renaissance Magic — General', count: pages['renaissance-general'].images.length },
            { page: 'trithemius', title: 'Trithemius', count: pages.trithemius.images.length },
            { page: 'bruno', title: 'Giordano Bruno', count: pages.bruno.images.length },
            { page: 'pico', title: 'Pico della Mirandola', count: pages.pico.images.length },
            { page: 'ficino', title: 'Marsilio Ficino', count: pages.ficino.images.length },
            { page: 'agrippa', title: 'Cornelius Agrippa', count: pages.agrippa.images.length },
            { page: 'kabbalah', title: 'Kabbalah & Tarot', count: pages.kabbalah.images.length },
            { page: 'neoplatonism', title: 'Neoplatonism', count: pages.neoplatonism.images.length },
            { page: 'other', title: 'Other Topics', count: pages.other.images.length },
        ]},
        { label: 'Slide Decks', items: [
            { page: 'slides-alchemy', title: 'Alchemy', count: pages['slides-alchemy'].decks.length },
            { page: 'slides-hermeticism', title: 'Hermeticism', count: pages['slides-hermeticism'].decks.length },
            { page: 'slides-renaissance', title: 'Renaissance Magic', count: pages['slides-renaissance'].decks.length },
            { page: 'slides-kabbalah', title: 'Kabbalah & Tarot', count: pages['slides-kabbalah'].decks.length },
            { page: 'slides-neoplatonism', title: 'Neoplatonism', count: pages['slides-neoplatonism'].decks.length },
            { page: 'slides-other', title: 'Other Topics', count: pages['slides-other'].decks.length },
        ]},
    ];

    let html = `<div class="page-header"><h2>NotebookLM Summaries</h2><p>A curated gallery of infographics and slide decks generated from NotebookLM research sessions spanning alchemy, hermeticism, Renaissance magic, Kabbalah, Neoplatonism, and more.</p></div>`;

    for (const section of sections) {
        html += `<h3 style="color:var(--accent);margin:28px 0 14px;font-weight:400;font-size:1.1rem;">${section.label}</h3><div class="home-grid">`;
        for (const item of section.items) {
            const unit = item.count === 1 ? 'item' : 'items';
            html += `<a href="#" class="home-card" data-page="${item.page}"><h3>${item.title}</h3><div class="count">${item.count} ${unit}</div></a>`;
        }
        html += `</div>`;
    }
    return html;
}

function renderGallery(pageData) {
    let html = `<div class="page-header"><h2>${pageData.title}</h2><p>${pageData.desc}</p></div><div class="gallery">`;
    for (const img of pageData.images) {
        html += `<div class="card" data-src="${IMG}${img.file}"><img src="${IMG}${img.file}" alt="${img.title}" loading="lazy"><div class="card-body"><h3>${img.title}</h3></div></div>`;
    }
    html += `</div>`;
    return html;
}

function renderDecks(pageData) {
    let html = `<div class="page-header"><h2>${pageData.title}</h2><p>${pageData.desc}</p></div><div class="deck-list">`;
    for (const deck of pageData.decks) {
        const isVideo = deck.file.endsWith('.mp4');
        const icon = isVideo ? '&#9654;' : '&#128196;';
        html += `<a href="${PDF}${deck.file}" target="_blank" class="deck-item"><div class="deck-icon">${icon}</div><div class="deck-info"><h3>${deck.title}</h3><span class="deck-type">${deck.type}</span></div></a>`;
    }
    html += `</div>`;
    return html;
}

// ── Navigation ──

const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('sidebar-toggle');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function navigate(pageId) {
    // Update active link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (active) active.classList.add('active');

    if (pageId === 'home') {
        content.innerHTML = renderHome();
    } else if (pages[pageId]) {
        const p = pages[pageId];
        if (p.images) {
            content.innerHTML = renderGallery(p);
        } else if (p.decks) {
            content.innerHTML = renderDecks(p);
        }
    }

    // Close mobile sidebar
    sidebar.classList.remove('open');
    window.scrollTo(0, 0);

    // Update hash
    history.pushState(null, '', pageId === 'home' ? '#' : `#${pageId}`);
}

// Event delegation for nav links and home cards
document.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (link) {
        e.preventDefault();
        navigate(link.dataset.page);
        return;
    }

    // Gallery card click → lightbox
    const card = e.target.closest('.card[data-src]');
    if (card) {
        lightboxImg.src = card.dataset.src;
        lightbox.style.display = 'flex';
        return;
    }

    // Close lightbox
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.style.display = 'none';
    }
});

// Escape closes lightbox
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.style.display = 'none';
});

// Sidebar toggle
toggle.addEventListener('click', () => sidebar.classList.toggle('open'));

// Initial route
const initialPage = location.hash.slice(1) || 'home';
navigate(initialPage);

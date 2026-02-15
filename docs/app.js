// File paths use relative paths assuming images are in parent directory
// For GitHub Pages, images will be in the repo root
const IMG = '../';
const PDF = '../';
const CHATS = '../esoteric studies chats/';

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

    // ── Esoteric Studies — ChatGPT Chats ──

    'chats-alchemy': {
        title: 'ChatGPT Chats — Alchemy',
        desc: 'ChatGPT research conversations on alchemy — history, texts, emblems, historiography, and creative projects.',
        chats: [
            // From __Alchemy__ category folder
            { path: '__Alchemy__/Alchemy 1908 MS deknamen/index.html', title: 'Alchemy 1908 MS Deknamen' },
            { path: '__Alchemy__/Alchemy Al Khwarizmi/index.html', title: 'Alchemy & Al-Khwarizmi' },
            { path: '__Alchemy__/Alchemy Ancient Byzantine/index.html', title: 'Alchemy: Ancient & Byzantine' },
            { path: '__Alchemy__/Alchemy and Apocalyptic Discourse/index.html', title: 'Alchemy and Apocalyptic Discourse' },
            { path: '__Alchemy__/Alchemy and Authority Summary/index.html', title: 'Alchemy and Authority' },
            { path: '__Alchemy__/Alchemy and Gnosticism Explained/index.html', title: 'Alchemy and Gnosticism' },
            { path: '__Alchemy__/Alchemy and Mathematics/index.html', title: 'Alchemy and Mathematics' },
            { path: '__Alchemy__/Alchemy and Photography Origins/index.html', title: 'Alchemy and Photography Origins' },
            { path: '__Alchemy__/Alchemy and Physics Beauty/index.html', title: 'Alchemy and Physics' },
            { path: '__Alchemy__/Alchemy and Psychological Interpretation/index.html', title: 'Alchemy and Psychological Interpretation' },
            { path: '__Alchemy__/Alchemy Arabic Treatise Summary/index.html', title: 'Alchemy: Arabic Treatise Summary' },
            { path: '__Alchemy__/Alchemy Architecture and Play/index.html', title: 'Alchemy, Architecture, and Play' },
            { path: '__Alchemy__/Alchemy Bible/index.html', title: 'Alchemy Bible' },
            { path: '__Alchemy__/Alchemy Board Game Code Fix/index.html', title: 'Alchemy Board Game Code Fix' },
            { path: '__Alchemy__/Alchemy Chemistry summary/index.html', title: 'Alchemy & Chemistry Summary' },
            { path: '__Alchemy__/Alchemy Coloring Book Introduction/index.html', title: 'Alchemy Coloring Book Introduction' },
            { path: '__Alchemy__/Alchemy Coloring Project Outline/index.html', title: 'Alchemy Coloring Project Outline' },
            { path: '__Alchemy__/Alchemy Game Mechanics/index.html', title: 'Alchemy Game Mechanics' },
            { path: '__Alchemy__/Alchemy Game Tutorial Design/index.html', title: 'Alchemy Game Tutorial Design' },
            { path: '__Alchemy__/Alchemy Hiro Hirai Bodies Internal Powers/index.html', title: 'Hiro Hirai: Bodies & Internal Powers' },
            { path: '__Alchemy__/Alchemy Historiography Summary/index.html', title: 'Alchemy Historiography Summary' },
            { path: '__Alchemy__/Alchemy Historiography Summary (1)/index.html', title: 'Alchemy Historiography Summary (2)' },
            { path: '__Alchemy__/Alchemy Illustrations Tweet Ideas/index.html', title: 'Alchemy Illustrations Tweet Ideas' },
            { path: '__Alchemy__/Alchemy in Byzantium/index.html', title: 'Alchemy in Byzantium' },
            { path: '__Alchemy__/Alchemy in Graeco-Roman Egypt/index.html', title: 'Alchemy in Graeco-Roman Egypt' },
            { path: '__Alchemy__/Alchemy Khunrath Oberstall Lab/index.html', title: 'Khunrath & Oberstall Lab' },
            { path: '__Alchemy__/Alchemy Lab 16-17c fine art/index.html', title: 'Alchemy Lab: 16th-17th c. Fine Art' },
            { path: '__Alchemy__/Alchemy Lab Board Game/index.html', title: 'Alchemy Lab Board Game' },
            { path: '__Alchemy__/Alchemy Mendicant Orders/index.html', title: 'Alchemy & Mendicant Orders' },
            { path: '__Alchemy__/Alchemy Michelspacher Cabala/index.html', title: 'Michelspacher Cabala' },
            { path: '__Alchemy__/Alchemy Petrus Bonus/index.html', title: 'Petrus Bonus on Alchemy' },
            { path: '__Alchemy__/Alchemy Pinball Game Concept/index.html', title: 'Alchemy Pinball Game Concept' },
            { path: '__Alchemy__/Alchemy Pinball Game Mechanics/index.html', title: 'Alchemy Pinball Game Mechanics' },
            { path: '__Alchemy__/Alchemy practical exegesis/index.html', title: 'Alchemy: Practical Exegesis' },
            { path: '__Alchemy__/Alchemy Puzzle Game Code/index.html', title: 'Alchemy Puzzle Game Code' },
            { path: '__Alchemy__/Alchemy Puzzle Game Design/index.html', title: 'Alchemy Puzzle Game Design' },
            { path: '__Alchemy__/Alchemy quest for longevity/index.html', title: 'Alchemy: Quest for Longevity' },
            { path: '__Alchemy__/alchemy scholarship atalanta doc/index.html', title: 'Alchemy Scholarship: Atalanta' },
            { path: '__Alchemy__/Alchemy theater museum/index.html', title: 'Alchemy Theater Museum' },
            { path: '__Alchemy__/Alchemy Wine/index.html', title: 'Alchemy & Wine' },
            { path: '__Alchemy__/Alchemy Zosimos divine images/index.html', title: 'Zosimos: Divine Images' },
            { path: '__Alchemy__/Anatomy 17c alchemy chemistry/index.html', title: 'Anatomy, 17c Alchemy & Chemistry' },
            { path: '__Alchemy__/Ancient Egyptian Alchemy and Science/index.html', title: 'Ancient Egyptian Alchemy & Science' },
            { path: '__Alchemy__/Archaeology Alchemy early modern/index.html', title: 'Archaeology of Early Modern Alchemy' },
            { path: '__Alchemy__/Archaeology of Alchemy Summary/index.html', title: 'Archaeology of Alchemy Summary' },
            { path: '__Alchemy__/Aristotle Passages on Alchemy/index.html', title: 'Aristotle Passages on Alchemy' },
            { path: '__Alchemy__/Art and Alchemy Summary/index.html', title: 'Art and Alchemy' },
            { path: '__Alchemy__/Astrology and Alchemy Summary/index.html', title: 'Astrology and Alchemy' },
            { path: '__Alchemy__/Chicago Style Bibliography Alchemy/index.html', title: 'Chicago Style Bibliography: Alchemy' },
            { path: '__Alchemy__/Compound of Alchemy/index.html', title: 'Compound of Alchemy' },
            { path: '__Alchemy__/Contributions to Spiritual Alchemy/index.html', title: 'Contributions to Spiritual Alchemy' },
            { path: '__Alchemy__/Dragon Symbolism in Alchemy/index.html', title: 'Dragon Symbolism in Alchemy' },
            { path: '__Alchemy__/Dragon Symbolism in Alchemy (1)/index.html', title: 'Dragon Symbolism in Alchemy (2)' },
            { path: '__Alchemy__/Dragon Symbolism in Alchemy (2)/index.html', title: 'Dragon Symbolism in Alchemy (3)' },
            { path: '__Alchemy__/Games Learning Alchemy Board Game/index.html', title: 'Games & Learning: Alchemy Board Game' },
            { path: '__Alchemy__/Graeco-Egyptian Alchemy in Byzantium/index.html', title: 'Graeco-Egyptian Alchemy in Byzantium' },
            { path: '__Alchemy__/Greek Alchemy Lab Summary/index.html', title: 'Greek Alchemy Lab Summary' },
            { path: '__Alchemy__/Greek Alchemy Summary/index.html', title: 'Greek Alchemy Summary' },
            { path: '__Alchemy__/Grimes Alchemy/index.html', title: 'Grimes on Alchemy' },
            { path: '__Alchemy__/Hermetic Alchemy and Enoch/index.html', title: 'Hermetic Alchemy and Enoch' },
            { path: '__Alchemy__/Instagram Posts Alchemy Emblems/index.html', title: 'Instagram Posts: Alchemy Emblems' },
            { path: '__Alchemy__/Metabolic Domination in Alchemy/index.html', title: 'Metabolic Domination in Alchemy' },
            { path: '__Alchemy__/New Historiography of Alchemy/index.html', title: 'New Historiography of Alchemy' },
            { path: '__Alchemy__/Plato and Aristotle on Alchemy/index.html', title: 'Plato & Aristotle on Alchemy' },
            { path: '__Alchemy__/Python Alchemy PDF Database/index.html', title: 'Python Alchemy PDF Database' },
            { path: '__Alchemy__/Recent Alchemy Publications/index.html', title: 'Recent Alchemy Publications' },
            { path: '__Alchemy__/Spiritual Alchemy Close Reading/index.html', title: 'Spiritual Alchemy: Close Reading' },
            { path: '__Alchemy__/Spirituality of the West Alchemy/index.html', title: 'Spirituality of the West: Alchemy' },
            { path: '__Alchemy__/Tilton on Spiritual Alchemy/index.html', title: 'Tilton on Spiritual Alchemy' },
            { path: '__Alchemy__/Time-Travel Alchemy Episode/index.html', title: 'Time-Travel Alchemy Episode' },
            // Standalone alchemy chats
            { path: 'Alchemical Emblem Puzzle Ideas/index.html', title: 'Alchemical Emblem Puzzle Ideas' },
            { path: 'Alchemical Emblems Quiz/index.html', title: 'Alchemical Emblems Quiz' },
            { path: 'Alchemical Emblems Summary Request/index.html', title: 'Alchemical Emblems Summary' },
            { path: 'Alchemical Emoji Ranking/index.html', title: 'Alchemical Emoji Ranking' },
            { path: 'Alchemical Exegesis Summary/index.html', title: 'Alchemical Exegesis Summary' },
            { path: 'Alchemical Illustrations and Materials Science/index.html', title: 'Alchemical Illustrations & Materials Science' },
            { path: 'Alchemical Illustrations Course Design/index.html', title: 'Alchemical Illustrations Course Design' },
            { path: 'Alchemical Imagery in Sonnets/index.html', title: 'Alchemical Imagery in Sonnets' },
            { path: 'Alchemical Poem Interpretation/index.html', title: 'Alchemical Poem Interpretation' },
            { path: 'Alchemical Text Summaries/index.html', title: 'Alchemical Text Summaries' },
            { path: 'Alchemical Text Summary Request/index.html', title: 'Alchemical Text Summary Request' },
            { path: 'Alchemical Texts Methodology Insights/index.html', title: 'Alchemical Texts: Methodology Insights' },
            { path: "Alchemist's Black Hole Revelation/index.html", title: "Alchemist's Black Hole Revelation" },
            { path: 'Albert the Great twins monsters/index.html', title: 'Albert the Great: Twins & Monsters' },
            { path: '2025-01-15_Alchemy-Periodic-Table-Creation/index.html', title: 'Alchemy Periodic Table Creation' },
            { path: '2025-01-16_Four-Books-of-Alchemy/index.html', title: 'Four Books of Alchemy' },
            { path: '2025-01-18_Alchemia-Medica-Summary/index.html', title: 'Alchemia Medica Summary' },
            { path: '2025-02-05_Ancient-Alchemy-Laboratory-Image/index.html', title: 'Ancient Alchemy Laboratory Image' },
            { path: '2025-05-22_Alchemy-in-Music-and-Monteverdi/index.html', title: 'Alchemy in Music and Monteverdi' },
            { path: '2025-05-26_Heinrich-Khunrath-Summary/index.html', title: 'Heinrich Khunrath Summary' },
            { path: '2025-05-27_Khunrath-Theosophy-Summary/index.html', title: 'Khunrath Theosophy Summary' },
            { path: '2025-09-02_Alchemy-materials-list/index.html', title: 'Alchemy Materials List' },
            { path: '2025-09-09_Alchemical-text-summary/index.html', title: 'Alchemical Text Summary' },
            { path: '2025-10-12_Pseudo-Jabir-Plato-Rectifications/index.html', title: 'Pseudo-Jabir & Plato Rectifications' },
            { path: '2025-10-26_Overview-of-Zosimos-research/index.html', title: 'Overview of Zosimos Research' },
            { path: '2025-11-30_Historiography-of-Alchemy/index.html', title: 'Historiography of Alchemy' },
            { path: '2025-12-17_Alchemy-book-review-summary/index.html', title: 'Alchemy Book Review Summary' },
        ]
    },

    'chats-magic': {
        title: 'ChatGPT Chats — Magic',
        desc: 'ChatGPT research conversations on magical traditions — ancient, medieval, Renaissance, and modern.',
        chats: [
            // From __Magic__ category folder
            { path: '__Magic__/Agrippa and Magical Language/index.html', title: 'Agrippa and Magical Language' },
            { path: '__Magic__/Ancient Greek Roman Magic/index.html', title: 'Ancient Greek & Roman Magic' },
            { path: '__Magic__/Ancient Magic Educational Games/index.html', title: 'Ancient Magic Educational Games' },
            { path: '__Magic__/Ancient Magic Summary Table/index.html', title: 'Ancient Magic Summary Table' },
            { path: '__Magic__/Ancient Magic Vocabulary Ideas/index.html', title: 'Ancient Magic Vocabulary Ideas' },
            { path: '__Magic__/Archaeology ancient magic/index.html', title: 'Archaeology of Ancient Magic' },
            { path: '__Magic__/Ars Notoria Magical Context/index.html', title: 'Ars Notoria: Magical Context' },
            { path: '__Magic__/Critiques of Yates\'s Magic/index.html', title: "Critiques of Yates's Magic" },
            { path: '__Magic__/Crowley\'s Magical Journal Summary/index.html', title: "Crowley's Magical Journal Summary" },
            { path: '__Magic__/Custom GPT for Magic Decks/index.html', title: 'Custom GPT for Magic Decks' },
            { path: '__Magic__/Divination Magic Summary/index.html', title: 'Divination Magic Summary' },
            { path: '__Magic__/Enochian Magic Summary Request/index.html', title: 'Enochian Magic Summary' },
            { path: '__Magic__/Erotica and Sexual Magic/index.html', title: 'Erotica and Sexual Magic' },
            { path: '__Magic__/Fanger Ritual Magic/index.html', title: 'Fanger: Ritual Magic' },
            { path: '__Magic__/Frances Yates Renaissance Magic/index.html', title: 'Frances Yates: Renaissance Magic' },
            { path: '__Magic__/Greek Magical Texts Summary/index.html', title: 'Greek Magical Texts Summary' },
            { path: '__Magic__/Growing Academic Magic Channel/index.html', title: 'Growing Academic Magic Channel' },
            { path: '__Magic__/Historical Magical Texts/index.html', title: 'Historical Magical Texts' },
            { path: '__Magic__/Improving Magic Skills/index.html', title: 'Improving Magic Skills' },
            { path: '__Magic__/Jewish Magic Late Antiquity/index.html', title: 'Jewish Magic: Late Antiquity' },
            { path: '__Magic__/Jewish Magic Literature Summary/index.html', title: 'Jewish Magic Literature Summary' },
            { path: '__Magic__/Jewish Mandaic Magic Analysis/index.html', title: 'Jewish & Mandaic Magic Analysis' },
            { path: '__Magic__/Label of Magic 4th c/index.html', title: 'Label of Magic: 4th Century' },
            { path: '__Magic__/Latin Vocabulary Magical Texts/index.html', title: 'Latin Vocabulary: Magical Texts' },
            { path: '__Magic__/Magic Card Alphabet/index.html', title: 'Magic Card Alphabet' },
            { path: '__Magic__/Magic Card Data Analysis/index.html', title: 'Magic Card Data Analysis' },
            { path: '__Magic__/Magic Deck App Plan/index.html', title: 'Magic Deck App Plan' },
            { path: '__Magic__/Magic Deck Archetypes Summary/index.html', title: 'Magic Deck Archetypes Summary' },
            { path: '__Magic__/Magic Discourse Polemic Syriac/index.html', title: 'Magic Discourse & Polemic: Syriac' },
            { path: '__Magic__/Magic in Rome Summary/index.html', title: 'Magic in Rome' },
            { path: '__Magic__/Magic Religion in PGM/index.html', title: 'Magic & Religion in PGM' },
            { path: '__Magic__/Magic Square Sigil App/index.html', title: 'Magic Square Sigil App' },
            { path: '__Magic__/Magical Latin Phrases/index.html', title: 'Magical Latin Phrases' },
            { path: '__Magic__/Magical Materials in Picatrix/index.html', title: 'Magical Materials in Picatrix' },
            { path: '__Magic__/Magical Medieval Grim Wars/index.html', title: 'Magical Medieval Grim Wars' },
            { path: '__Magic__/Magical Palindrome Request/index.html', title: 'Magical Palindrome Request' },
            { path: '__Magic__/Magical Practices in Latin West/index.html', title: 'Magical Practices in the Latin West' },
            { path: '__Magic__/Magical Vocabulary Translation Summary/index.html', title: 'Magical Vocabulary Translation' },
            { path: '__Magic__/Magick in Theory Summary/index.html', title: 'Magick in Theory Summary' },
            { path: '__Magic__/Medieval Magic Scholars/index.html', title: 'Medieval Magic Scholars' },
            { path: '__Magic__/Medieval Magic Summary Request/index.html', title: 'Medieval Magic Summary' },
            { path: '__Magic__/N. Janowitz Roman Magic/index.html', title: 'N. Janowitz: Roman Magic' },
            { path: '__Magic__/Neoplatonic Magic Curriculum Outline/index.html', title: 'Neoplatonic Magic Curriculum' },
            { path: '__Magic__/Plato Magic Terms List/index.html', title: 'Plato: Magic Terms List' },
            { path: '__Magic__/Plato Neoplatonism and Renaissance Magic/index.html', title: 'Plato, Neoplatonism & Renaissance Magic' },
            { path: '__Magic__/Practical Sigil Magic Overview/index.html', title: 'Practical Sigil Magic Overview' },
            { path: '__Magic__/React Magic Card Display/index.html', title: 'React Magic Card Display' },
            { path: '__Magic__/Renaissance Magic Board Game/index.html', title: 'Renaissance Magic Board Game' },
            { path: '__Magic__/Renaissance Magicians MTG Cards/index.html', title: 'Renaissance Magicians MTG Cards' },
            { path: '__Magic__/Sigil Magic Summary Request/index.html', title: 'Sigil Magic Summary' },
            { path: '__Magic__/Talmudic Sources on Magic/index.html', title: 'Talmudic Sources on Magic' },
            { path: '__Magic__/Wilson on Lit Phil Magick/index.html', title: 'Wilson on Literary & Philosophical Magick' },
            { path: '__Magic__/Wilson\'s Magical Self-Engineering/index.html', title: "Wilson's Magical Self-Engineering" },
            // Standalone magic chats
            { path: '2025-01-30_Scholars-in-Greco-Roman-Magic/index.html', title: 'Scholars in Greco-Roman Magic' },
            { path: '2025-05-29_Enochian-Language-Rigor-Myth/index.html', title: 'Enochian Language: Rigor & Myth' },
            { path: '2025-12-07_Lesser-known-magical-sources/index.html', title: 'Lesser-Known Magical Sources' },
            { path: 'Al-Buni Gardiner/index.html', title: 'Al-Buni & Gardiner' },
            { path: '2025-05-26_Al-Ghazali-and-Magic-Squares/index.html', title: 'Al-Ghazali and Magic Squares' },
        ]
    },

    'chats-bruno': {
        title: 'ChatGPT Chats — Giordano Bruno',
        desc: 'ChatGPT research conversations on Giordano Bruno — De Umbris Idearum, infinite worlds, memory, and satire.',
        chats: [
            { path: '__Bruno__/Giordano Bruno/index.html', title: 'Giordano Bruno' },
            { path: '__Bruno__/Giordano Bruno De Umbris Idearum/index.html', title: 'De Umbris Idearum' },
            { path: '__Bruno__/Giordano Bruno Overview/index.html', title: 'Giordano Bruno Overview' },
            { path: '__Bruno__/Giordano Bruno Satire Summary/index.html', title: 'Bruno: Satire Summary' },
            { path: '__Bruno__/Giordano Bruno Table Summary/index.html', title: 'Bruno: Table Summary' },
            { path: '__Bruno__/Giordano Bruno Works Summary/index.html', title: 'Bruno: Works Summary' },
            { path: '__Bruno__/Bruno Egli proto-RC Naples/index.html', title: 'Bruno, Egli & Proto-Rosicrucianism in Naples' },
            { path: "__Bruno__/Bruno's Contraction Concept/index.html", title: "Bruno's Contraction Concept" },
            { path: '__Bruno__/Hegel on Eriugena and Bruno/index.html', title: 'Hegel on Eriugena and Bruno' },
            { path: '__Bruno__/Summary of Bruno\'s Work/index.html', title: "Summary of Bruno's Work" },
            // Standalone
            { path: '2025-01-16_bruno-upside-down/index.html', title: 'Bruno Upside Down' },
            { path: '2025-09-28_Plotinus-influence-on-Bruno/index.html', title: 'Plotinus\' Influence on Bruno' },
        ]
    },

    'chats-pico': {
        title: 'ChatGPT Chats — Pico della Mirandola',
        desc: 'ChatGPT research conversations on Pico — the 900 Conclusions, the Oration, Cabala, and current scholarship.',
        chats: [
            { path: '__Pico__/Pico and Divine Being/index.html', title: 'Pico and Divine Being' },
            { path: '__Pico__/Pico della Mirandola Philosophy Summary/index.html', title: 'Pico della Mirandola: Philosophy Summary' },
            { path: "__Pico__/Pico's Oration and Cabala/index.html", title: "Pico's Oration and Cabala" },
            { path: '2025-01-07_Pico-and-Divine-Being/index.html', title: 'Pico and Divine Being (Jan 2025)' },
            { path: '2025-07-04_Pico-900-Conclusions-Exegesis/index.html', title: 'Pico: 900 Conclusions Exegesis' },
            { path: '2025-07-05_Pico-della-Mirandola-Summary/index.html', title: 'Pico della Mirandola Summary' },
            { path: '2025-10-29_Cutting-edge-in-Pico-studies/index.html', title: 'Cutting Edge in Pico Studies' },
        ]
    },

    'chats-agrippa': {
        title: 'ChatGPT Chats — Cornelius Agrippa',
        desc: 'ChatGPT research conversations on Agrippa — De Occulta Philosophia and magical language.',
        chats: [
            { path: '__Agrippa__/Agrippa and Magical Language/index.html', title: 'Agrippa and Magical Language' },
            { path: '2026-02-06_Agrippa/index.html', title: 'Agrippa (Feb 2026)' },
        ]
    },

    'chats-hermeticism-neoplatonism': {
        title: 'ChatGPT Chats — Hermeticism & Neoplatonism',
        desc: 'ChatGPT research conversations on Hermeticism, Neoplatonism, Iamblichus, Plotinus, Proclus, and Gnosticism.',
        chats: [
            { path: '__Iamblichus__/Hermeticism in Iamblichus Mysteries/index.html', title: 'Hermeticism in Iamblichus\' Mysteries' },
            { path: '2025-01-09_Stoicism-and-Neoplatonism-Influence/index.html', title: 'Stoicism and Neoplatonism Influence' },
            { path: '2025-08-17_Iamblichus-and-Hermeticism/index.html', title: 'Iamblichus and Hermeticism' },
            { path: '2025-10-12_Gnosticism-vs-Hermeticism-comparison/index.html', title: 'Gnosticism vs. Hermeticism' },
            { path: '2025-10-12_New-insights-in-Platonism/index.html', title: 'New Insights in Platonism' },
            { path: '2026-01-10_Hermetica-II-Overview/index.html', title: 'Hermetica II Overview' },
            { path: '2026-01-15_Proclus-Mereology-Explained/index.html', title: 'Proclus: Mereology Explained' },
            { path: '2026-02-01_Unpacking-Henads-in-Neoplatonism/index.html', title: 'Unpacking Henads in Neoplatonism' },
            { path: 'Aristotle Quotes Neoplatonist Interpretations/index.html', title: 'Aristotle: Neoplatonist Interpretations' },
            { path: 'Apuleius Apology/index.html', title: 'Apuleius\' Apology' },
        ]
    },

    'chats-kabbalah': {
        title: 'ChatGPT Chats — Kabbalah',
        desc: 'ChatGPT research conversations on Kabbalah — Abulafia, Sefer Yetzirah, and Reuchlin.',
        chats: [
            { path: 'Abraham Abulafia Overview/index.html', title: 'Abraham Abulafia Overview' },
            { path: 'Abulafia and Yoga Influence/index.html', title: 'Abulafia and Yoga Influence' },
            { path: '2025-10-12_New-picture-of-Abulafia/index.html', title: 'New Picture of Abulafia' },
            { path: '2025-11-30_Digital-Sefer-Yetzirah-project/index.html', title: 'Digital Sefer Yetzirah Project' },
            { path: '2026-02-06_Reuchlin/index.html', title: 'Reuchlin (Feb 2026)' },
        ]
    },

    'chats-renaissance': {
        title: 'ChatGPT Chats — Renaissance & Early Modern',
        desc: 'ChatGPT research conversations on broader Renaissance topics — Trithemius, Ficino, Rosicrucianism, emblematics, and more.',
        chats: [
            { path: '2026-02-06_Trithemius/index.html', title: 'Trithemius (Feb 2026)' },
            { path: '2025-02-06_Incipit-Liber-Mysticae-Theologiae/index.html', title: 'Incipit Liber Mysticae Theologiae' },
            { path: '2025-05-27_Dürer-Hypnerotomachia-Analysis/index.html', title: 'Dürer & Hypnerotomachia Analysis' },
            { path: '2025-06-17_Hypnerotomachia-Poliphili-Plot-Summary/index.html', title: 'Hypnerotomachia Poliphili: Plot Summary' },
            { path: '2025-06-13_Religious-Studies-Visionary-Theories/index.html', title: 'Religious Studies: Visionary Theories' },
            { path: '2025-07-15_Couliano-and-Yates\'-Theories/index.html', title: "Couliano and Yates' Theories" },
            { path: '2025-10-19_Alberti-Thesis-Weller/index.html', title: 'Alberti Thesis: Weller' },
            { path: '2026-01-10_Baltic-Rosicrucianism-Analysis/index.html', title: 'Baltic Rosicrucianism Analysis' },
            { path: '2026-01-10_Emblematics-in-Early-Modern-Age/index.html', title: 'Emblematics in the Early Modern Age' },
            { path: 'Buckland Museum Overview/index.html', title: 'Buckland Museum Overview' },
            { path: 'Burnett 12th Century Renaissance/index.html', title: 'Burnett: 12th Century Renaissance' },
            { path: 'Burnett Runes/index.html', title: 'Burnett: Runes' },
        ]
    },
};

// ── Count helpers ──

const totalInfographics = Object.values(pages).reduce((n, p) => n + (p.images ? p.images.length : 0), 0);
const totalDecks = Object.values(pages).reduce((n, p) => n + (p.decks ? p.decks.length : 0), 0);
const totalChats = Object.values(pages).reduce((n, p) => n + (p.chats ? p.chats.length : 0), 0);

// ── Infographic sections for the combined page ──

const infographicSections = [
    { label: 'Alchemy', key: 'alchemy' },
    { label: 'Hermeticism', key: 'hermeticism' },
    { label: 'Renaissance Magic', key: 'renaissance-general' },
    { label: 'Trithemius', key: 'trithemius' },
    { label: 'Giordano Bruno', key: 'bruno' },
    { label: 'Pico della Mirandola', key: 'pico' },
    { label: 'Marsilio Ficino', key: 'ficino' },
    { label: 'Cornelius Agrippa', key: 'agrippa' },
    { label: 'Kabbalah & Tarot', key: 'kabbalah' },
    { label: 'Neoplatonism', key: 'neoplatonism' },
    { label: 'Other Topics', key: 'other' },
];

// ── Rendering ──

function renderHome() {
    return `<div class="landing">
        <h2>NotebookLM Summaries</h2>
        <p class="tagline">Infographics, slide decks, and archived ChatGPT conversations on alchemy, hermeticism, Renaissance magic, Kabbalah, Neoplatonism, and more.</p>
        <div class="landing-buttons">
            <a href="#" data-page="infographics" class="landing-btn">
                <span class="btn-icon">&#128444;</span>
                <span class="btn-label">Infographics</span>
                <span class="btn-count">${totalInfographics} images</span>
            </a>
            <a href="#" data-page="slide-decks" class="landing-btn">
                <span class="btn-icon">&#128196;</span>
                <span class="btn-label">Slide Decks</span>
                <span class="btn-count">${totalDecks} decks</span>
            </a>
            <a href="#" data-page="chat-index" class="landing-btn">
                <span class="btn-icon">&#128172;</span>
                <span class="btn-label">Esoteric Studies Chats</span>
                <span class="btn-count">${totalChats} conversations</span>
            </a>
            <a href="#" data-page="old-site" class="landing-btn">
                <span class="btn-icon">&#128218;</span>
                <span class="btn-label">Old Site</span>
                <span class="btn-count">original layout</span>
            </a>
        </div>
    </div>`;
}

function renderInfographics() {
    let html = `<div class="page-header"><h2>Infographics</h2><p>All ${totalInfographics} infographics at full size. Click any image to zoom.</p></div>`;
    for (const section of infographicSections) {
        const p = pages[section.key];
        if (!p || !p.images || !p.images.length) continue;
        html += `<h3 class="infographic-section">${section.label}</h3><div class="infographic-list">`;
        for (const img of p.images) {
            html += `<div class="infographic-item" data-src="${IMG}${img.file}"><img src="${IMG}${img.file}" alt="${img.title}" loading="lazy"><h3>${img.title}</h3></div>`;
        }
        html += `</div>`;
    }
    return html;
}

function renderSlideIndex() {
    const deckPages = ['slides-alchemy', 'slides-hermeticism', 'slides-renaissance', 'slides-kabbalah', 'slides-neoplatonism', 'slides-other'];
    let html = `<div class="page-header"><h2>Slide Decks</h2><p>All ${totalDecks} PDF slide decks and videos.</p></div><div class="deck-list">`;
    for (const key of deckPages) {
        const p = pages[key];
        if (!p) continue;
        for (const deck of p.decks) {
            const isVideo = deck.file.endsWith('.mp4');
            const icon = isVideo ? '&#9654;' : '&#128196;';
            html += `<a href="${PDF}${deck.file}" target="_blank" class="deck-item"><div class="deck-icon">${icon}</div><div class="deck-info"><h3>${deck.title}</h3><span class="deck-type">${deck.type}</span></div></a>`;
        }
    }
    html += `</div>`;
    return html;
}

function renderChatIndex() {
    const chatPages = [
        { key: 'chats-alchemy', label: 'Alchemy' },
        { key: 'chats-magic', label: 'Magic' },
        { key: 'chats-bruno', label: 'Giordano Bruno' },
        { key: 'chats-pico', label: 'Pico della Mirandola' },
        { key: 'chats-agrippa', label: 'Cornelius Agrippa' },
        { key: 'chats-hermeticism-neoplatonism', label: 'Hermeticism & Neoplatonism' },
        { key: 'chats-kabbalah', label: 'Kabbalah' },
        { key: 'chats-renaissance', label: 'Renaissance & Early Modern' },
    ];
    let html = `<div class="page-header"><h2>Esoteric Studies Chats</h2><p>${totalChats} archived ChatGPT research conversations, organized by topic.</p></div>`;
    for (const { key, label } of chatPages) {
        const p = pages[key];
        if (!p || !p.chats.length) continue;
        html += `<h3 class="infographic-section">${label} <span style="font-size:0.8rem;color:var(--text-dim);font-weight:400;">(${p.chats.length})</span></h3><div class="deck-list">`;
        for (const chat of p.chats) {
            html += `<a href="${CHATS}${chat.path}" target="_blank" class="deck-item"><div class="deck-icon">&#128172;</div><div class="deck-info"><h3>${chat.title}</h3><span class="deck-type">ChatGPT Conversation</span></div></a>`;
        }
        html += `</div>`;
    }
    return html;
}

function renderOldSite() {
    // Recreate the original multi-section home page
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
        { label: 'Esoteric Studies Chats', items: [
            { page: 'chats-alchemy', title: 'Alchemy', count: pages['chats-alchemy'].chats.length },
            { page: 'chats-magic', title: 'Magic', count: pages['chats-magic'].chats.length },
            { page: 'chats-bruno', title: 'Giordano Bruno', count: pages['chats-bruno'].chats.length },
            { page: 'chats-pico', title: 'Pico della Mirandola', count: pages['chats-pico'].chats.length },
            { page: 'chats-agrippa', title: 'Cornelius Agrippa', count: pages['chats-agrippa'].chats.length },
            { page: 'chats-hermeticism-neoplatonism', title: 'Hermeticism & Neoplatonism', count: pages['chats-hermeticism-neoplatonism'].chats.length },
            { page: 'chats-kabbalah', title: 'Kabbalah', count: pages['chats-kabbalah'].chats.length },
            { page: 'chats-renaissance', title: 'Renaissance & Early Modern', count: pages['chats-renaissance'].chats.length },
        ]},
    ];

    let html = `<div class="page-header"><h2>Old Site Layout</h2><p>The original categorized view.</p></div>`;
    for (const section of sections) {
        html += `<h3 class="infographic-section">${section.label}</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-bottom:16px;">`;
        for (const item of section.items) {
            const unit = item.count === 1 ? 'item' : 'items';
            html += `<a href="#" data-page="${item.page}" style="display:block;padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:8px;text-decoration:none;color:var(--text);transition:border-color 0.2s,transform 0.2s;"><span style="color:var(--accent);font-size:0.95rem;">${item.title}</span><br><span style="font-size:0.75rem;color:var(--text-dim);">${item.count} ${unit}</span></a>`;
        }
        html += `</div>`;
    }
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

function renderChats(pageData) {
    let html = `<div class="page-header"><h2>${pageData.title}</h2><p>${pageData.desc}</p></div><div class="deck-list">`;
    for (const chat of pageData.chats) {
        html += `<a href="${CHATS}${chat.path}" target="_blank" class="deck-item"><div class="deck-icon">&#128172;</div><div class="deck-info"><h3>${chat.title}</h3><span class="deck-type">ChatGPT Conversation</span></div></a>`;
    }
    html += `</div>`;
    return html;
}

function renderGallery(pageData) {
    let html = `<div class="page-header"><h2>${pageData.title}</h2><p>${pageData.desc}</p></div><div class="infographic-list">`;
    for (const img of pageData.images) {
        html += `<div class="infographic-item" data-src="${IMG}${img.file}"><img src="${IMG}${img.file}" alt="${img.title}" loading="lazy"><h3>${img.title}</h3></div>`;
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
    } else if (pageId === 'infographics') {
        content.innerHTML = renderInfographics();
    } else if (pageId === 'slide-decks') {
        content.innerHTML = renderSlideIndex();
    } else if (pageId === 'chat-index') {
        content.innerHTML = renderChatIndex();
    } else if (pageId === 'old-site') {
        content.innerHTML = renderOldSite();
    } else if (pages[pageId]) {
        const p = pages[pageId];
        if (p.images) {
            content.innerHTML = renderGallery(p);
        } else if (p.decks) {
            content.innerHTML = renderDecks(p);
        } else if (p.chats) {
            content.innerHTML = renderChats(p);
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

    // Infographic item click → lightbox
    const item = e.target.closest('.infographic-item[data-src]');
    if (item) {
        lightboxImg.src = item.dataset.src;
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

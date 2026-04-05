document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ Script chargé et prêt");

  // 📦 DONNÉES INTÉGRÉES (8 Matières complètes)
  const DATA = {
    competencies: [
      // ==========================================
      // 1. MATHÉMATIQUES (Existant)
      // ==========================================
      {
        id: "c1", name: "🧮 Nombres & Calculs", themes: [
          { id: "t1", name: "Décimaux & Fractions", lessons: [
            { id: "l1", title: "Nombres décimaux", objectives: ["Lire", "Comparer", "Arrondir"], 
              content: { theory: "Un décimal se compose d'une partie entière et décimale.", examples: ["12,5", "0,75"], tips: "Aligne les virgules pour comparer." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Dans 38,456, quel est le chiffre des centièmes ?", options: ["3", "4", "5"], correct: 2, explanation: "Le chiffre des centièmes est le 2e après la virgule." },
                { question: "Quel nombre est le plus grand ?", options: ["7,09", "7,1", "7,099"], correct: 1, explanation: "7,1 = 7,100 > 7,099 > 7,09" },
                { question: "Arrondis 4,56 au dixième près.", options: ["4,5", "4,6", "5,0"], correct: 1, explanation: "Le chiffre suivant est 6 (≥5), on arrondit au supérieur." },
                { question: "Comment s'écrit 3 unités et 7 millièmes ?", options: ["3,7", "3,07", "3,007"], correct: 2, explanation: "3 + 0,007 = 3,007" },
                { question: "Quel encadrement à l'unité est correct pour 9,82 ?", options: ["8 < 9,82 < 9", "9 < 9,82 < 10", "10 < 9,82 < 11"], correct: 1, explanation: "9,82 est entre 9 et 10." }
              ]
            },
            { id: "l2", title: "Fractions simples", objectives: ["Lire", "Convertir", "Comparer"], 
              content: { theory: "a/b représente a parts sur b parts égales.", examples: ["1/2 = 0,5", "3/4 = 0,75"], tips: "Divise le numérateur par le dénominateur." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Quelle fraction vaut 0,25 ?", options: ["1/4", "1/5", "2/5"], correct: 0, explanation: "1 ÷ 4 = 0,25" },
                { question: "3/5 d'un gâteau correspond à :", options: ["3 parts sur 5", "5 parts sur 3", "3 parts sur 8"], correct: 0, explanation: "Le dénominateur indique le total de parts." },
                { question: "Quelle fraction est la plus grande ?", options: ["2/3", "3/4", "1/2"], correct: 1, explanation: "2/3≈0,66 | 3/4=0,75 | 1/2=0,5" },
                { question: "7/10 s'écrit sous forme décimale :", options: ["0,7", "7,0", "0,07"], correct: 0, explanation: "7 ÷ 10 = 0,7" },
                { question: "Quelle fraction est équivalente à 2/6 ?", options: ["1/3", "1/2", "3/4"], correct: 0, explanation: "On simplifie par 2 : 2÷2 / 6÷2 = 1/3" }
              ]
            }
          ]},
          { id: "t2", name: "Géométrie & Mesures", lessons: [
            { id: "l5", title: "Droites & Angles", objectives: ["Parallèles", "Perpendiculaires", "Mesurer"], 
              content: { theory: "⊥ forme 90°. // ne se coupent jamais.", examples: ["Équerre", "Rapporteur"], tips: "Vérifie avec les outils avant de conclure." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Deux droites perpendiculaires forment un angle de :", options: ["45°", "90°", "180°"], correct: 1, explanation: "Par définition, la perpendicularité = angle droit (90°)." },
                { question: "Quel instrument trace une perpendiculaire ?", options: ["Règle graduée", "Équerre", "Compas"], correct: 1, explanation: "L'équerre possède un angle droit." },
                { question: "Un angle de 120° est :", options: ["Aigu", "Droit", "Obtus"], correct: 2, explanation: "Obtus = entre 90° et 180°." },
                { question: "La médiatrice d'un segment passe par :", options: ["Une extrémité", "Le milieu", "N'importe où"], correct: 1, explanation: "Elle est perpendiculaire au segment en son milieu." },
                { question: "Dans un triangle, la somme des angles vaut :", options: ["90°", "180°", "360°"], correct: 1, explanation: "Propriété fondamentale des triangles." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 2. FRANÇAIS (Existant)
      // ==========================================
      {
        id: "c_fr", name: "📖 Français", themes: [
          { id: "t_fr1", name: "Grammaire", lessons: [
            { id: "fr_l1", title: "Nature des mots", objectives: ["Identifier", "Classer"], 
              content: { theory: "Chaque mot a une nature (nom, verbe, adj...).", examples: ["chat (nom)", "manger (verbe)"], tips: "Demande-toi : peut-on le mettre au pluriel ? Si oui → nom." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Quelle est la nature de 'rapidement' ?", options: ["Adverbe", "Adjectif", "Nom"], correct: 0, explanation: "Se termine par -ment → adverbe." },
                { question: "'Beau' est un :", options: ["Verbe", "Adjectif qualificatif", "Déterminant"], correct: 1, explanation: "Il qualifie un nom → adjectif." },
                { question: "Dans 'Il court vite', 'court' est un :", options: ["Nom", "Adverbe", "Verbe"], correct: 2, explanation: "Action du sujet → verbe conjugué." },
                { question: "Quel mot est un déterminant ?", options: ["le", "grand", "manger"], correct: 0, explanation: "Précède le nom pour le déterminer." },
                { question: "'Nous' est un pronom :", options: ["Personnel", "Relatif", "Démonstratif"], correct: 0, explanation: "Remplace un nom de personne (1ère pers. pluriel)." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 3. SVT (NOUVEAU)
      // ==========================================
      {
        id: "c_svt", name: "🔬 SVT", themes: [
          { id: "t_svt1", name: "La cellule", lessons: [
            { id: "svt_l1", title: "Structure de la cellule", objectives: ["Identifier", "Décrire", "Comparer"], 
              content: { theory: "La cellule est l'unité de base du vivant. Elle contient un noyau, un cytoplasme et une membrane.", examples: ["Cellule animale", "Cellule végétale (avec paroi)"], tips: "La cellule végétale a une paroi rigide et des chloroplastes." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Quel est le rôle du noyau ?", options: ["Produire de l'énergie", "Contenir l'information génétique", "Protéger la cellule"], correct: 1, explanation: "Le noyau contient l'ADN, support de l'information génétique." },
                { question: "Quelle structure est présente uniquement chez la cellule végétale ?", options: ["Membrane", "Paroi cellulosique", "Cytoplasme"], correct: 1, explanation: "La paroi cellulosique est rigide et spécifique aux végétaux." },
                { question: "Les chloroplastes servent à :", options: ["La respiration", "La photosynthèse", "La division cellulaire"], correct: 1, explanation: "Les chloroplastes contiennent la chlorophylle pour la photosynthèse." },
                { question: "Le cytoplasme est :", options: ["Un liquide gélatineux", "Une membrane", "Un organite"], correct: 0, explanation: "Le cytoplasme est un gel où baignent les organites." },
                { question: "Tous les êtres vivants sont constitués de :", options: ["Cellules", "Atomes uniquement", "Molécules"], correct: 0, explanation: "La cellule est l'unité structurale du vivant." }
              ]
            }
          ]},
          { id: "t_svt2", name: "Nutrition", lessons: [
            { id: "svt_l2", title: "La digestion", objectives: ["Comprendre", "Localiser", "Expliquer"], 
              content: { theory: "La digestion transforme les aliments en nutriments absorbables par l'organisme.", examples: ["Bouche → Estomac → Intestin", "Enzymes digestives"], tips: "La digestion commence dans la bouche avec la mastication." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Où commence la digestion ?", options: ["Dans l'estomac", "Dans la bouche", "Dans l'intestin"], correct: 1, explanation: "La mastication et la salive commencent la digestion dans la bouche." },
                { question: "Les nutriments sont absorbés dans :", options: ["L'estomac", "L'intestin grêle", "Le côlon"], correct: 1, explanation: "L'intestin grêle est le siège principal de l'absorption." },
                { question: "Le rôle des enzymes digestives est de :", options: ["Détruire les bactéries", "Fragmenter les aliments", "Absorber les nutriments"], correct: 1, explanation: "Les enzymes découpent les grosses molécules en nutriments." },
                { question: "La bile est produite par :", options: ["L'estomac", "Le foie", "Le pancréas"], correct: 1, explanation: "Le foie produit la bile qui émulsionne les graisses." },
                { question: "Les villosités intestinales servent à :", options: ["Augmenter la surface d'absorption", "Produire des enzymes", "Stocker les aliments"], correct: 0, explanation: "Les villosités multiplient la surface d'absorption de l'intestin." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 4. PHYSIQUE-CHIMIE (NOUVEAU)
      // ==========================================
      {
        id: "c_phys", name: "⚛️ Physique-Chimie", themes: [
          { id: "t_phys1", name: "Électricité", lessons: [
            { id: "phys_l1", title: "Circuits électriques", objectives: ["Schématiser", "Mesurer", "Calculer"], 
              content: { theory: "Un circuit électrique nécessite un générateur, des récepteurs et des fils conducteurs formant une boucle fermée.", examples: ["Circuit série", "Circuit dérivation", "Loi d'Ohm : U = R×I"], tips: "En série, l'intensité est la même partout. En dérivation, la tension est la même." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Dans un circuit série, si une lampe grille :", options: ["Les autres brillent plus", "Tout s'éteint", "Rien ne change"], correct: 1, explanation: "En série, le circuit est ouvert si un élément est défectueux." },
                { question: "L'unité de la tension électrique est :", options: ["L'ampère (A)", "Le volt (V)", "L'ohm (Ω)"], correct: 1, explanation: "La tension se mesure en volts avec un voltmètre." },
                { question: "La loi d'Ohm s'écrit :", options: ["U = R×I", "P = U×I", "R = U/I"], correct: 0, explanation: "U = R×I relie tension, résistance et intensité." },
                { question: "Un court-circuit se produit quand :", options: ["La tension est trop faible", "Les bornes sont reliées directement", "La résistance est trop forte"], correct: 1, explanation: "Un court-circuit relie directement les bornes sans récepteur." },
                { question: "Pour mesurer une intensité, on utilise :", options: ["Un voltmètre en dérivation", "Un ampèremètre en série", "Un ohmmètre"], correct: 1, explanation: "L'ampèremètre se branche en série pour mesurer l'intensité." }
              ]
            }
          ]},
          { id: "t_phys2", name: "Mécanique", lessons: [
            { id: "phys_l2", title: "Mouvement et vitesse", objectives: ["Calculer", "Qualifier", "Représenter"], 
              content: { theory: "La vitesse moyenne v = d/t (distance divisée par temps). Un mouvement peut être rectiligne, circulaire ou curviligne.", examples: ["v = 60 km/h", "Mouvement uniforme (vitesse constante)"], tips: "Attention aux unités : 1 m/s = 3,6 km/h" }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "La formule de la vitesse moyenne est :", options: ["v = d×t", "v = d/t", "v = t/d"], correct: 1, explanation: "v = distance divisée par le temps." },
                { question: "Un mouvement rectiligne uniforme a :", options: ["Une vitesse constante", "Une vitesse qui augmente", "Une trajectoire courbe"], correct: 0, explanation: "Uniforme = vitesse constante, rectiligne = ligne droite." },
                { question: "Convertir 10 m/s en km/h :", options: ["36 km/h", "10 km/h", "3,6 km/h"], correct: 0, explanation: "10 × 3,6 = 36 km/h." },
                { question: "La trajectoire d'un mouvement circulaire est :", options: ["Une droite", "Un cercle", "Une courbe quelconque"], correct: 1, explanation: "Circulaire = cercle ou arc de cercle." },
                { question: "Si un objet parcourt 100 m en 20 s, sa vitesse est :", options: ["5 m/s", "20 m/s", "100 m/s"], correct: 0, explanation: "v = 100/20 = 5 m/s." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 5. HISTOIRE-GÉOGRAPHIE (NOUVEAU)
      // ==========================================
      {
        id: "c_hist", name: "🌍 Histoire-Géo", themes: [
          { id: "t_hist1", name: "Les grandes découvertes", lessons: [
            { id: "hist_l1", title: "XVe-XVIe siècles", objectives: ["Situer", "Nommer", "Expliquer"], 
              content: { theory: "Les grandes découvertes (XVe-XVIe s.) ont ouvert de nouvelles routes maritimes et fait connaître l'Amérique aux Européens.", examples: ["Christophe Colomb (1492)", "Vasco de Gama (1498)", "Magellan (1519-1522)"], tips: "Les motivations : épices, or, évangélisation, gloire." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Christophe Colomb a découvert l'Amérique en :", options: ["1492", "1515", "1789"], correct: 0, explanation: "1492 : arrivée aux Bahamas." },
                { question: "Vasco de Gama a atteint :", options: ["L'Amérique", "L'Inde", "La Chine"], correct: 1, explanation: "1498 : il ouvre la route des Indes par le cap de Bonne-Espérance." },
                { question: "Le premier tour du monde a été accompli par :", options: ["Colomb", "Magellan", "Cortès"], correct: 1, explanation: "Magellan (1519-1522), même s'il est mort en route." },
                { question: "Les Européens cherchaient surtout :", options: ["De l'or et des épices", "Des esclaves", "Des terres agricoles"], correct: 0, explanation: "Les épices (poivre, cannelle) valaient de l'or." },
                { question: "Le traité de Tordesillas (1494) partageait :", options: ["L'Afrique", "Le Nouveau Monde", "L'Asie"], correct: 1, explanation: "Entre Espagne et Portugal, avec l'accord du Pape." }
              ]
            }
          ]},
          { id: "t_geo1", name: "Population mondiale", lessons: [
            { id: "geo_l1", title: "Répartition et densité", objectives: ["Calculer", "Localiser", "Interpréter"], 
              content: { theory: "La densité = population / superficie. Les hommes se concentrent sur les littoraux, les vallées et les métropoles.", examples: ["Densité France : 117 hab/km²", "Asie du Sud-Est : très dense", "Déserts : vides"], tips: "Les contraintes naturelles (froid, sécheresse) limitent le peuplement." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "La densité se calcule par :", options: ["Population × Superficie", "Population / Superficie", "Superficie / Population"], correct: 1, explanation: "Nombre d'habitants par km²." },
                { question: "Les zones les plus peuplées sont :", options: ["Les déserts", "Les littoraux et vallées", "Les montagnes"], correct: 1, explanation: "Climat doux, ressources, transports." },
                { question: "L'Asie représente environ :", options: ["20% de la population mondiale", "60% de la population mondiale", "80% de la population mondiale"], correct: 1, explanation: "Plus de 4,5 milliards d'habitants sur 7,8 milliards." },
                { question: "Un désert humain est :", options: ["Une zone très peuplée", "Une zone très peu peuplée", "Une ville abandonnée"], correct: 1, explanation: "Ex: Sahara, Antarctique, Sibérie." },
                { question: "L'urbanisation signifie :", options: ["La croissance des villes", "La diminution de la population", "L'agriculture intensive"], correct: 0, explanation: "Augmentation de la population urbaine." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 6. ANGLAIS (NOUVEAU)
      // ==========================================
      {
        id: "c_ang", name: "🇬🇧 Anglais", themes: [
          { id: "t_ang1", name: "Grammar", lessons: [
            { id: "ang_l1", title: "Present Simple vs Continuous", objectives: ["Conjuguer", "Différencier", "Utiliser"], 
              content: { theory: "Present Simple = habitudes, vérités générales. Present Continuous = actions en cours maintenant.", examples: ["I work every day (habitude)", "I am working now (maintenant)"], tips: "Continuous = be + verb-ing. Simple = base verbale (+s à la 3e pers.)." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "She _____ to music every day.", options: ["listen", "listens", "is listening"], correct: 1, explanation: "Habitude → Present Simple, 3e pers. → listens." },
                { question: "They _____ football now.", options: ["play", "plays", "are playing"], correct: 2, explanation: "Action en cours → Present Continuous." },
                { question: "Water _____ at 100°C.", options: ["boil", "boils", "is boiling"], correct: 1, explanation: "Vérité générale → Present Simple." },
                { question: "I _____ a book at the moment.", options: ["read", "reads", "am reading"], correct: 2, explanation: "Action en cours → am reading." },
                { question: "He _____ his homework every evening.", options: ["do", "does", "is doing"], correct: 1, explanation: "Routine → Present Simple, 3e pers. → does." }
              ]
            }
          ]},
          { id: "t_ang2", name: "Vocabulary", lessons: [
            { id: "ang_l2", title: "Daily routine", objectives: ["Mémoriser", "Utiliser", "Traduire"], 
              content: { theory: "Vocabulaire de la routine quotidienne avec les verbes irréguliers courants.", examples: ["wake up (se réveiller)", "get dressed (s'habiller)", "go to bed (se coucher)"], tips: "At + heure précise (at 7am). In + moment (in the morning)." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Se réveiller se dit :", options: ["wake up", "get up", "stand up"], correct: 0, explanation: "Wake up = ouvrir les yeux. Get up = sortir du lit." },
                { question: "I have breakfast _____ the morning.", options: ["at", "in", "on"], correct: 1, explanation: "In the morning/afternoon/evening." },
                { question: "S'habiller se dit :", options: ["dress up", "get dressed", "wear"], correct: 1, explanation: "Get dressed = mettre ses vêtements." },
                { question: "I go to bed _____ 10 pm.", options: ["at", "in", "on"], correct: 0, explanation: "At + heure précise." },
                { question: "Prendre une douche se dit :", options: ["take a bath", "have a shower", "wash up"], correct: 1, explanation: "Have a shower (UK) / take a shower (US)." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 7. MUSIQUE (NOUVEAU)
      // ==========================================
      {
        id: "c_mus", name: "🎵 Musique", themes: [
          { id: "t_mus1", name: "Théorie musicale", lessons: [
            { id: "mus_l1", title: "Les notes et la portée", objectives: ["Lire", "Nommer", "Écrire"], 
              content: { theory: "La portée comporte 5 lignes et 4 interlignes. Les notes : Do Ré Mi Fa Sol La Si. La clé de Sol indique la hauteur des notes.", examples: ["Do (1ère ligne sup.)", "Sol (2ème ligne)", "Clé de Sol"], tips: "Mnémonique lignes : Mi Sol Si Ré Fa. Interlignes : Fa La Do Mi." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Une portée comporte :", options: ["4 lignes", "5 lignes", "6 lignes"], correct: 1, explanation: "5 lignes et 4 interlignes." },
                { question: "Il y a _____ notes dans la gamme :", options: ["5", "7", "12"], correct: 1, explanation: "Do Ré Mi Fa Sol La Si (7 notes)." },
                { question: "La clé de Sol se place sur :", options: ["La 1ère ligne", "La 2ème ligne", "La 3ème ligne"], correct: 1, explanation: "La 2ème ligne de la portée = Sol." },
                { question: "La note sur la 1ère ligne (en partant du bas) est :", options: ["Mi", "Sol", "Do"], correct: 0, explanation: "Mi Sol Si Ré Fa pour les lignes." },
                { question: "Une noire dure :", options: ["1 temps", "2 temps", "1/2 temps"], correct: 0, explanation: "La noire = 1 temps dans une mesure à 4/4." }
              ]
            }
          ]}
        ]
      },

      // ==========================================
      // 8. ARTS PLASTIQUES (NOUVEAU)
      // ==========================================
      {
        id: "c_art", name: "🎨 Arts Plastiques", themes: [
          { id: "t_art1", name: "Couleurs et mélanges", lessons: [
            { id: "art_l1", title: "Cercle chromatique", objectives: ["Identifier", "Mélanger", "Classer"], 
              content: { theory: "Couleurs primaires : Cyan, Magenta, Jaune (ou Rouge, Bleu, Jaune en peinture). Secondaires = mélange de 2 primaires. Tertiaires = primaire + secondaire.", examples: ["Rouge + Jaune = Orange", "Bleu + Jaune = Vert", "Rouge + Bleu = Violet"], tips: "Couleurs chaudes : rouge, orange, jaune. Froides : bleu, vert, violet." }, 
              quiz: { count: 5, passingScore: 4 },
              questions: [
                { question: "Les couleurs primaires sont :", options: ["Orange, Vert, Violet", "Rouge, Bleu, Jaune", "Noir, Blanc, Gris"], correct: 1, explanation: "On ne peut pas les obtenir par mélange." },
                { question: "Rouge + Jaune donne :", options: ["Vert", "Orange", "Violet"], correct: 1, explanation: "Orange est une couleur secondaire." },
                { question: "Une couleur tertiaire est :", options: ["Un mélange de 2 primaires", "Un mélange primaire + secondaire", "Une couleur pure"], correct: 1, explanation: "Ex: Rouge-Orange, Bleu-Vert." },
                { question: "Le vert est obtenu par :", options: ["Rouge + Bleu", "Bleu + Jaune", "Jaune + Rouge"], correct: 1, explanation: "Bleu + Jaune = Vert." },
                { question: "Les couleurs chaudes évoquent :", options: ["Le froid, la mer", "Le soleil, le feu", "La nuit"], correct: 1, explanation: "Rouge, orange, jaune = chaleur, énergie." }
              ]
            }
          ]}
        ]
      }
    ] // ← Fin du tableau competencies
  }; // ← Fin de l'objet DATA

  // 🧠 ÉTAT DE L'APPLICATION
  let state = {
    currentClass: null, currentCompId: null, currentThemeId: null, currentLesson: null, currentSubject: null,
    quiz: { questions: [], currentQ: 0, score: 0 },
    progress: {},
    // 🎮 Gamification
    timer: null, timeLeft: 30, combo: 0, maxCombo: 0,
    currentProfile: 'INVITÉ'
  };

  // 🔊 Audio Context (sons)
  let audioCtx = null;
  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }
  function playSound(type) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    if (type === 'correct') { osc.frequency.value = 523; gain.gain.value = 0.1; osc.type = 'sine'; }
    else if (type === 'wrong') { osc.frequency.value = 196; gain.gain.value = 0.1; osc.type = 'sawtooth'; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.15);
  }

  // 👤 Gestion des profils
  function initProfile() {
    const input = document.getElementById('profile-input');
    const btn = document.getElementById('btn-save-profile');
    const display = document.getElementById('current-profile-display');
    if (!input || !btn || !display) return;

    state.currentProfile = localStorage.getItem('bepc_profile') || 'INVITÉ';
    input.value = state.currentProfile === 'INVITÉ' ? '' : state.currentProfile;
    display.textContent = `Connecté : ${state.currentProfile}`;
    state.progress = JSON.parse(localStorage.getItem(`bepc_progress_${state.currentProfile}`) || '{}');

    btn.addEventListener('click', () => {
      const code = input.value.trim().toUpperCase();
      if (!code) return;
      state.currentProfile = code;
      localStorage.setItem('bepc_profile', code);
      display.textContent = `Connecté : ${code}`;
      state.progress = JSON.parse(localStorage.getItem(`bepc_progress_${code}`) || '{}');
      alert(`✅ Profil ${code} activé !`);
    });
  }

  // 🔄 Navigation
  function showScreen(id) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function renderGrid(containerId, items, action, valKey) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    if (!items || items.length === 0) { 
      el.innerHTML = '<p style="text-align:center;color:#aaa;">Aucune donnée.</p>'; 
      return; 
    }
    items.forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.name || item.title;
      btn.dataset.action = action;
      btn.dataset[valKey] = item.id;
      if (state.progress[item.id]?.completed) { 
        btn.style.borderColor = 'var(--success)'; 
        btn.textContent = '✅ ' + btn.textContent; 
      }
      el.appendChild(btn);
    });
  }

  // 🎯 Gestionnaire de clics
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const act = btn.dataset.action;
    const val = btn.dataset.value || btn.dataset.id || btn.dataset.cible;

    switch(act) {
      case 'select-class':
        state.currentClass = val;
        document.getElementById('lbl-class').textContent = val;
        showScreen('sec-matieres');
        break;
        
      case 'select-subject':
        state.currentSubject = val;
        let competenciesToLoad = [];
        
        // Sélectionne la matière correspondante dans DATA
        switch(val) {
          case 'maths':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c1');
            break;
          case 'francais':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_fr');
            break;
          case 'svt':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_svt');
            break;
          case 'physique':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_phys');
            break;
          case 'histoire':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_hist');
            break;
          case 'anglais':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_ang');
            break;
          case 'musique':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_mus');
            break;
          case 'arts':
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c_art');
            break;
          default:
            competenciesToLoad = DATA.competencies.filter(c => c.id === 'c1');
        }
        
        renderGrid('grid-comp', competenciesToLoad, 'select-comp', 'id');
        showScreen('sec-competences');
        break;
        
      case 'select-comp':
        state.currentCompId = val;
        const comp = DATA.competencies.find(c => c.id === val);
        if (comp) renderGrid('grid-theme', comp.themes, 'select-theme', 'id');
        showScreen('sec-themes');
        break;
      case 'select-theme':
        state.currentThemeId = val;
        const comp2 = DATA.competencies.find(c => c.id === state.currentCompId);
        const theme = comp2?.themes.find(t => t.id === val);
        if (theme) renderGrid('grid-lesson', theme.lessons, 'select-lesson', 'id');
        showScreen('sec-lecons');
        break;
      case 'select-lesson':
        const c3 = DATA.competencies.find(c => c.id === state.currentCompId);
        const t3 = c3?.themes.find(t => t.id === state.currentThemeId);
        state.currentLesson = t3?.lessons.find(l => l.id === val);
        if (state.currentLesson) { loadCours(); showScreen('sec-cours'); }
        break;
      case 'start-quiz':
        if (state.currentLesson) { initAudio(); initQuiz(); showScreen('sec-quiz'); }
        break;
      case 'next-question':
        state.quiz.currentQ++;
        renderQuestion();
        break;
      case 'retry-quiz':
        initQuiz();
        showScreen('sec-quiz');
        break;
      case 'show-dashboard':
        showDashboard();
        break;
      case 'go-back':
        showScreen(btn.dataset.cible);
        break;
    }
  });

  // 📖 Cours
  function loadCours() {
    const l = state.currentLesson;
    if (!l) return;
    document.getElementById('cours-title').textContent = l.title;
    document.getElementById('cours-body').innerHTML = `
      <div class="cours-box"><h3>🎯 Objectifs</h3><ul>${l.objectives.map(o=>`<li>${o}</li>`).join('')}</ul></div>
      <div class="cours-box"><h3>📖 Théorie</h3><p>${l.content.theory}</p></div>
      <div class="cours-box"><h3>📝 Exemples</h3><ul>${l.content.examples.map(e=>`<li>${e}</li>`).join('')}</ul></div>
      <div class="cours-box" style="border-color:var(--warning);"><h3>💡 Astuce</h3><p>${l.content.tips}</p></div>
    `;
  }

  // 🧠 Quiz
  function initQuiz() {
    const lesson = state.currentLesson;
    if (!lesson) return;
    state.quiz.currentQ = 0; state.quiz.score = 0; state.combo = 0;
    state.quiz.questions = (lesson.questions?.length) ? lesson.questions : 
      Array.from({length: lesson.quiz.count || 5}, (_, i) => ({
        question: `Q${i+1} : ${lesson.title}`,
        options: ["A", "B", "C"], correct: 0, explanation: "..."
      }));
    renderQuestion();
  }

  function updateTimerUI() {
    const el = document.getElementById('q-counter');
    if (el) el.textContent = `⏱️ ${state.timeLeft}s | 🔥 ${state.combo}`;
  }

  function renderQuestion() {
    const i = state.quiz.currentQ;
    const qs = state.quiz.questions;
    if (!qs || i >= qs.length) { showResult(); return; }

    clearInterval(state.timer);
    state.timeLeft = 30;
    updateTimerUI();
    state.timer = setInterval(() => {
      state.timeLeft--;
      updateTimerUI();
      if (state.timeLeft <= 0) {
        clearInterval(state.timer);
        checkAnswer(-1, qs[i].correct, null, []);
      }
    }, 1000);

    const q = qs[i];
    document.getElementById('q-text').textContent = q.question;
    document.getElementById('q-progress').style.width = `${(i/qs.length)*100}%`;
    document.getElementById('feedback-box').className = 'feedback hidden';
    document.getElementById('btn-next').classList.add('hidden');

    const container = document.getElementById('q-options');
    container.innerHTML = '';
    const buttons = [];
    q.options.forEach((opt, idx) => {
      const b = document.createElement('button');
      b.className = 'quiz-btn'; b.textContent = opt;
      b.onclick = () => checkAnswer(idx, q.correct, b, buttons);
      container.appendChild(b); buttons.push(b);
    });
  }

  function checkAnswer(selectedIdx, correctIdx, btnElement, allButtons) {
    clearInterval(state.timer);
    allButtons.forEach(b => { if (b) b.disabled = true; });
    
    const isCorrect = selectedIdx === correctIdx;
    if (isCorrect) { 
      state.quiz.score++; state.combo++; 
      if (state.combo > state.maxCombo) state.maxCombo = state.combo;
      playSound('correct');
      if (btnElement) btnElement.classList.add('correct'); 
    } else { 
      state.combo = 0; playSound('wrong');
      if (btnElement) btnElement.classList.add('incorrect');
      if (allButtons[correctIdx]) allButtons[correctIdx].classList.add('correct');
    }
    
    const fb = document.getElementById('feedback-box');
    fb.textContent = isCorrect ? `✅ Excellent ! (Combo x${state.combo})` : "❌ Regarde la bonne réponse en vert.";
    fb.className = isCorrect ? 'feedback fb-ok' : 'feedback fb-ko';
    fb.classList.remove('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
  }

  function showResult() {
    const total = state.quiz.questions.length;
    const score = state.quiz.score;
    const pass = score >= (state.currentLesson?.quiz?.passingScore || 3);
    const pct = Math.round((score/total)*100);

    if (state.currentLesson?.id) {
      state.progress[state.currentLesson.id] = { completed: pass, score: pct, date: new Date().toISOString(), attempts: (state.progress[state.currentLesson.id]?.attempts || 0) + 1 };
      localStorage.setItem(`bepc_progress_${state.currentProfile}`, JSON.stringify(state.progress));
    }

    document.getElementById('result-content').innerHTML = `
      <p>Score : <strong>${score} / ${total}</strong></p>
      <p style="font-size:3rem; margin:1rem 0;">${pct}%</p>
      <p style="color:${pass?'var(--success)':'var(--error)'}; font-weight:bold;">
        ${pass?'🎉 Leçon validée !':'💪 Continue tes efforts'}
      </p>
    `;
    document.getElementById('btn-retry').classList.toggle('hidden', pass);
    showScreen('sec-result');
  }

  // 📊 Dashboard
  const BADGES = [
    { id: "b1", name: "Premier pas", icon: "🌟", desc: "1 leçon validée", condition: (p) => Object.keys(p).length >= 1 },
    { id: "b2", name: "Sérieux", icon: "📚", desc: "5 leçons", condition: (p) => Object.keys(p).length >= 5 },
    { id: "b3", name: "Expert", icon: "🎯", desc: "Moyenne > 80%", condition: (p, avg) => avg >= 80 },
    { id: "b4", name: "Marathonien", icon: "🏃", desc: "10 leçons", condition: (p) => Object.keys(p).length >= 10 },
    { id: "b5", name: "Champion", icon: "👑", desc: "Thème complet", condition: (p) => Object.values(p).filter(v => v?.completed).length >= 3 }
  ];

  function showDashboard() { showScreen('sec-dashboard'); updateDashboard(); }

  function updateDashboard() {
    const progress = state.progress;
    const completed = Object.values(progress).filter(v => v?.completed).length;
    document.getElementById('dash-total-lessons').textContent = completed;
    
    const scores = Object.values(progress).filter(v => typeof v === 'object' && v.score).map(v => v.score);
    const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
    document.getElementById('dash-avg-score').textContent = `${avg}%`;
    
    const unlocked = BADGES.filter(b => b.condition(progress, avg)).length;
    document.getElementById('dash-badges').textContent = `${unlocked}/${BADGES.length}`;
    document.getElementById('dash-streak').textContent = calculateStreak(progress);
    
    const badgesGrid = document.getElementById('dash-badges-grid');
    badgesGrid.innerHTML = '';
    BADGES.forEach(badge => {
      const div = document.createElement('div');
      div.className = `badge-card ${badge.condition(progress, avg) ? 'unlocked' : 'locked'}`;
      div.innerHTML = `<span class="badge-icon">${badge.icon}</span><span class="badge-name">${badge.name}</span><span class="badge-desc">${badge.desc}</span>`;
      badgesGrid.appendChild(div);
    });
    
    const historyList = document.getElementById('dash-history');
    historyList.innerHTML = '';
    const recent = Object.entries(progress).filter(([_,v]) => v?.date).sort((a,b) => new Date(b[1].date) - new Date(a[1].date)).slice(0,5);
    if (!recent.length) historyList.innerHTML = '<p style="color:var(--text-muted);text-align:center">Aucune activité</p>';
    else recent.forEach(([id, data]) => {
      const lesson = findLessonById(id);
      const div = document.createElement('div'); div.className = 'history-item';
      div.innerHTML = `<span class="h-title">${lesson?.title || id}</span><span class="h-score">${data.score}%</span><span class="h-date">${new Date(data.date).toLocaleDateString('fr-FR')}</span>`;
      historyList.appendChild(div);
    });
    
    const themesProgress = document.getElementById('dash-themes-progress');
    themesProgress.innerHTML = '';
    DATA.competencies.forEach(comp => {
      comp.themes.forEach(theme => {
        const total = theme.lessons.length, done = theme.lessons.filter(l => progress[l.id]?.completed).length;
        const percent = total ? Math.round((done/total)*100) : 0;
        const div = document.createElement('div'); div.className = 'theme-progress-item';
        div.innerHTML = `<span class="tp-name">${theme.name}</span><div class="tp-bar"><div class="tp-fill" style="width:${percent}%"></div></div><span class="tp-percent">${percent}%</span>`;
        themesProgress.appendChild(div);
      });
    });
  }

  function calculateStreak(progress) {
    let streak = 0; const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today); date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString('fr-FR');
      const has = Object.values(progress).some(v => v?.date && new Date(v.date).toLocaleDateString('fr-FR') === dateStr);
      if (has) streak++; else if (streak > 0) break;
    }
    return streak;
  }

  function findLessonById(id) {
    for (const comp of DATA.competencies) {
      for (const theme of comp.themes) {
        const l = theme.lessons.find(x => x.id === id);
        if (l) return l;
      }
    }
    return null;
  }

  // 🖨️ Export PDF (depuis le dashboard)
  const btnExport = document.getElementById('btn-export-pdf');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      document.getElementById('print-profile').textContent = state.currentProfile;
      document.getElementById('print-date').textContent = new Date().toLocaleDateString('fr-FR');
      document.getElementById('print-stats').innerHTML = `
        <div><strong>${document.getElementById('dash-total-lessons').textContent}</strong><br>Leçons</div>
        <div><strong>${document.getElementById('dash-avg-score').textContent}</strong><br>Score moy.</div>
        <div><strong>${document.getElementById('dash-badges').textContent}</strong><br>Badges</div>`;
      document.getElementById('print-themes').innerHTML = document.getElementById('dash-themes-progress').innerHTML;
      const area = document.getElementById('print-area');
      area.style.display = 'block';
      setTimeout(() => { window.print(); area.style.display = 'none'; }, 100);
    });
  }

  // 📤 Export vers Google Sheets (DÉSACTIVÉ pour l'instant)
  const GAS_URL = "DISABLED";

  const btnExportClass = document.getElementById('btn-export-class');
  if (btnExportClass) {
    btnExportClass.addEventListener('click', async function() {
      const btn = this;
      const originalText = btn.textContent;
      btn.textContent = "⏳ Envoi au professeur...";
      btn.disabled = true;

      const exportData = {
        profile: state.currentProfile,
        date: new Date().toISOString(),
        progress: state.progress,
        summary: {
          lessonsCompleted: Object.values(state.progress).filter(v => v?.completed).length,
          avgScore: (() => {
            const scores = Object.values(state.progress).filter(v => typeof v === 'object' && v.score).map(v => v.score);
            return scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
          })(),
          badges: BADGES.filter(b => b.condition(state.progress)).length
        }
      };

      try {
        if (GAS_URL.includes("COLLE_TON_URL") || GAS_URL === "DISABLED") {
          throw new Error("Export cloud désactivé temporairement");
        }
        
        await fetch(GAS_URL, {
          method: 'POST',
          body: JSON.stringify(exportData),
          headers: { 'Content-Type': 'text/plain' }
        });
        alert("✅ Données envoyées avec succès !");
        
      } catch (err) {
        console.warn("⚠️ Fallback local:", err);
        alert("⚠️ Mode hors-ligne : téléchargement du fichier JSON...");
        downloadJSONFallback(exportData);
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  function downloadJSONFallback(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BEPC_${data.profile}_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // 🚀 Initialisation
  initProfile();
});

// AegisArena FIFA 2026 Localization Tables

export const LOCALIZATION = {
  en: {
    phoneTitle: "🏆 AegisArena Fan Assist",
    chipFastest: "🚪 Fastest Gate?",
    chipWheelchair: "♿ Wheelchair Access",
    chipFood: "🥗 Vegan & Halal food?",
    chipEco: "♻️ Sorting Trash",
    lblStartingGate: "Select Your Entry Gate",
    optGateA: "Gate A (North Entrance)",
    optGateB: "Gate B (East Entrance)",
    optGateC: "Gate C (South Entrance)",
    lblTargetSection: "Select Your Seating Section",
    optSec102: "Section 102 (Family & Premium Grill)",
    optSec112: "Section 112 (Global Flavors Halal Zone)",
    optSec124: "Section 124 (Green Grass Eats Vegan Zone)",
    optSec135: "Section 135 (Classic Concessions)",
    lblAccessibleRoute: "♿ Step-free / Elevator Routing only",
    fanTransitTitle: "Live Commute board",
    lblRefreshText: "Sync",
    fanTransitAiTitle: "Transit AI Recommendation",
    transitAiHint: "Train transit is currently the fastest option (8m intervals). Boarding lines at Gate A are minimal; avoid rideshares at Lot G which are experiencing high surcharges and 25m delays.",
    lblEcoScore: "🏆 My Eco Badges",
    lblEcoInstructions: "Tap a waste item, then select the correct bin to sort it properly! Score points for tournament rewards!",
    txtBinCompost: "Compost",
    txtBinRecycle: "Recycle",
    txtBinLandfill: "Landfill",
    txtTabBuddy: "AI Buddy",
    txtTabWayfinder: "Wayfinder",
    txtTabTransit: "Transit",
    txtTabEco: "Eco-Sorter",
    txtTabSnap: "Snap & Save",
    
    // Snap & Save translations
    lblResponsibilityScore: "Responsibility Score",
    lblPresaleNotice: "⚠️ Note: Score below 60 delays your 2026 World Cup ticket booking access by 24 hours.",
    lblCamTitle: "📸 Clean-Choice Camera",
    lblVoucherDesc: "Scan at any MetLife stadium food stall for your next order.",
    lblLeaderboardTitle: "Group Section Leaderboard",
    btnCamBefore: "Step 1: Scan Before",
    btnCamAfter: "Step 2: Scan After",
    camFeedReady: "Camera Ready",
    camFeedRecordingBefore: "Recording 'BEFORE' video...",
    camFeedRecordingAfter: "Recording 'AFTER' video...",
    camFeedBeforeDone: "Before scan complete! Seating is dirty.",
    camFeedAfterDone: "Verification complete! Seating area clean!",
    camGuidanceReady: "Scan your seating zone before kickoff. Messy zone will be recorded.",
    camGuidanceDirty: "Great. Now enjoy the match! Clean your trash and scan AFTER the match to claim perks.",
    camGuidanceClean: "🎉 Clean Zone Verified! +50 Eco-Points and +10 Responsibility Score awarded!",
    leaderboardSections: [
      { name: "Section 102 (Family Zone)", pts: "12,480 pts", div: "92% clean" },
      { name: "Section 112 (Global Fan Club)", pts: "10,120 pts", div: "84% clean" },
      { name: "Section 124 (Green Supporters)", pts: "9,850 pts", div: "81% clean" },
      { name: "Section 135 (Classic Concourse)", pts: "5,200 pts", div: "52% clean" }
    ],

    // VLM translations
    lblVlmTitle: "👁️ Vision-First Multimodal Escort",
    lblVlmDesc: "Upload photos of your ticket and immediate surroundings (e.g. a specific pillar/sign) to calculate a localized step-free route.",
    btnVlmRoute: "Compute VLM Visual Navigation",
    txtVlmTicketStatus: "Upload Ticket Photo",
    txtVlmSceneStatus: "Upload Surroundings",
    txtVlmTicketDone: "Ticket Loaded ✓",
    txtVlmSceneDone: "Surroundings Loaded ✓",
    
    // Transit Translation Mapping
    transitNames: {
      train: "MetLife Express (NYC Rail)",
      shuttle: "Parking Shuttle (Lots A-D)",
      bus: "Regional Bus (Rutherford)",
      uber: "Rideshare Pickup (Lot G)"
    },
    transitFreqs: {
      train: "Every 8 mins",
      shuttle: "Every 5 mins",
      bus: "Every 15 mins",
      uber: "On-demand"
    },
    crowdLabels: {
      low: "LOW CROWD",
      mod: "MOD CROWD",
      high: "HIGH CROWD"
    },
    
    // Eco Game Translations
    ecoItemCardReady: "Ready to play? Click on the card above and select a bin to sort it. Earn green badges for World Cup souvenirs!",
    ecoCorrect: "✨ Correct (+15 pts)!",
    ecoIncorrect: "❌ Oops (-5 pts). Try again!",
    ecoHint: "AI Hint: Consider what raw components are in a ",
    ecoToastCorrect: "Great sort! Eco Badges updated.",
    ecoToastIncorrect: "Incorrect sort bin. Please review the item material.",
    ecoItems: {
      "Aluminium Soda Can": {
        name: "Aluminium Soda Can",
        info: "Metal cans are infinitely recyclable. Sorting it correctly saves 95% of the energy needed to make a new can from scratch."
      },
      "Sausage Food Scraps": {
        name: "Sausage Food Scraps",
        info: "Organic food waste decomposes into nutrient-rich compost, avoiding methane release in landfills."
      },
      "Soiled Hotdog Cardboard Box": {
        name: "Soiled Hotdog Cardboard Box",
        info: "World Cup food cardboard packaging is coated with organic starch, making it 100% compostable even with grease stains."
      },
      "Plastic Beer Cup": {
        name: "Plastic Beer Cup",
        info: "This tournament cup is made from 100% recycled PET. Place it in recycle to keep it in the circular economy loop."
      },
      "Plastic Wrap & Cutlery": {
        name: "Plastic Wrap & Cutlery",
        info: "Mixed multi-layer plastic wraps and contaminated single-use plastics are currently non-recyclable. Landfill bin is correct."
      },
      "Crinkly Potato Chip Bag": {
        name: "Crinkly Potato Chip Bag",
        info: "Mylar potato chip packaging contains metal and plastic layers bonded together, which cannot be separated for recycling."
      }
    },
    
    // Wayfinding Instructions
    wayfinderDefault: "Select a gate and section to compute AI recommended wayfinding.",
    walkTimeLabel: "⏱️ Est. Walk Time: {time} mins",
    accessDirections: "♿ **Accessibility Route Active**: Using step-free concourse paths. Please take Elevator B behind Section 110 for floor level access. Access helper staff are stationed at Zone 4 for assistance.",
    
    // Directions templates
    directions: {
      A: {
        intro: "Enter through **Gate A (North)**. Head straight down the concourse toward Section 100. ",
        "102": "Section 102 is immediately on your right next to the Arena Grill.",
        "112": "Take a left and walk past the Section 106 merchandise counter. Section 112 is on your left.",
        "124": "Walk left past Section 108. Continue around the bend. Section 124 is located opposite 'Green Grass Eats'.",
        "135": "Walk right past Section 130. Continue for 90 meters. Section 135 is directly ahead."
      },
      B: {
        intro: "Enter through **Gate B (East)**. Turn left onto the Concourse loop. ",
        "102": "Follow the corridor clockwise past Section 106. Section 102 is on the left.",
        "112": "Section 112 is 30 meters ahead on the right.",
        "124": "Walk left around the bend to Section 120. Turn right. Section 124 is ahead.",
        "135": "Walk right around the bend past Section 130. Section 135 is near Gate B exit."
      },
      C: {
        intro: "Enter through **Gate C (South)**. ",
        "102": "Walk right past Section 138, then continue past Gate A. Section 102 is ahead.",
        "112": "Walk left past Section 130, continuing around Section 120. Section 112 is ahead.",
        "124": "Walk left past Section 128. Section 124 is next to the elevator bank.",
        "135": "Section 135 is directly on your right."
      }
    }
  },
  es: {
    phoneTitle: "🏆 Asistente AegisArena",
    chipFastest: "🚪 ¿Puerta más rápida?",
    chipWheelchair: "♿ Acceso en silla de ruedas",
    chipFood: "🥗 ¿Comida Vegana y Halal?",
    chipEco: "♻️ Clasificación de basura",
    lblStartingGate: "Seleccione su Puerta de Entrada",
    optGateA: "Puerta A (Entrada Norte)",
    optGateB: "Puerta B (Entrada Este)",
    optGateC: "Puerta C (Entrada Sur)",
    lblTargetSection: "Seleccione su Sección de Asiento",
    optSec102: "Sección 102 (Familiar y Parrilla Premium)",
    optSec112: "Sección 112 (Zona Halal - Sabores del Mundo)",
    optSec124: "Sección 124 (Zona Vegana - Green Grass Eats)",
    optSec135: "Sección 135 (Concesiones Clásicas)",
    lblAccessibleRoute: "♿ Solo ruta sin escalones / Ascensor",
    fanTransitTitle: "Panel de Transportes en Vivo",
    lblRefreshText: "Sincronizar",
    fanTransitAiTitle: "Recomendación de Tránsito por IA",
    transitAiHint: "El tren exprés es la opción más rápida actualmente (intervalos de 8 min). Las filas de abordaje en la Puerta A son mínimas; evite Uber en el Lote G debido a tarifas dinámicas y retrasos de 25 min.",
    lblEcoScore: "🏆 Mis Insignias Verdes",
    lblEcoInstructions: "¡Toque un residuo, luego seleccione el bote correcto para clasificarlo! ¡Sume puntos para premios del torneo!",
    txtBinCompost: "Composta",
    txtBinRecycle: "Reciclar",
    txtBinLandfill: "Basura común",
    txtTabBuddy: "Asistente IA",
    txtTabWayfinder: "Navegación",
    txtTabTransit: "Transportes",
    txtTabEco: "Clasificador Eco",
    txtTabSnap: "Foto y Ahorro",
    
    // Snap & Save translations
    lblResponsibilityScore: "Puntuación de Responsabilidad",
    lblPresaleNotice: "⚠️ Nota: Una puntuación menor a 60 retrasa su acceso a la preventa de boletos del Mundial por 24 horas.",
    lblCamTitle: "📸 Cámara Eco-Choice",
    lblVoucherDesc: "Escanee en cualquier puesto de comida del estadio MetLife para su próximo pedido.",
    lblLeaderboardTitle: "Clasificación de Secciones",
    btnCamBefore: "Paso 1: Foto Antes",
    btnCamAfter: "Paso 2: Foto Después",
    camFeedReady: "Cámara lista",
    camFeedRecordingBefore: "Grabando video 'ANTES'...",
    camFeedRecordingAfter: "Grabando video 'DESPUÉS'...",
    camFeedBeforeDone: "¡Escaneo inicial listo! El área está sucia.",
    camFeedAfterDone: "¡Verificación lista! Área de asientos limpia.",
    camGuidanceReady: "Escanee su zona de asientos antes del partido. Se registrará la suciedad inicial.",
    camGuidanceDirty: "Excelente. ¡Disfrute el partido! Limpie su basura y escanee DESPUÉS del partido para recibir premios.",
    camGuidanceClean: "🎉 ¡Área limpia verificada! Se otorgan +50 Puntos Eco y +10 de Responsabilidad.",
    leaderboardSections: [
      { name: "Sección 102 (Zona Familiar)", pts: "12,480 pts", div: "92% limpia" },
      { name: "Sección 112 (Club Global de Fans)", pts: "10,120 pts", div: "84% limpia" },
      { name: "Sección 124 (Seguidores Verdes)", pts: "9,850 pts", div: "81% limpia" },
      { name: "Sección 135 (Pasillo Clásico)", pts: "5,200 pts", div: "52% limpia" }
    ],

    // VLM translations
    lblVlmTitle: "👁️ Acompañamiento Multimodal de Visión",
    lblVlmDesc: "Suba fotos de su boleto y su entorno inmediato (p. ej., un pilar o señal específico) para calcular una ruta sin escalones.",
    btnVlmRoute: "Calcular Navegación Visual VLM",
    txtVlmTicketStatus: "Subir Foto Boleto",
    txtVlmSceneStatus: "Subir Entorno",
    txtVlmTicketDone: "Boleto Cargado ✓",
    txtVlmSceneDone: "Entorno Cargado ✓",
    
    transitNames: {
      train: "MetLife Express (Línea NYC)",
      shuttle: "Enlace de Estacionamiento (Lotes A-D)",
      bus: "Autobús Regional (Rutherford)",
      uber: "Zona Rideshare / Uber (Lote G)"
    },
    transitFreqs: {
      train: "Cada 8 min",
      shuttle: "Cada 5 min",
      bus: "Cada 15 min",
      uber: "Bajo demanda"
    },
    crowdLabels: {
      low: "Poco congestionado",
      mod: "Moderadadamente lleno",
      high: "Muy congestionado"
    },
    
    ecoItemCardReady: "¿Listo para jugar? Haga clic en la tarjeta de arriba y elija un bote. ¡Gane insignias verdes por recuerdos de la Copa Mundial!",
    ecoCorrect: "✨ ¡Correcto (+15 pts)!",
    ecoIncorrect: "❌ ¡Oops (-5 pts). Intente de nuevo!",
    ecoHint: "Consejo de IA: Piense de qué materiales está hecho el ",
    ecoToastCorrect: "¡Excelente clasificación! Insignias Eco actualizadas.",
    ecoToastIncorrect: "Contenedor incorrecto. Por favor, revise el material del residuo.",
    ecoItems: {
      "Aluminium Soda Can": {
        name: "Lata de refresco de aluminio",
        info: "Las latas de metal se pueden reciclar infinitamente. Clasificarlas correctamente ahorra el 95% de la energía necesaria para hacer una lata nueva."
      },
      "Sausage Food Scraps": {
        name: "Restos de comida de salchicha",
        info: "Los desechos orgánicos de comida se transforman en composta rica en nutrientes, evitando la generación de gas metano en basureros."
      },
      "Soiled Hotdog Cardboard Box": {
        name: "Caja de cartón sucia de hotdog",
        info: "El empaque de cartón del torneo está recubierto con almidón orgánico, por lo que es 100% compostable incluso con manchas de grasa."
      },
      "Plastic Beer Cup": {
        name: "Vaso de plástico para cerveza",
        info: "Este vaso oficial está hecho con PET 100% reciclado. Colóquelo en el reciclaje para mantenerlo dentro de la economía circular."
      },
      "Plastic Wrap & Cutlery": {
        name: "Envolturas y cubiertos de plástico",
        info: "Los plásticos de envolturas mixtas y cubiertos de un solo uso no son reciclables actualmente. Deposítelos en basura común."
      },
      "Crinkly Potato Chip Bag": {
        name: "Bolsa metálica de papas fritas",
        info: "Las envolturas de papas contienen capas de plástico y metal fundidas que no pueden separarse para reciclaje."
      }
    },
    
    wayfinderDefault: "Seleccione una puerta y sección para calcular la ruta recomendada por la IA.",
    walkTimeLabel: "⏱️ Tiempo estimado: {time} min",
    accessDirections: "♿ **Ruta accesible activa**: Usando pasillos sin escalones. Por favor, tome el Ascensor B detrás de la Sección 110. Hay personal de asistencia en la Zona 4.",
    
    directions: {
      A: {
        intro: "Ingrese por la **Puerta A (Norte)**. Diríjase recto por el pasillo hacia la Sección 100. ",
        "102": "La Sección 102 está inmediatamente a su derecha junto a Arena Grill.",
        "112": "Gire a la izquierda y pase el mostrador de mercancías de la Sección 106. La Sección 112 está a su izquierda.",
        "124": "Camine a la izquierda pasando la Sección 108. Continúe por la curva. La Sección 124 se encuentra frente a 'Green Grass Eats'.",
        "135": "Camine a la derecha pasando la Sección 130. Continúe durante 90 metros. La Sección 135 está directamente al frente."
      },
      B: {
        intro: "Ingrese por la **Puerta B (Este)**. Gire a la izquierda en el pasillo circular. ",
        "102": "Siga el pasillo en sentido horario pasando la Sección 106. La Sección 102 está a la izquierda.",
        "112": "La Sección 112 está 30 metros adelante a la derecha.",
        "124": "Camine a la izquierda pasando por la Sección 120. Gire a la derecha. La Sección 124 está al frente.",
        "135": "Camine a la derecha pasando la Sección 130. La Sección 135 está cerca de la salida de la Puerta B."
      },
      C: {
        intro: "Ingrese por la **Puerta C (Sur)**. ",
        "102": "Camine a la derecha pasando la Sección 138, luego pase la Puerta A. La Sección 102 está al frente.",
        "112": "Camine a la izquierda pasando la Sección 130, continúe rodeando la Sección 120. La Sección 112 está adelante.",
        "124": "Camine a la izquierda pasando la Sección 128. La Sección 124 está junto a los ascensores.",
        "135": "La Sección 135 está directamente a su derecha."
      }
    }
  },
  fr: {
    phoneTitle: "🏆 Assistant AegisArena",
    chipFastest: "🚪 Porte la plus rapide ?",
    chipWheelchair: "♿ Accès handicapé",
    chipFood: "🥗 Plats Végétaliens & Halal ?",
    chipEco: "♻️ Tri des déchets",
    lblStartingGate: "Sélectionnez votre Porte d'Entrée",
    optGateA: "Porte A (Entrée Nord)",
    optGateB: "Porte B (Entrée Est)",
    optGateC: "Porte C (Entrée Sud)",
    lblTargetSection: "Sélectionnez votre Section de Siège",
    optSec102: "Section 102 (Grillade Premium & Famille)",
    optSec112: "Section 112 (Zone Halal - Saveurs du Monde)",
    optSec124: "Section 124 (Zone Végétalienne - Green Grass)",
    optSec135: "Section 135 (Restauration Classique)",
    lblAccessibleRoute: "♿ Itinéraire sans escalier / Ascenseur uniquement",
    fanTransitTitle: "Tableau de Transports en Direct",
    lblRefreshText: "Actualiser",
    fanTransitAiTitle: "Recommandation de Transport par IA",
    transitAiHint: "Le train express est l'option la plus rapide (toutes les 8 min). Les files d'attente à la Porte A sont minimes ; évitez les VTC au Parking G (tarifs élevés et 25 min d'attente).",
    lblEcoScore: "🏆 Mes Badges Éco",
    lblEcoInstructions: "Appuyez sur un déchet, puis sélectionnez la bonne poubelle pour le trier ! Marquez des points pour gagner des cadeaux !",
    txtBinCompost: "Compost",
    txtBinRecycle: "Recycler",
    txtBinLandfill: "Décharge",
    txtTabBuddy: "Ami IA",
    txtTabWayfinder: "Itinéraire",
    txtTabTransit: "Transports",
    txtTabEco: "Tri Éco",
    txtTabSnap: "Clic & Éco",
    
    // Snap & Save translations
    lblResponsibilityScore: "Score de Responsabilité",
    lblPresaleNotice: "⚠️ Note : Un score inférieur à 60 retarde votre accès à la billetterie de la Coupe du Monde de 24h.",
    lblCamTitle: "📸 Caméra Clean-Choice",
    lblVoucherDesc: "Scannez dans n'importe quel stand de nourriture du stade MetLife pour votre prochaine commande.",
    lblLeaderboardTitle: "Classement des Sections",
    btnCamBefore: "Étape 1 : Photo Avant",
    btnCamAfter: "Étape 2 : Photo Après",
    camFeedReady: "Appareil prêt",
    camFeedRecordingBefore: "Enregistrement 'AVANT'...",
    camFeedRecordingAfter: "Enregistrement 'APRÈS'...",
    camFeedBeforeDone: "Scan avant réussi ! Zone encombrée.",
    camFeedAfterDone: "Vérification réussie ! Zone propre !",
    camGuidanceReady: "Scannez votre zone avant le match. L'état initial encombré sera enregistré.",
    camGuidanceDirty: "Super. Bon match ! Ramassez vos déchets et scannez APRÈS le match pour obtenir vos cadeaux.",
    camGuidanceClean: "🎉 Zone propre vérifiée ! +50 points éco et +10 de score de responsabilité accordés !",
    leaderboardSections: [
      { name: "Section 102 (Zone Familiale)", pts: "12,480 pts", div: "92% propre" },
      { name: "Section 112 (Club de supporters)", pts: "10,120 pts", div: "84% propre" },
      { name: "Section 124 (Supporters Verts)", pts: "9,850 pts", div: "81% propre" },
      { name: "Section 135 (Restauration Classique)", pts: "5,200 pts", div: "52% propre" }
    ],

    // VLM translations
    lblVlmTitle: "👁️ Escorte Multimodale Vision",
    lblVlmDesc: "Téléchargez des photos de votre billet et de votre environnement (ex. un pilier/panneau spécifique) pour calculer un itinéraire accessible.",
    btnVlmRoute: "Calculer l'Itinéraire Visuel VLM",
    txtVlmTicketStatus: "Téléverser Billet",
    txtVlmSceneStatus: "Téléverser Entourage",
    txtVlmTicketDone: "Billet Chargé ✓",
    txtVlmSceneDone: "Entourage Chargé ✓",
    
    transitNames: {
      train: "MetLife Express (Train NYC)",
      shuttle: "Navette Parking (Parkings A-D)",
      bus: "Bus Régional (Rutherford)",
      uber: "Prise Uber/Lyft (Parking G)"
    },
    transitFreqs: {
      train: "Toutes les 8 min",
      shuttle: "Toutes les 5 min",
      bus: "Toutes les 15 min",
      uber: "Sur demande"
    },
    crowdLabels: {
      low: "CROWD BAS",
      mod: "CROWD MOYEN",
      high: "CROWD ELEVE"
    },
    
    ecoItemCardReady: "Prêt à jouer ? Cliquez sur la carte ci-dessus et sélectionnez une poubelle. Gagnez des badges pour des souvenirs de la Coupe du Monde !",
    ecoCorrect: "✨ Correct (+15 pts) !",
    ecoIncorrect: "❌ Oups (-5 pts). Réessayez !",
    ecoHint: "Indice IA : Considérez les composants bruts d'un(e) ",
    ecoToastCorrect: "Tri validé ! Badges Éco mis à jour.",
    ecoToastIncorrect: "Poubelle incorrecte. Veuillez examiner la matière du déchet.",
    ecoItems: {
      "Aluminium Soda Can": {
        name: "Canette de soda en aluminium",
        info: "Les canettes métalliques sont recyclables à l'infini. Les trier correctement économise 95% de l'énergie nécessaire pour fabriquer une nouvelle canette."
      },
      "Sausage Food Scraps": {
        name: "Restos de saucisse",
        info: "Les déchets alimentaires organiques se décomposent en compost riche en nutriments, évitant ainsi le rejet de méthane dans les décharges."
      },
      "Soiled Hotdog Cardboard Box": {
        name: "Boîte à hot-dog en carton sale",
        info: "Les emballages alimentaires en carton sont fabriqués à partir d'amidon organique, ce qui les rend 100% compostables, même graisseux."
      },
      "Plastic Beer Cup": {
        name: "Gobelet à bière en plastique",
        info: "Ce gobelet est composé à 100% de PET recyclé. Déposez-le dans le recyclage pour qu'il reste dans la boucle de l'économie circulaire."
      },
      "Plastic Wrap & Cutlery": {
        name: "Emballages et couverts en plastique",
        info: "Les films plastiques complexes et les couverts jetables ne sont pas recyclables. Déposez-les dans les déchets généraux."
      },
      "Crinkly Potato Chip Bag": {
        name: "Paquet de chips métallisé",
        info: "Les sachets de chips ont des couches fusionnées d'aluminium et de plastique impossible à séparer pour le recyclage."
      }
    },
    
    wayfinderDefault: "Sélectionnez une porte et une section pour obtenir l'itinéraire recommandé par l'IA.",
    walkTimeLabel: "⏱️ Temps de marche : {time} min",
    accessDirections: "♿ **Itinéraire accessible actif** : Chemins sans escalier. Veuillez emprunter l'ascenseur B derrière la Section 110. Des assistants sont en Zone 4.",
    
    directions: {
      A: {
        intro: "Entrez par la **Porte A (Nord)**. Dirigez-vous tout droit dans le hall vers la Section 100. ",
        "102": "La Section 102 is immédiatement sur votre droite, à côté de l'Arena Grill.",
        "112": "Tournez à gauche et passez devant le comptoir des marchandises de la Section 106. La Section 112 est sur votre gauche.",
        "124": "Marchez à gauche après la Section 108. Continuez dans le virage. La Section 124 est située en face de 'Green Grass Eats'.",
        "135": "Marchez à droite après la Section 130. Continuez sur 90 mètres. La Section 135 est droit devant."
      },
      B: {
        intro: "Entrez par la **Porte B (Est)**. Tournez à gauche sur la boucle du hall. ",
        "102": "Suivez le couloir dans le sens des aiguilles d'une montre après la Section 106. La Section 102 est sur la gauche.",
        "112": "La Section 112 est à 30 mètres devant vous, sur la droite.",
        "124": "Marchez à gauche après la Section 120. Tournez à droite. La Section 124 est devant vous.",
        "135": "Marchez à droite dans le virage après la Section 130. La Section 135 est proche de la sortie de la Porte B."
      },
      C: {
        intro: "Entrez par la **Porte C (Sud)**. ",
        "102": "Marchez à droite après la Section 138, puis passez devant la Porte A. La Section 102 est devant.",
        "112": "Marchez à gauche après la Section 130, puis contournez la Section 120. La Section 112 est devant.",
        "124": "Marchez à gauche après la Section 128. La Section 124 se trouve à côté des ascenseurs.",
        "135": "La Section 135 est directement sur votre droite."
      }
    }
  },
  ar: {
    phoneTitle: "🏆 مساعد إيجيس أرينا",
    chipFastest: "🚪 أسرع بوابة؟",
    chipWheelchair: "♿ مسار الكراسي المتحركة",
    chipFood: "🥗 مأكولات نباتية وحلال؟",
    chipEco: "♻️ فرز النفايات",
    lblStartingGate: "اختر بوابة الدخول الخاصة بك",
    optGateA: "البوابة أ (المدخل الشمالي)",
    optGateB: "البوابة ب (المدخل الشرقي)",
    optGateC: "البوابة ج (المدخل الجنوبي)",
    lblTargetSection: "اختر قسم المقاعد الخاص بك",
    optSec102: "القسم 102 (عائلي وشواء مميز)",
    optSec112: "القسم 112 (منطقة الأطعمة الحلال العالمية)",
    optSec124: "القسم 124 (المنطقة النباتية للأغذية الخضراء)",
    optSec135: "القسم 135 (المأكولات الخفيفة الكلاسيكية)",
    lblAccessibleRoute: "♿ مسار خالي من الدرجات / مصعد فقط",
    fanTransitTitle: "لوحة مواعيد وسائل النقل المباشرة",
    lblRefreshText: "مزامنة",
    fanTransitAiTitle: "توصية النقل المعتمدة على الذكاء الاصطناعي",
    transitAiHint: "النقل بالقطار هو الخيار الأسرع حالياً (كل 8 دقائق). طوابير الركوب عند البوابة أ قصيرة جداً؛ تجنب سيارات الأجرة في الموقف G بسبب الازدحام وتأخير 25 دقيقة.",
    lblEcoScore: "🏆 أوسمتي البيئية",
    lblEcoInstructions: "اضغط على أحد النفايات، ثم اختر الحاوية المناسبة لفرزها بشكل صحيح! اجمع النقاط للحصول على جوائز البطولة!",
    txtBinCompost: "سماد عضوي",
    txtBinRecycle: "إعادة تدوير",
    txtBinLandfill: "النفايات العامة",
    txtTabBuddy: "المساعد الذكي",
    txtTabWayfinder: "مرشد الطريق",
    txtTabTransit: "المواصلات",
    txtTabEco: "الفرز البيئي",
    txtTabSnap: "التقط ووفر",
    
    // Snap & Save translations
    lblResponsibilityScore: "مؤشر المسؤولية",
    lblPresaleNotice: "⚠️ ملاحظة: الحصول على مؤشر أقل من 60 يؤخر حجز تذاكر كأس العالم لمدة 24 ساعة.",
    lblCamTitle: "📸 كاميرا الاختيار النظيف",
    lblVoucherDesc: "امسح الكود عند أي كشك طعام في ملعب ميتلايف لطلبك القادم.",
    lblLeaderboardTitle: "ترتيب المجموعات",
    btnCamBefore: "الخطوة 1: تصوير قبل",
    btnCamAfter: "الخطوة 2: تصوير بعد",
    camFeedReady: "الكاميرا جاهزة",
    camFeedRecordingBefore: "جاري تسجيل فيديو 'قبل'...",
    camFeedRecordingAfter: "جاري تسجيل فيديو 'بعد'...",
    camFeedBeforeDone: "اكتمل تصوير قبل! المنطقة متسخة.",
    camFeedAfterDone: "اكتمل التحقق! منطقة المقاعد نظيفة!",
    camGuidanceReady: "اصفِ منطقتك وصورها قبل بدء المباراة ليتم تسجيل حالتها.",
    camGuidanceDirty: "رائع. استمتع بالمباراة الآن! نظف نفاياتك وصور بعد المباراة للحصول على الجوائز.",
    camGuidanceClean: "🎉 تم التحقق من نظافة المنطقة! تم منحك +50 نقطة بيئية و+10 مؤشر مسؤولية!",
    leaderboardSections: [
      { name: "القسم 102 (المنطقة العائلية)", pts: "12,480 نقطة", div: "نظافة 92%" },
      { name: "القسم 112 (نادي المشجعين العالمي)", pts: "10,120 نقطة", div: "نظافة 84%" },
      { name: "القسم 124 (المشجعون الخضر)", pts: "9,850 نقطة", div: "نظافة 81%" },
      { name: "القسم 135 (الممر الكلاسيكي)", pts: "5,200 نقطة", div: "نظافة 52%" }
    ],

    // VLM translations
    lblVlmTitle: "👁️ الإرشاد البصري المتعدد الوسائط",
    lblVlmDesc: "ارفع صوراً لتذكرتك ومحيطك المباشر (مثل لافتة أو عمود معين) لحساب مسار خالي من العقبات.",
    btnVlmRoute: "حساب التوجيه البصري VLM",
    txtVlmTicketStatus: "رفع صورة التذكرة",
    txtVlmSceneStatus: "رفع صورة المحيط",
    txtVlmTicketDone: "تم تحميل التذكرة ✓",
    txtVlmSceneDone: "تم تحميل صورة المحيط ✓",
    
    transitNames: {
      train: "ميتلايف السريع (قطار نيويورك)",
      shuttle: "حافلة المواقف (موقف أ-د)",
      bus: "حافلة إقليمية (روثرفورد)",
      uber: "موقع أوبر/كريم (موقف ج)"
    },
    transitFreqs: {
      train: "كل 8 دقائق",
      shuttle: "كل 5 دقائق",
      bus: "كل 15 دقيقة",
      uber: "عند الطلب"
    },
    crowdLabels: {
      low: "ازدحام منخفض",
      mod: "ازدحام متوسط",
      high: "ازدحام مرتفع"
    },
    
    ecoItemCardReady: "جاهز للعب؟ اضغط على البطاقة في الأعلى واختر حاوية لفرزها. اربح الأوسمة للحصول على تذكارات كأس العالم!",
    ecoCorrect: "✨ صحيح (+15 نقطة)!",
    ecoIncorrect: "❌ خطأ (-5 نقاط). حاول مرة أخرى!",
    ecoHint: "نصيحة الذكاء الاصطناعي: فكر في المواد الخام التي تتكون منها ",
    ecoToastCorrect: "فرز ممتاز! تم تحديث الأوسمة الخضراء.",
    ecoToastIncorrect: "الحاوية غير صحيحة. يرجى مراجعة مادة النفايات.",
    ecoItems: {
      "Aluminium Soda Can": {
        name: "علبة صودا ألومنيوم",
        info: "يمكن إعادة تدوير الععلب المعدنية بلا حدود. فرزها بشكل صحيح يوفر 95٪ من الطاقة اللازمة لصنع علبة جديدة."
      },
      "Sausage Food Scraps": {
        name: "بقايا طعام النقانق",
        info: "تتحلل مخلفات الأغذية العضوية إلى سماد غني بالمغذيات، مما يمنع انبعاث غاز الميثان في مكبات النفايات."
      },
      "Soiled Hotdog Cardboard Box": {
        name: "علبة كرتون متسخة للوجبات",
        info: "علب الوجبات الكرتونية مغطاة بنشا عضوي طبيعي، مما يجعلها قابلة للتحلل بنسبة 100٪ حتى مع وجود بقع الدهون."
      },
      "Plastic Beer Cup": {
        name: "كوب بلاستيكي للمشروبات",
        info: "هذا الكوب مصنوع من بلاستيك PET معاد تدويره بنسبة 100%. ضعه في حاوية التدوير ليدخل مجدداً في حلقة الاقتصاد الدائري."
      },
      "Plastic Wrap & Cutlery": {
        name: "أغلفة وملاعق بلاستيكية",
        info: "الأغلفة البلاستيكية المختلطة والملاعق البلاستيكية أحادية الاستخدام غير قابلة لإعادة التدوير حالياً. مكانها الصحيح هو النفايات العامة."
      },
      "Crinkly Potato Chip Bag": {
        name: "كيس رقائق البطاطس المعدني",
        info: "تحتوي أكياس البطاطس على طبقات مدمجة من البلاستيك والمعادن التي لا يمكن فصلها لإعادة التدوير."
      }
    },
    
    wayfinderDefault: "اختر بوابة وقسماً لحساب مسار التوجيه الموصى به من قبل الذكاء الاصطناعي.",
    walkTimeLabel: "⏱️ الوقت المقدر: {time} دقيقة",
    accessDirections: "♿ **تم تفعيل مسار ذوي الاحتياجات الخاصة**: يتم استخدام ممرات خالية من الدرجات. يرجى ركوب المصعد ب خلف القسم 110. يوجد موظفو مساعدة في المنطقة 4.",
    
    directions: {
      A: {
        intro: "ادخل من **البوابة أ (المدخل الشمالي)**. توجه مباشرة عبر الممر نحو القسم 100. ",
        "102": "القسم 102 يقع على يمينك مباشرة بجوار أرينا جريل.",
        "112": "انعطف يسارًا وامشِ متجاوزًا متجر الهدايا بالقسم 106. القسم 112 يقع على يسارك.",
        "124": "امشِ يسارًا متجاوزًا القسم 108. استمر حول المنعطف. يقع القسم 124 مقابل 'Green Grass Eats'.",
        "135": "امشِ يميناً متجاوزاً القسم 130. استمر لمسافة 90 متراً. القسم 135 أمامك مباشرة."
      },
      B: {
        intro: "ادخل من **البوابة ب (المدخل الشرقي)**. انعطف يسارًا في الممر الدائري. ",
        "102": "اتبع الممر باتجاه عقارب الساعة متجاوزًا القسم 106. القسم 102 يقع على اليسار.",
        "112": "القسم 112 يقع على بعد 30 مترًا أمامك على اليمين.",
        "124": "امشِ يسارًا متجاوزًا القسم 120. انعطف يمينًا. القسم 124 أمامك.",
        "135": "امشِ يميناً حول المنعطف متجاوزاً القسم 130. القسم 135 يقع بالقرب من مخرج البوابة ب."
      },
      C: {
        intro: "ادخل من **البوابة ج (المدخل الجنوبي)**. ",
        "102": "امشِ يميناً متجاوزاً القسم 138، ثم تابع متجاوزاً البوابة أ. القسم 102 أمامك.",
        "112": "امشِ يساراً متجاوزاً القسم 130، وتابع حول القسم 120. القسم 112 أمامك.",
        "124": "امشِ يساراً متجاوزاً القسم 128. القسم 124 بجوار مجموعة المصاعد.",
        "135": "القسم 135 يقع على يمينك مباشرة."
      }
    }
  },
  ja: {
    phoneTitle: "🏆 AegisArenaファン支援",
    chipFastest: "🚪 最速ゲートは？",
    chipWheelchair: "♿ 車椅子アクセス",
    chipFood: "🥗 ビーガン＆ハラール食は？",
    chipEco: "♻️ ゴミの分別について",
    lblStartingGate: "入場ゲートを選択してください",
    optGateA: "ゲートA（北口）",
    optGateB: "ゲートB（東口）",
    optGateC: "ゲートC（南口）",
    lblTargetSection: "座席セクションを選択してください",
    optSec102: "セクション102 (ファミリー＆プレミアムグリル)",
    optSec112: "セクション112 (ハラール料理ゾーン)",
    optSec124: "セクション124 (ビーガン料理ゾーン)",
    optSec135: "セクション135 (定番売店)",
    lblAccessibleRoute: "♿ 階段なし/エレベーターのみ案内",
    fanTransitTitle: "ライブ運行情報板",
    lblRefreshText: "同期する",
    fanTransitAiTitle: "AIによる運行ルート推奨",
    transitAiHint: "列車が最も早く移動できます（8分間隔）。ゲートAの列は短いです。駐車場G의配車サービスは料金が高騰し、25分の遅れがあるため避けてください。",
    lblEcoScore: "🏆 エコバッジ",
    lblEcoInstructions: "ゴミのカードをタップして、正しい分別ゴミ箱を選択してください！ポイントを貯めて限定特典をゲットしましょう！",
    txtBinCompost: "堆肥化",
    txtBinRecycle: "リサイクル",
    txtBinLandfill: "一般ゴミ",
    txtTabBuddy: "AIバディ",
    txtTabWayfinder: "ウェイファインダー",
    txtTabTransit: "運行情報",
    txtTabEco: "エコ・ソーター",
    txtTabSnap: "スナップ＆セーブ",
    
    // Snap & Save translations
    lblResponsibilityScore: "責任スコア",
    lblPresaleNotice: "⚠️ 注意：スコアが60未満になると、ワールドカップ観戦チケットの先行販売アクセスが24時間遅れます。",
    lblCamTitle: "📸 クリーンチョイスカメラ",
    lblVoucherDesc: "メットライフスタジアム内のすべての売店での次回のご注文でスキャンしてください。",
    lblLeaderboardTitle: "グループセクションリーダーボード",
    btnCamBefore: "ステップ1：前のスキャン",
    btnCamAfter: "ステップ2：後のスキャン",
    camFeedReady: "カメラ準備完了",
    camFeedRecordingBefore: "「前」の動画を録画中...",
    camFeedRecordingAfter: "「後」の動画を録画中...",
    camFeedBeforeDone: "観戦前のスキャン完了！座席にゴミが残されています。",
    camFeedAfterDone: "検証完了！座席エリアはきれいです！",
    camGuidanceReady: "キックオフ前に座席エリアをスキャンしてください。ゴミの状況が記録されます。",
    camGuidanceDirty: "完了です。試合をお楽しみください！試合後にゴミを片付け、「後」のスキャンを行って特典を受け取ってください。",
    camGuidanceClean: "🎉 クリーンゾーンが確認されました！エコポイント+50、責任スコア+10が加算されました！",
    leaderboardSections: [
      { name: "セクション102 (ファミリーゾーン)", pts: "12,480 pts", div: "美化率92%" },
      { name: "セクション112 (グローバルファンクラブ)", pts: "10,120 pts", div: "美化率84%" },
      { name: "セクション124 (エコサポーター)", pts: "9,850 pts", div: "美化率81%" },
      { name: "セクション135 (定番コンコース)", pts: "5,200 pts", div: "美化率52%" }
    ],

    // VLM translations
    lblVlmTitle: "👁️ ビジョンファースト・マルチモーダルエスコート",
    lblVlmDesc: "チケットの写真と現在の周囲の状況（特定の柱や標識など）の写真をアップロードして、ローカライズされたバリアフリー経路を計算します。",
    btnVlmRoute: "VLM視覚ナビゲーションを計算",
    txtVlmTicketStatus: "チケット写真アップロード",
    txtVlmSceneStatus: "周囲の写真アップロード",
    txtVlmTicketDone: "チケット読込済 ✓",
    txtVlmSceneDone: "周囲画像読込済 ✓",
    
    transitNames: {
      train: "メットライフ・エクスプレス（NYC鉄道）",
      shuttle: "駐車場シャトル（駐車場A-D）",
      bus: "地方バス（ラザフォード方面）",
      uber: "配車アプリ乗降場（駐車場G）"
    },
    transitFreqs: {
      train: "8分間隔",
      shuttle: "5分間隔",
      bus: "15分間隔",
      uber: "オンデマンド"
    },
    crowdLabels: {
      low: "混雑：低",
      mod: "混雑：中",
      high: "混雑：高"
    },
    
    ecoItemCardReady: "準備はいいですか？上のカードをタップして、ゴミ箱を選択してください。ワールドカップ記念品用のエコバッジを獲得しましょう！",
    ecoCorrect: "✨ 正解 (+15 pts)！",
    ecoIncorrect: "❌ 残念 (-5 pts)。もう一度！",
    ecoHint: "AIヒント: 何からできているか考えましょう： ",
    ecoToastCorrect: "素晴らしい分別です！エコバッジが更新されました。",
    ecoToastIncorrect: "分別ゴミ箱が違います。カードの素材を再確認してください。",
    ecoItems: {
      "Aluminium Soda Can": {
        name: "アルミ炭酸缶",
        info: "金属缶は無限にリサイクル可能です。正しく分別することで、新しい缶をゼロから製造するために必要なエネルギーの95%を節約できます。"
      },
      "Sausage Food Scraps": {
        name: "ソーセージの食べ残し",
        info: "有機ゴミは栄養豊富な堆肥に分解されるため、埋め立て地でのメタンガスの発生を防ぐことができます。"
      },
      "Soiled Hotdog Cardboard Box": {
        name: "汚れたホットドッグの紙箱",
        info: "大会の食品紙容器は有機デンプンでコーティングされているため、油汚れが付着していても100%堆肥化可能です。"
      },
      "Plastic Beer Cup": {
        name: "プラスチック製ビールコップ",
        info: "この公式コップは100%再生PETでできています。リサイクルに出して循環型経済 of 輪の中に維持しましょう。"
      },
      "Plastic Wrap & Cutlery": {
        name: "プラスチック製ラップ＆カトラリー",
        info: "プラスチック製ラップや使い捨てカトラリーは現在リサイクルできません。一般ゴミとして処理するのが正解です。"
      },
      "Crinkly Potato Chip Bag": {
        name: "スナック菓子の袋",
        info: "スナック菓子袋にはアルミ箔が貼られており、プラスチックと分離して再生することができません。"
      }
    },
    
    wayfinderDefault: "ゲートとセクションを選択して、AIが推奨するルートを計算します。",
    walkTimeLabel: "⏱️ 徒歩目安: {time} 分",
    accessDirections: "♿ **バリアフリー対応ルート案内中**: 階段のない平坦な通路をご案内しています。セクション110の後ろにあるエレベーターBをご利用ください。ゾーン4にアシスタントスタッフが常駐しています。",
    
    directions: {
      A: {
        intro: "**ゲートA（北口）**から入場してください。コンコースをセクション100に向かって直進します。 ",
        "102": "セクション102はアリーナグリルの隣のすぐ右側にあります。",
        "112": "左に曲がり、セクション106のグッズ売り場を通り過ぎます。セクション112は左側にあります。",
        "124": "セクション108を過ぎて左に進みます。カーブに沿って進みます。セクション124は「Green Grass Eats」の向かいにあります。",
        "135": "セクション130を過ぎて右に進みます。さらに90メートル進みます。セクション135は目の前です。"
      },
      B: {
        intro: "**ゲートB（東口）**から入場してください。コンコースの円形ループを左に進みます。 ",
        "102": "セクション106を過ぎて時計回りに通路を進みます。セクション102は左側です。",
        "112": "セクション112は30メートル先の右側にあります。",
        "124": "セクション120まで左へ進みます。右折します。セクション124は前方にあります。",
        "135": "セクション130を過ぎて右に曲がります。セクション135はゲートB出口の近くです。"
      },
      C: {
        intro: "**ゲートC（南口）**から入場してください。 ",
        "102": "セクション138を過ぎて右に進み、さらにゲートAを過ぎて進みます。セクション102は前方です。",
        "112": "セクション130を過ぎて左に進み、セクション120の周りを進みます。セクション112は前方です。",
        "124": "セクション128を過ぎて左に進みます。セクション124はエレベーターホールの隣にあります。",
        "135": "セクション135はすぐ右側にあります。"
      }
    }
  }
};

// AI Simulation Engine for AegisArena FIFA 2026 with Real Gemini API Integration

const GEMINI_API_KEY = "AQ.Ab8RN6Jul8wonu2_9hvg-76xhNOYI8zvHbgHT6Q4OMO7_DbuUQ";
const MODEL_NAME = "gemini-1.5-flash";

const STAFF_KNOWLEDGE = {
  gate_congestion: "Current gate analysis: Gate A has low congestion (2 mins wait). Gate B is experiencing a crowd surge due to arriving shuttle buses (18 mins wait). Gate C is normal (5 mins wait). Recommendation: Update signs to divert Section 100 ticket holders to Gate A.",
  dispatch_medical: "EMERGENCY PROTOCOL TRIGGERED: Dispatching primary medical response unit to Section 104, Row K. Notified Sector 2 Medical Station. Estimated arrival: 2 minutes 15 seconds.",
  dispatch_security: "SECURITY PROTOCOL TRIGGERED: Dispatched Security Team Alpha to Gate B. Crowd dispersal warnings activated on digital panels. Local supervisor alerted.",
  dispatch_custodial: "MAINTENANCE ASSIGNMENT: Custodial team dispatched to Concourse Section 112 for spill cleanup. Estimated time to clear: 4 minutes.",
  energy_peak: "GenAI Resource Intelligence Report: We are predicting an energy peak of 4.2MW at 19:45 (halftime). Suggesting pre-cooling concourses by 2°C now and reducing non-essential digital displays by 20% to shave peak load by 350kW.",
  food_logistics: "Halftime food consumption prediction: Demand for vegan and gluten-free items in Zone C has increased by 40% compared to Matchday 1. AI recommends transferring 150 units from Zone A storage to prevent stockouts.",
  announcements: "Broadcast suggestion: 'Attention fans at Gate B, to reduce your entry wait time, please use the alternative Gate A entrance which is currently clear.'",
};

const FAN_KNOWLEDGE = {
  en: {
    gates: "MetLife Stadium has 3 main public gates: Gate A (North), Gate B (East), and Gate C (South). Gate A is currently the fastest route for entry with under a 3-minute wait.",
    accessibility: "AegisArena wayfinder guides you through accessible paths. All gates have step-free elevators. The recommended drop-off zone for wheelchair access is Lot C near Gate C, which offers direct level entry to Concourse Section 100.",
    restrooms: "Accessible restrooms are available on all levels. The nearest all-gender and family restroom is located behind Section 118 on the lower concourse.",
    food: "Looking for food? We have a variety of options! Vegan & Gluten-Free items are available at 'Green Grass Eats' (Section 124). Halal-certified options can be found at 'Global Flavors' (Section 112). For classic FIFA stadium fare, visit 'Arena Grill' (Sections 102 & 135).",
    transport: "Post-match transit options: The MetLife Express Train leaves from the stadium station every 8 minutes. Shuttle buses to parking lots run continuously. Uber/Lyft pickup is designated at Lot G. AI recommends taking the Train to avoid road gridlock.",
    sustainability: "Welcome to the Green Tournament! Please sort your waste: plastic cups and clean bottles go to RECYCLE (Blue bins); food waste and compostable boxes go to COMPOST (Green bins); wrappers, plastic cutlery, and soiled items go to LANDFILL (Black bins). Let's score a goal for the planet!",
    tickets: "To scan your ticket, ensure your screen brightness is at 100% and place the QR code 3 inches away from the gate reader. If you need help, look for the volunteers in neon yellow vests.",
    default: "I'm your AegisArena FIFA 2026 AI Assistant. I can help you with stadium navigation, food options, transportation plans, accessibility routes, and tournament details. What would you like to know?"
  },
  es: {
    gates: "El MetLife Stadium tiene 3 puertas principales: Puerta A (Norte), Puerta B (Este) y Puerta C (Sur). La Puerta A es actualmente la ruta de entrada más rápida, con menos de 3 minutos de espera.",
    accessibility: "El sistema de navegación AegisArena le guía por rutas accesibles. Todas las puertas tienen ascensores sin escalones. La zona recomendada para sillas de ruedas es el Estacionamiento C cerca de la Puerta C.",
    food: "Tenemos una gran variedad de alimentos. Comida vegana y sin gluten disponible en 'Green Grass Eats' (Sección 124). Opciones Halal en 'Global Flavors' (Sección 112). Hamburguesas y hotdogs clásicos en 'Arena Grill' (Secciones 102 y 135).",
    transport: "Opciones de transporte después del partido: El Tren Express MetLife sale cada 8 minutos. Los autobuses de enlace funcionan continuamente. La zona de Uber/Lyft está en el Estacionamiento G.",
    sustainability: "¡Bienvenidos al Torneo Verde! Clasifique sus residuos: vasos de plástico en RECICLAJE (botes azules); restos de comida en COMPOST (botes verdes); cubiertos de plástico y envoltorios en Basura Común (botes negros).",
    default: "Soy tu Asistente de IA de AegisArena para la Copa Mundial de la FIFA 2026. Puedo ayudarte con la navegación en el estadio, transporte, opciones de comida y más. ¿En qué puedo ayudarte?"
  },
  fr: {
    gates: "Le MetLife Stadium dispose de 3 portes publiques principales : Porte A (Nord), Porte B (Est) et Porte C (Sud). La Porte A est actuellement l'itinéraire le plus rapide.",
    accessibility: "AegisArena vous guide à travers des chemins accessibles. Toutes les portes disposent d'ascenseurs. La zone de dépôt recommandée pour les fauteuils roulants est le parking C près de la porte C.",
    food: "Des options végétaliennes et sans gluten sont disponibles chez 'Green Grass Eats' (Section 124). Les options certifiées Halal se trouvent chez 'Global Flavors' (Section 112).",
    transport: "Le train express MetLife part toutes les 8 minutes. Les navettes vers les parkings fonctionnent en continu. La zone de prise en charge Uber/Lyft est située au parking G.",
    sustainability: "Bienvenue au Tournoi Vert ! Veuillez trier vos déchets : gobelets en plastique dans le RECYCLAGE (bacs bleus) ; restes de nourriture dans le COMPOST (bacs verts) ; emballages dans les DECHETS GENERAUX (bacs noirs).",
    default: "Je suis votre assistant IA AegisArena FIFA 2026. Je peux vous aider pour la navigation, la nourriture, les transports, l'accessibilité et plus encore. Comment puis-je vous aider ?"
  },
  ar: {
    gates: "يحتوي ملعب ميتلايف على 3 بوابات عامة رئيسية: البوابة أ (الشمالية)، البوابة ب (الشرقية)، والبوابة ج (الجنوبية). البوابة أ هي الأسرع حالياً بوقت انتظار أقل من 3 دقائق.",
    accessibility: "يوجهك نظام AegisArena عبر مسارات سهلة الوصول. تحتوي جميع البوابات على مصاعد خالية من الدرجات. منطقة النزول الموصى بها لمستخدمي الكراسي المتحركة هي المواقف C بجوار البوابة C.",
    food: "تتوفر المأكولات النباتية والخالية من الغلوتين في 'Green Grass Eats' (القسم 124). الأطعمة الحلال متوفرة في 'Global Flavors' (القسم 112).",
    transport: "وسائل النقل بعد المباراة: ينطلق قطار ميتلايف السريع كل 8 دقائق. حافلات النقل تعمل باستمرار. تم تحديد منطقة نقل الركاب لـ Uber/Lyft في الموقف G.",
    sustainability: "مرحباً بكم في البطولة الخضراء! يرجى فرز نفاياتكم: الأكواب البلاستيكية في حاوية إعادة التدوير (الزرقاء)، بقايا الطعام في السماد العضوي (الخضراء)، والأغلفة البلاستيكية في النفايات العامة (السوداء).",
    default: "أنا مساعد الذكاء الاصطناعي AegisArena لكأس العالم 2026. يمكنني مساعدتك في التنقل، الأطعمة، النقل، والخدمات الخاصة. كيف يمكنني مساعدتك اليوم؟"
  },
  ja: {
    gates: "メットライフ・スタジアムには3つの主要ゲートがあります。ゲートA（北）、ゲートB（東）、ゲートC（南）です。現在、ゲートAが最も空いており、待ち時間は3分未満です。",
    accessibility: "AegisArenaはバリアフリー経路をご案内します。すべてのゲートにエレベーターがあります。車椅子をご利用の方の降車ゾーンはゲートC近くの駐車場Cが最適です。",
    food: "ビーガン＆グルテンフリー料理は「Green Grass Eats」（セクション124）で提供しています。ハラール認証フードは「Global Flavors」（セクション112）にございます。",
    transport: "試合後の交通機関：メットライフ・エクスプレス列車がスタジアム駅から8分間隔で運行しています。駐車場シャトルバスも常時運行しています。配車アプリ（Uber等）の乗降場所は駐車場Gです。",
    sustainability: "クリーンな大会へようこそ！ゴミの分別にご協力ください。プラスチックカップは「リサイクル（青）」、食べ残しは「堆肥化（緑）」、包装紙や汚れたゴミは「一般ゴミ（黒）」へお入れください。",
    default: "AegisArena FIFA 2026 AIアシスタントです。スタジアムのナビゲーション、飲食店、交通機関、バリアフリー対応についてご案内します。何かお手伝いできますか？"
  }
};

/**
 * Fallback local response logic when API is unavailable or limits exceeded.
 */
function findLocalFallbackResponse(query, context, portalMode, language = 'en') {
  const q = query.toLowerCase();
  
  if (portalMode === 'waste') {
    if (q.includes('audit') || q.includes('dispatch') || q.includes('level')) {
      return "Waste Operations Audit: Smart bins at Food Court Section 124 and West Concourse 2 are showing critical capacities. Suggest dispatching clean sweep teams. Estimated landfill diversion rate is at 64.5%.";
    }
    if (q.includes('improve') || q.includes('recycle') || q.includes('diversion') || q.includes('compost')) {
      return "To improve diversion rates: 1. Deploy educational signs at Food Court Section 124. 2. Implement targeted incentives for fans completing the Eco-challenge. 3. Station volunteers near Section 112 to reduce compost contamination.";
    }
    if (q.includes('124') || q.includes('food')) {
      return "Section 124 Food Court Alert: High accumulation of compostable food scraps detected. Auto-routing sweeps will clear it and redirect 0.4 tons to compost processing.";
    }
    return `[Waste Intelligence] Log processed for "${query}". Turnaround times are stable. Bins at 42% average capacity.`;
  }
  
  if (portalMode === 'staff') {
    if (q.includes('gate') || q.includes('crowd') || q.includes('congestion')) return STAFF_KNOWLEDGE.gate_congestion;
    if (q.includes('medical') || q.includes('heart') || q.includes('injury')) return STAFF_KNOWLEDGE.dispatch_medical;
    if (q.includes('security') || q.includes('fight') || q.includes('smoke')) return STAFF_KNOWLEDGE.dispatch_security;
    if (q.includes('spill') || q.includes('clean') || q.includes('custodial')) return STAFF_KNOWLEDGE.dispatch_custodial;
    if (q.includes('energy') || q.includes('peak')) return STAFF_KNOWLEDGE.energy_peak;
    if (q.includes('food') || q.includes('vegan')) return STAFF_KNOWLEDGE.food_logistics;
    if (q.includes('announce') || q.includes('broadcast')) return STAFF_KNOWLEDGE.announcements;
    
    return `[Local AI Engine] Operation log processed for "${query}". Metrics are stable. Recommend routine patrols.`;
  } else {
    const dict = FAN_KNOWLEDGE[language] || FAN_KNOWLEDGE['en'];
    if (q.includes('gate') || q.includes('entry')) return dict.gates;
    if (q.includes('wheelchair') || q.includes('elevator')) return dict.accessibility;
    if (q.includes('restroom') || q.includes('toilet')) return dict.restrooms || FAN_KNOWLEDGE['en'].restrooms;
    if (q.includes('food') || q.includes('vegan') || q.includes('halal')) return dict.food;
    if (q.includes('transport') || q.includes('bus') || q.includes('train')) return dict.transport;
    if (q.includes('recycle') || q.includes('compost')) return dict.sustainability;
    if (q.includes('ticket') || q.includes('scan')) return dict.tickets;
    
    return dict.default;
  }
}

/**
 * Constructs prompt instructions based on app state details.
 */
function buildPrompt(query, context, portalMode, language) {
  if (portalMode === 'waste') {
    const overflowBins = context.smartBins.filter(b => b.fill > 75).map(b => b.zone + ' (' + b.type + ')').join(', ');
    return `You are the AegisArena Intelligent Waste & Logistics AI Advisor for the FIFA World Cup 2026.
Current Waste State:
- Smart Bins Capacity Details: ${context.smartBins.map(b => b.zone + ': ' + b.fill + '% filled').join(', ')}
- Total Waste Managed: ${context.wasteTonnage} Metric Tons
- Landfill Diversion Rate: ${context.wasteDiversion}%
- Compost tonnage: ${context.wasteWeights.compost}T, Recycled tonnage: ${context.wasteWeights.recycle}T, Landfilled tonnage: ${context.wasteWeights.landfill}T
- Overflowing Bins: ${overflowBins || "None"}

Your role: Assist waste operations directors in optimizing sweeper schedules, lowering trash accumulation, boosting recycling diversion rates, and resolving capacity alerts.
Constraints: Respond with actionable operational insights. Keep answers very concise (max 3 sentences). If they ask to empty or clear bins, mention the action "Auto-route Sweep Teams" clearly so they can trigger dispatches.

Director request: "${query}"`;
  }
  
  if (portalMode === 'staff') {
    return `You are the AI Operations Copilot for AegisArena at MetLife Stadium during the FIFA World Cup 2026.
Current Stadium State:
- Active scans (fans checked in): ${context.activeScans}
- Active security/custodial/medical staff: ${context.activeStaff}
- Pending alerts in queue: ${context.pendingAlerts}
- Gate B queue delay: ${context.gateBWait} mins.

Your role: Assist the operations director with routing crowds, dispatching personnel, managing peak resource usage, and logistical suggestions.
Constraints: Respond professionally and concisely. Limit your response to 2 to 3 sentences maximum. Keep recommendations actionable.
If the director requests a dispatch or cleanup, ensure you name the event clearly, such as "medical emergency Section 104" or "custodial cleanup spill Section 112" so automatic triggers operate.

Director request: "${query}"`;
  } else {
    const langNames = { en: "English", es: "Spanish", fr: "French", ar: "Arabic", ja: "Japanese" };
    const targetLang = langNames[language] || "English";
    
    return `You are the AegisArena Fan Assist AI Buddy for the FIFA World Cup 2026 at MetLife Stadium.
You are conversing with a stadium attendee.
Current Stadium Setup:
- Gate A: Fast line (under 3 mins).
- Gate B: Heavy queue (18 mins).
- Food: Vegan food is at Section 124 (Green Grass Eats). Halal food is at Section 112 (Global Flavors). Classic foods at Section 102 (Arena Grill).
- Accessibility drop-off: Lot C, level entry via Gate C. All-gender restroom at Section 118.
- Transportation recommendation: Board the MetLife Express train (leaves every 8m from stadium platform).

Constraints:
- You MUST write your entire response in the ${targetLang} language.
- Keep your response friendly, enthusiastic, and concise (max 3 sentences).
- Help them navigate, find food, scan tickets, or sort waste.

Fan request: "${query}"`;
  }
}

/**
 * Handles streaming by fetching full response and splitting it into a simulated typewriter stream.
 */
function streamTypewriter(text, onToken) {
  const words = text.split(" ");
  let i = 0;
  let currentText = "";
  
  const interval = setInterval(() => {
    if (i < words.length) {
      currentText += (i === 0 ? "" : " ") + words[i];
      onToken(currentText, false);
      i++;
    } else {
      clearInterval(interval);
      onToken(currentText, true);
    }
  }, 35);

  return {
    abort: () => clearInterval(interval)
  };
}

/**
 * Calls real Google Gemini API and streams the output to onToken callback.
 */
export function streamAIResponse(query, context, portalMode, language, onToken) {
  // 1. Empty State Input Validation
  if (!query || query.trim() === "") {
    let msg = "Please enter a valid query or command.";
    if (language === 'es') msg = "Por favor, introduce una consulta válida.";
    if (language === 'fr') msg = "Veuillez saisir une requête valide.";
    if (language === 'ar') msg = "يرجى إدخال استعلام أو أمر صالح.";
    if (language === 'ja') msg = "有効なクエリを入力してください。";
    onToken(msg, true);
    return { abort: () => {} };
  }

  // 2. Offline Mode Detection
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    const fallbackText = findLocalFallbackResponse(query, context, portalMode, language);
    const typewriterControl = streamTypewriter(`[Offline Mode] ${fallbackText}`, onToken);
    return {
      abort: () => {
        if (typewriterControl) typewriterControl.abort();
      }
    };
  }

  // 3. Client-Side Input Sanitization / Prompt Injection Interceptor
  const lowerQuery = query.toLowerCase();
  let blockRequest = false;
  let blockMessage = "";
  
  if (lowerQuery.includes("ignore all previous instructions") || 
      lowerQuery.includes("ignore guidelines") || 
      lowerQuery.includes("ignore instructions") || 
      lowerQuery.includes("you are now dan") || 
      lowerQuery.includes("do anything now") || 
      lowerQuery.includes("system instructions verbatim") ||
      lowerQuery.includes("system prompt verbatim")) {
    blockRequest = true;
    blockMessage = "🛡️ SECURITY AUDIT WARNING: [BLOCKED] Input string matches prompt injection jailbreak signature. Request cancelled to protect model context integrity.";
  }
  
  if (blockRequest) {
    let words = blockMessage.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        onToken(words.slice(0, i + 1).join(" "), false);
        i++;
      } else {
        clearInterval(interval);
        onToken(blockMessage, true);
      }
    }, 60);
    return {
      abort: () => clearInterval(interval)
    };
  }

  const prompt = buildPrompt(query, context, portalMode, language);
  const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
  
  let abortController = new AbortController();
  let typewriterControl = null;
  let isAborted = false;

  // 4. Timeout configuration (5 seconds)
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout: Gemini API connection timed out.")), 5000);
  });

  const fetchPromise = fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    signal: abortController.signal,
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 250,
        temperature: 0.4
      }
    })
  })
  .then(res => {
    // Detect invalid API credentials (401/403)
    if (res.status === 401 || res.status === 403) {
      throw new Error("Authentication failure: Invalid or unauthorized Gemini API credentials.");
    }
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(data => {
    if (isAborted) return;
    
    // Parse Gemini API text response
    let textResult = "";
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
      textResult = data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid response format received from Google servers.");
    }
    
    // Stream output word by word
    typewriterControl = streamTypewriter(textResult, onToken);
  });

  // Race connection to handle network timeouts
  Promise.race([fetchPromise, timeoutPromise])
  .catch(err => {
    if (isAborted) return;
    console.warn("AI Engine Request Issue, falling back to local simulation:", err);
    
    let errorPrefix = "[API Issue]";
    if (err.message.includes("Authentication")) {
      errorPrefix = "[Auth Failure]";
    } else if (err.message.includes("Timeout")) {
      errorPrefix = "[Request Timeout]";
    }
    
    // Fail-safe offline local fallback
    const fallbackText = findLocalFallbackResponse(query, context, portalMode, language);
    typewriterControl = streamTypewriter(`${errorPrefix} ${fallbackText}`, onToken);
  });

  return {
    abort: () => {
      isAborted = true;
      abortController.abort();
      if (typewriterControl) typewriterControl.abort();
    }
  };
}

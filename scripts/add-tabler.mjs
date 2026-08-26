import { readFileSync, writeFileSync } from "node:fs";

const used = new Set([...readFileSync("scripts/icon-manifest.mjs", "utf8").matchAll(/file:\s*"([^"]+)-icon"/g)].map(m => m[1]));
const pool = readFileSync("tabler-names.txt", "utf8").split("\n").filter(n => n && !used.has(n));
const target = Number(process.argv[2] ?? 2161);
const JUNK = [/^a-arrow/, /^align-horizontal-distribute/, /^text-align/];
const picks = pool.filter(n => !JUNK.some(re => re.test(n))).slice(0, target);

const RULES = [
  [/pizza|burger|hamburger|sandwich|hotdog|fries|taco|cake|donut|croissant|egg|cheese|fruit|apple|banana|grape|milk|coffee|tea|beer|wine|cup|soup|salad|bread|cookie|candy|ice-cream|drumstick|popcorn|carrot|cherry|lemon|mushroom|shrimp|crab|food|meal/i, "Comida"],
  [/badge-(dollar|euro|rupee|yen)|banknote|wallet|money|piggy|vault|receipt|percent|candlestick|trending|bitcoin|coin|dollar|euro|cash|price|discount/i, "Finanzas"],
  [/bot|chip|circuit|robot|cpu|antenna|satellite|microchip|scan-eye|qr-code$|binary/i, "Tecnología"],
  [/bird|binoculars|tree|leaf|flower|sprout|paw|fish|turtle|rabbit|cat|dog|squirrel|snail|worm|rat|otter|panda|cow|pig|chicken|mountain|forest|duck|swan|owl|shell|nature|animal|plant|seed|pet/i, "Naturaleza"],
  [/heart-crack|smile|frown|laugh|face|ghost|skull|feather|flame|droplet|angry|annoyed|meh|kiss|mood/i, "Emociones"],
  [/cloud|rain|snow|wind|sun|moon|rainbow|tornado|thunder|lightning|fog|hail|meteor|eclipse|weather/i, "Clima"],
  [/code|git-|terminal|json|xml|braces|brackets|variable|binary|database|server|hard-drive|script|regex|dev-/i, "Desarrollo"],
  [/chart|graph|gauge|activity|pie|axis|scatter|spline|stats/i, "Gráficas"],
  [/mail|message|chat|send|at-sign|link-|share|megaphone|rss|voicemail|inbox|reply|quote|comment|bell|notification/i, "Comunicación"],
  [/music|audio|song|mic|volume|headphone|speaker|drum|piano|guitar|radio|album|vinyl|playlist|sound|waveform|boom/i, "Música"],
  [/image|video|camera|film|movie|photo|picture|clapperboard|aperture|webcam|projector|airplay|cast|screen|caption|circle-play|circle-stop|rewind|eject/i, "Multimedia"],
  [/game|dice|sword|puzzle|controller|joystick|spade|card|chest|wand$|potion|bomb|bow-arrow|crosshair|target|chess|club$|joker|poker/i, "Juegos"],
  [/plane|car|bus|train|tram|ship|boat|sailboat|bike|luggage|suitcase|^map|compass|navigation|hotel|tent|passport|fuel|gas|road|railway|scooter|helicopter|subway|ferry|taxi|church|mosque|landmark|monument|tower/i, "Viajes"],
  [/house|home|sofa|bed|lamp|door|window|chair|table|bath|kitchen|fridge|washing|tv$|microwave|blender|toaster|rug|shelf|vase|brick|box$|boxes|package|crate|bucket|barrel|container|armchair|rocking|blinds/i, "Hogar"],
  [/monitor|laptop|mouse|keyboard|printer|phone|tablet|usb|router|webcam|watch|plug|battery|charger|drive|memory|bolt|cable|power|electric/i, "Dispositivos"],
  [/smartphone|sim|signal|wifi|bluetooth|cell|mobile/i, "Celular"],
  [/lock|key|shield|password|fingerprint|^eye|scan|radar|security|privacy|badge|verified|certificate|id-card/i, "Seguridad"],
  [/user|person|users|contact|account|avatar|biceps|accessibility|^man|^woman|baby$/i, "Usuarios"],
  [/^file|folder|document|paper|clipboard|pen|pencil|book|library|stamp|^sign|^print|archive|sticky|note|eraser|ruler|scissors|binder|bold|italic|underline|text|heading|list|baseline|letter-case/i, "Oficina"],
  [/palette|brush|pen-tool|shape|spline|layers|crop|color|contrast|blend|vector|anchor$|bezier|frame|layout|grid|panel|sidebar|blocks|paint|align/i, "Diseño"],
  [/pill|syringe|dna|bandage|hospital|ambulance|microscope|test-tube|stethoscope|medical|health|thermometer|bone|vitamin|fracture|cannabis|cigarette|vape|smoking/i, "Salud"],
  [/clock|calendar|timer|hourglass|alarm|date|time|schedule|history/i, "Tiempo"],
  [/^map|pin$|-pin|location|globe|earth|route|navigation|^flag|compass/i, "Mapas"],
  [/arrow|chevron|move|corner|expand|collapse|unfold|fold|zoom|refresh|rotate|sync|reload|repeat/i, "Flechas"],
  [/barcode|baggage|shop|store|cart|tag|coupon|handshake|truck|package|shopping|briefcase|building|factory|warehouse|office|skyscraper/i, "Comercio"],
];
function categorize(name) {
  for (const [re, cat] of RULES) if (re.test(name)) return cat;
  return "UI";
}

let out = "";
for (const name of picks) {
  const cat = categorize(name);
  const pretty = name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const tags = [...new Set([...name.split("-"), cat.toLowerCase()])].slice(0, 5);
  out += `  { file: "${name}-icon", name: "${pretty}", category: "${cat}", tags: ${JSON.stringify(tags)} },\n`;
}
writeFileSync("scripts/icon-manifest.mjs", readFileSync("scripts/icon-manifest.mjs", "utf8").replace(/\]?;?\s*$/, "\n" + out + "];\n"));
console.log(`añadidos ${picks.length}`);
const cats = {};
for (const n of picks) { const c = categorize(n); cats[c] = (cats[c] || 0) + 1; }
console.log(Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([c, n]) => `${n} ${c}`).join(" · "));

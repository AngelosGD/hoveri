import { readFileSync, writeFileSync } from "node:fs";
import { readdirSync } from "node:fs";

const used = new Set([...readFileSync("scripts/icon-manifest.mjs", "utf8").matchAll(/file:\s*"([^"]+)-icon"/g)].map(m => m[1]));
const all = readdirSync("node_modules/lucide-react/dist/esm/icons").filter(f => f.endsWith(".mjs") && !f.includes(".map")).map(f => f.replace(".mjs", ""));
const unused = all.filter(n => !used.has(n));
const realUnused = unused.filter(n => readFileSync(`node_modules/lucide-react/dist/esm/icons/${n}.mjs`, "utf8").includes("__iconNode"));

const JUNK = [/^a-arrow/, /^align-horizontal-distribute/, /^text-align/];
const RULES = [
  [/pizza|burger|hamburger|sandwich|hotdog|fries|taco|cake|donut|croissant|egg|cheese|fruit|apple|banana|grape|milk|coffee|tea|beer|wine|cup|soup|salad|bread|cookie|candy|sugar|ice-cream|drumstick|popcorn|carrot|cherry|lemon|orange|peach|pear|pineapple|pumpkin|wheat|salt|pepper|chef|utensil|fork|spoon|bean|beef|ham|soda|martini|cocktail|juice|onion|broccoli|avocado|corn|garlic|ginger|mushroom|olive|shrimp|crab|nut/i, "Comida"],
  [/badge-(dollar|euro|rupee|yen|ruble|lira|pound|cent)|banknote|wallet|money|piggy|vault|receipt|percent|candlestick|trending|bitcoin|coin|dollar|euro|hand-coins/i, "Finanzas"],
  [/bot|chip|circuit|microchip|antenna|satellite|robot|cpu|scan-eye|qr|binary|brain-circuit/i, "Tecnología"],
  [/bird|binoculars|tree|leaf|flower|sprout|paw|fish|turtle|rabbit|cat|dog|squirrel|snail|worm|bug$|rat|otter|panda|cow|pig|chicken|mountain|rock|stone|leafy|forest|duck|swan|owl|amphora|shell/i, "Naturaleza"],
  [/heart-crack|smile|frown|laugh|face-|ghost|skull|feather|flame|droplet|hand-heart|angry|annoyed|meh|kiss/i, "Emociones"],
  [/cloud|rain|snow|wind|sun|moon|rainbow|tornado|thunder|lightning|fog|hail|meteor|eclipse/i, "Clima"],
  [/code|git-|terminal|json|xml|braces|brackets|function-slash|variable|binary|cpu|database|server|hard-drive|file-code|square-terminal|file-terminal|file-json|script|regex/i, "Desarrollo"],
  [/chart|graph|gauge|activity|pie|axis|scatter|spline/i, "Gráficas"],
  [/mail|message|chat|send|at-sign|link|share|megaphone|rss|voicemail|inbox|reply|forward|quote|comment|bell/i, "Comunicación"],
  [/music|audio|song|mic|volume|headphone|speaker|drum|piano|guitar|radio|album|vinyl|playlist|sound|waveform|boom/i, "Música"],
  [/image|video|camera|film|movie|photo|picture|clapperboard|aperture|webcam|projector|airplay|cast|screen|monitor-play/i, "Multimedia"],
  [/game|dice|sword|puzzle|controller|joystick|spade|card|chest|wand|potion|bomb|bow-arrow|crosshair|target/i, "Juegos"],
  [/plane|car|bus|train|tram|ship|boat|sailboat|bike|luggage|suitcase|^map|compass|navigation|hotel|tent|passport|fuel|gas|road|railway|scooter|helicopter|subway|ferry|taxi/i, "Viajes"],
  [/house|home|sofa|bed|lamp|door|window|chair|table|bath|kitchen|fridge|washing|tv|microwave|blender|toaster|rug|shelf|vase|brick-wall|box|armchair|rocking/i, "Hogar"],
  [/monitor|laptop|mouse|keyboard|printer|phone|tablet|usb|router|webcam|watch|plug|battery|charger|drive|memory|bolt|cable/i, "Dispositivos"],
  [/smartphone|sim|signal|wifi|bluetooth|cell|mobile/i, "Celular"],
  [/lock|key|shield|password|fingerprint|^eye|scan|radar|security|privacy|badge|verified|certificate|id-card/i, "Seguridad"],
  [/user|person|users|contact|account|avatar|circle-user|biceps|accessibility/i, "Usuarios"],
  [/^file|folder|document|paper|clipboard|pen|pencil|book|library|stamp|^sign|^print|archive|sticky|note|eraser|ruler|scissors|binder|bold|italic|underline|text|heading|list|baseline|type/i, "Oficina"],
  [/palette|brush|pen-tool|shape|spline|layers|crop|wand-sparkles|color|contrast|blend|vector|anchor$|bezier|frame|layout|grid|panel|sidebar|blocks|paint/i, "Diseño"],
  [/pill|syringe|dna|bandage|hospital|ambulance|microscope|test-tube|stethoscope|medical|health|thermometer|bone|baby|vitamin|fracture/i, "Salud"],
  [/clock|calendar|timer|hourglass|alarm|date|time|schedule|history/i, "Tiempo"],
  [/^map|pin|location|globe|earth|route|navigation|^flag|compass/i, "Mapas"],
  [/arrow|chevron|move|corner|expand|collapse|unfold|fold|zoom/i, "Flechas"],
  [/barcode|baggage|shop|store|cart|tag|coupon|handshake|truck|package|shopping/i, "Comercio"],
];

function categorize(name) {
  for (const [re, cat] of RULES) if (re.test(name)) return cat;
  return "UI";
}

const target = Number(process.argv[2] ?? 600);
const picks = realUnused.filter(n => !JUNK.some(re => re.test(n))).slice(0, target);

let out = "";
for (const name of picks) {
  const cat = categorize(name);
  const pretty = name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const tags = [...new Set([...name.split("-"), cat.toLowerCase()])].slice(0, 5);
  out += `  { file: "${name}-icon", name: "${pretty}", category: "${cat}", tags: ${JSON.stringify(tags)} },\n`;
}
const manifest = readFileSync("scripts/icon-manifest.mjs", "utf8");
writeFileSync("scripts/icon-manifest.mjs", manifest.replace(/;\s*$/, "\n" + out + "];\n"));
console.log(`añadidos ${picks.length} → total ${(manifest.match(/file:/g) || []).length + picks.length}`);
const cats = {};
for (const n of picks) { const c = categorize(n); cats[c] = (cats[c] || 0) + 1; }
console.log(Object.entries(cats).sort((a, b) => b[1] - a[1]).map(([c, n]) => `${n} ${c}`).join(" · "));

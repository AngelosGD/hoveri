/**
 * Central manifest for the icon library.
 * `file` must match the exported component file in icons/.
 * `category` groups icons on the library page.
 */
export const ICON_MANIFEST = [
  // UI essentials
  { file: "heart-icon", name: "Heart", category: "UI essentials", tags: ["heart", "love", "favorite", "like"] },
  { file: "star-icon", name: "Star", category: "UI essentials", tags: ["star", "favorite", "rating"] },
  { file: "moon-icon", name: "Moon", category: "UI essentials", tags: ["moon", "night", "dark"] },
  { file: "sun-icon", name: "Sun", category: "UI essentials", tags: ["sun", "day", "light", "weather"] },
  { file: "check-icon", name: "Check", category: "UI essentials", tags: ["check", "done", "success"] },
  { file: "bookmark-icon", name: "Bookmark", category: "UI essentials", tags: ["bookmark", "save", "favorite"] },
  { file: "settings-icon", name: "Settings", category: "UI essentials", tags: ["settings", "gear", "configuration"] },
  { file: "copy-icon", name: "Copy", category: "UI essentials", tags: ["copy", "duplicate", "clipboard"] },
  { file: "send-icon", name: "Send", category: "UI essentials", tags: ["send", "message", "plane", "paper"] },
  { file: "bell-icon", name: "Bell", category: "UI essentials", tags: ["bell", "notification", "alert"] },
  { file: "camera-icon", name: "Camera", category: "Media", tags: ["camera", "photo", "image", "lens"] },
  { file: "coffee-icon", name: "Coffee", category: "Comida", tags: ["coffee", "cafe", "drink", "break"] },
  { file: "rocket-icon", name: "Rocket", category: "UI essentials", tags: ["rocket", "launch", "ship"] },

  // Celular y móvil
  { file: "smartphone-icon", name: "Smartphone", category: "Celular", tags: ["smartphone", "phone", "mobile", "cell"] },
  { file: "tablet-icon", name: "Tablet", category: "Celular", tags: ["tablet", "screen", "device"] },
  { file: "laptop-icon", name: "Laptop", category: "Celular", tags: ["laptop", "computer", "notebook"] },
  { file: "monitor-icon", name: "Monitor", category: "Celular", tags: ["monitor", "screen", "display"] },
  { file: "battery-icon", name: "Battery", category: "Celular", tags: ["battery", "charge", "power"] },
  { file: "battery-charging-icon", name: "Battery charging", category: "Celular", tags: ["battery", "charging", "power", "energy"] },
  { file: "wifi-icon", name: "Wifi", category: "Celular", tags: ["wifi", "wireless", "internet", "signal"] },
  { file: "bluetooth-icon", name: "Bluetooth", category: "Celular", tags: ["bluetooth", "wireless", "connect"] },
  { file: "signal-icon", name: "Signal", category: "Celular", tags: ["signal", "antenna", "bars", "network"] },
  { file: "phone-icon", name: "Phone", category: "Celular", tags: ["phone", "call", "telephone"] },

  // Desarrollo y código
  { file: "code-icon", name: "Code", category: "Desarrollo", tags: ["code", "coding", "developer", "programming"] },
  { file: "terminal-icon", name: "Terminal", category: "Desarrollo", tags: ["terminal", "console", "command", "shell"] },
  { file: "git-branch-icon", name: "Git branch", category: "Desarrollo", tags: ["git", "branch", "version", "control"] },
  { file: "database-icon", name: "Database", category: "Desarrollo", tags: ["database", "data", "storage"] },
  { file: "server-icon", name: "Server", category: "Desarrollo", tags: ["server", "hosting", "backend"] },
  { file: "cpu-icon", name: "CPU", category: "Desarrollo", tags: ["cpu", "chip", "processor", "hardware"] },
  { file: "file-code-icon", name: "File code", category: "Desarrollo", tags: ["file", "code", "source", "programming"] },
  { file: "languages-icon", name: "Languages", category: "Desarrollo", tags: ["languages", "translate", "code", "i18n"] },
  { file: "calculator-icon", name: "Calculator", category: "Desarrollo", tags: ["calculator", "math", "numbers"] },
  { file: "bug-icon", name: "Bug", category: "Desarrollo", tags: ["bug", "insect", "error", "debug"] },

  // Comida
  { file: "pizza-icon", name: "Pizza", category: "Comida", tags: ["pizza", "food", "italian"] },
  { file: "beer-icon", name: "Beer", category: "Comida", tags: ["beer", "drink", "bar"] },
  { file: "donut-icon", name: "Donut", category: "Comida", tags: ["donut", "doughnut", "sweet", "dessert"] },
  { file: "ice-cream-bowl-icon", name: "Ice cream", category: "Comida", tags: ["ice", "cream", "dessert", "sweet"] },
  { file: "cake-icon", name: "Cake", category: "Comida", tags: ["cake", "dessert", "birthday"] },
  { file: "apple-icon", name: "Apple", category: "Comida", tags: ["apple", "fruit", "healthy"] },
  { file: "sandwich-icon", name: "Sandwich", category: "Comida", tags: ["sandwich", "food", "lunch"] },
  { file: "utensils-icon", name: "Utensils", category: "Comida", tags: ["utensils", "fork", "knife", "eat", "food"] },
  { file: "croissant-icon", name: "Croissant", category: "Comida", tags: ["croissant", "bread", "breakfast", "pastry"] },
  { file: "popcorn-icon", name: "Popcorn", category: "Comida", tags: ["popcorn", "movie", "snack"] },

  // Clima y naturaleza
  { file: "cloud-icon", name: "Cloud", category: "Clima", tags: ["cloud", "weather", "sky"] },
  { file: "cloud-rain-icon", name: "Cloud rain", category: "Clima", tags: ["cloud", "rain", "weather", "water"] },
  { file: "cloud-snow-icon", name: "Cloud snow", category: "Clima", tags: ["cloud", "snow", "winter", "cold"] },
  { file: "cloud-lightning-icon", name: "Lightning", category: "Clima", tags: ["lightning", "storm", "thunder", "cloud"] },
  { file: "cloud-sun-icon", name: "Cloud sun", category: "Clima", tags: ["cloud", "sun", "weather", "partly"] },
  { file: "snowflake-icon", name: "Snowflake", category: "Clima", tags: ["snowflake", "snow", "winter", "cold"] },
  { file: "wind-icon", name: "Wind", category: "Clima", tags: ["wind", "air", "weather", "breeze"] },
  { file: "umbrella-icon", name: "Umbrella", category: "Clima", tags: ["umbrella", "rain", "protection"] },
  { file: "rainbow-icon", name: "Rainbow", category: "Clima", tags: ["rainbow", "colors", "sky", "rain"] },
  { file: "tornado-icon", name: "Tornado", category: "Clima", tags: ["tornado", "wind", "storm", "spin"] },

  // Música y audio
  { file: "music-icon", name: "Music", category: "Música", tags: ["music", "note", "song"] },
  { file: "music-2-icon", name: "Music note", category: "Música", tags: ["music", "note", "song"] },
  { file: "headphones-icon", name: "Headphones", category: "Música", tags: ["headphones", "audio", "listen", "music"] },
  { file: "mic-icon", name: "Mic", category: "Música", tags: ["mic", "microphone", "voice", "record"] },
  { file: "play-icon", name: "Play", category: "Música", tags: ["play", "video", "music", "media"] },
  { file: "pause-icon", name: "Pause", category: "Música", tags: ["pause", "video", "music", "media"] },
  { file: "volume-2-icon", name: "Volume", category: "Música", tags: ["volume", "sound", "loud", "audio"] },
  { file: "clapperboard-icon", name: "Clapperboard", category: "Música", tags: ["clapperboard", "film", "movie", "action"] },
  { file: "gamepad-icon", name: "Gamepad", category: "Música", tags: ["gamepad", "controller", "gaming", "play"] },
  { file: "film-icon", name: "Film", category: "Música", tags: ["film", "movie", "video", "reel"] },

  // Viajes y mapas
  { file: "plane-icon", name: "Plane", category: "Viajes", tags: ["plane", "airplane", "travel", "flight"] },
  { file: "car-icon", name: "Car", category: "Viajes", tags: ["car", "vehicle", "travel", "drive"] },
  { file: "bus-icon", name: "Bus", category: "Viajes", tags: ["bus", "vehicle", "transport"] },
  { file: "ship-icon", name: "Ship", category: "Viajes", tags: ["ship", "boat", "sea", "travel"] },
  { file: "compass-icon", name: "Compass", category: "Viajes", tags: ["compass", "direction", "navigate", "travel"] },
  { file: "map-icon", name: "Map", category: "Viajes", tags: ["map", "travel", "navigation"] },
  { file: "navigation-icon", name: "Navigation", category: "Viajes", tags: ["navigation", "gps", "direction", "arrow"] },
  { file: "map-pin-icon", name: "Map pin", category: "Viajes", tags: ["pin", "location", "map", "address"] },
  { file: "ticket-icon", name: "Ticket", category: "Viajes", tags: ["ticket", "entrance", "event"] },
  { file: "anchor-icon", name: "Anchor", category: "Viajes", tags: ["anchor", "ship", "sea", "marine"] },

  // Hogar
  { file: "house-icon", name: "Home", category: "Hogar", tags: ["home", "house", "living"] },
  { file: "lamp-icon", name: "Lamp", category: "Hogar", tags: ["lamp", "light", "desk"] },
  { file: "sofa-icon", name: "Sofa", category: "Hogar", tags: ["sofa", "couch", "furniture", "living"] },
  { file: "bed-icon", name: "Bed", category: "Hogar", tags: ["bed", "sleep", "rest"] },
  { file: "lightbulb-icon", name: "Lightbulb", category: "Hogar", tags: ["lightbulb", "idea", "light"] },
  { file: "tv-icon", name: "TV", category: "Hogar", tags: ["tv", "television", "screen"] },
  { file: "keyboard-icon", name: "Keyboard", category: "Hogar", tags: ["keyboard", "type", "key", "input"] },
  { file: "printer-icon", name: "Printer", category: "Hogar", tags: ["printer", "print", "paper"] },
  { file: "thermometer-icon", name: "Thermometer", category: "Hogar", tags: ["thermometer", "temperature", "hot"] },
  { file: "washing-machine-icon", name: "Washing machine", category: "Hogar", tags: ["washing", "machine", "laundry", "clean"] },

  // Negocios y dinero
  { file: "dollar-sign-icon", name: "Dollar", category: "Negocios", tags: ["dollar", "money", "currency", "cash"] },
  { file: "bitcoin-icon", name: "Bitcoin", category: "Negocios", tags: ["bitcoin", "crypto", "money", "currency"] },
  { file: "credit-card-icon", name: "Credit card", category: "Negocios", tags: ["card", "credit", "payment", "money"] },
  { file: "wallet-icon", name: "Wallet", category: "Negocios", tags: ["wallet", "money", "payment"] },
  { file: "tag-icon", name: "Tag", category: "Negocios", tags: ["tag", "label", "price", "sale"] },
  { file: "receipt-icon", name: "Receipt", category: "Negocios", tags: ["receipt", "invoice", "bill", "shop"] },
  { file: "shopping-cart-icon", name: "Shopping cart", category: "Negocios", tags: ["cart", "shopping", "buy", "store"] },
  { file: "trending-up-icon", name: "Trending up", category: "Negocios", tags: ["trending", "up", "growth", "chart"] },
  { file: "chart-pie-icon", name: "Pie chart", category: "Negocios", tags: ["pie", "chart", "stats", "data"] },
  { file: "coins-icon", name: "Coins", category: "Negocios", tags: ["coins", "money", "currency", "cash"] },

  // Deportes y recompensas
  { file: "trophy-icon", name: "Trophy", category: "Deportes", tags: ["trophy", "award", "winner", "prize"] },
  { file: "medal-icon", name: "Medal", category: "Deportes", tags: ["medal", "award", "winner", "olympics"] },
  { file: "target-icon", name: "Target", category: "Deportes", tags: ["target", "goal", "aim", "shoot"] },
  { file: "gift-icon", name: "Gift", category: "Deportes", tags: ["gift", "present", "birthday", "reward"] },
  { file: "sparkle-icon", name: "Sparkle", category: "Deportes", tags: ["sparkle", "shine", "glow", "star"] },
  { file: "palette-icon", name: "Palette", category: "Deportes", tags: ["palette", "colors", "art", "design"] },
  { file: "gem-icon", name: "Gem", category: "Deportes", tags: ["gem", "diamond", "jewel", "premium"] },
];
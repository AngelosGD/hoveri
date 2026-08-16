export interface IconMeta {
  name: string;
  file: string;
  category: string;
  tags: string[];
}

export const ICON_LIST: IconMeta[] = [
  {
    name: "Heart",
    file: "heart-icon",
    category: "UI essentials",
    tags: ["heart", "love", "favorite", "like"],
  },
  {
    name: "Star",
    file: "star-icon",
    category: "UI essentials",
    tags: ["star", "favorite", "rating"],
  },
  {
    name: "Rocket",
    file: "rocket-icon",
    category: "UI essentials",
    tags: ["rocket", "launch", "ship"],
  },
  {
    name: "Send",
    file: "send-icon",
    category: "Actions",
    tags: ["send", "message", "share"],
  },
  {
    name: "Moon",
    file: "moon-icon",
    category: "UI essentials",
    tags: ["moon", "night", "dark"],
  },
  {
    name: "Sun",
    file: "sun-icon",
    category: "UI essentials",
    tags: ["sun", "day", "light"],
  },
  {
    name: "Copy",
    file: "copy-icon",
    category: "Actions",
    tags: ["copy", "duplicate", "clipboard"],
  },
  {
    name: "Check",
    file: "check-icon",
    category: "UI essentials",
    tags: ["check", "done", "success"],
  },
  {
    name: "Bookmark",
    file: "bookmark-icon",
    category: "UI essentials",
    tags: ["bookmark", "save", "favorite"],
  },
  {
    name: "Bell",
    file: "bell-icon",
    category: "Status",
    tags: ["bell", "notification", "alert"],
  },
  {
    name: "Settings",
    file: "settings-icon",
    category: "Actions",
    tags: ["settings", "gear", "configuration"],
  },
  {
    name: "Coffee",
    file: "coffee-icon",
    category: "Lifestyle",
    tags: ["coffee", "drink", "break"],
  },
  {
    name: "Camera",
    file: "camera-icon",
    category: "Media",
    tags: ["camera", "photo", "image"],
  },
];

export function getIconCount(): number {
  return ICON_LIST.length;
}

export function getFeaturedIcons(limit = 5): IconMeta[] {
  return ICON_LIST.slice(-limit).reverse();
}
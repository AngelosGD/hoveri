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
];

export function getIconCount(): number {
  return ICON_LIST.length;
}
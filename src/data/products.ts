export type Platform = "web" | "windows" | "android" | "ios" | "steam" | "other";

export type Product = {
  slug: string;
  title: string;
  short: string;
  platforms: Platform[];
  playUrl?: string;
  downloadUrl?: string;
  status?: "released" | "demo" | "dev";
};

export const products: Product[] = [
  {
    slug: "highroll",
    title: "HighRoll",
    short: "カード×役職×読み合いのオンライン対戦ゲーム。",
    platforms: ["web"],
    playUrl: "https://highroll.reak1161.com/",
    status: "released",
  },
  {
    slug: "mahjong-score-practice",
    title: "Mahjong Score Practice",
    short: "Mahjong scoring practice app.",
    platforms: ["web"],
    playUrl: "https://mahjong.reak1161.com/",
    status: "released",
  },
  {
    slug: "three-turn",
    title: "Three Turn",
    short: "Three-turn web app.",
    platforms: ["web"],
    playUrl: "https://three-turn.reak1161.com/",
    status: "released",
  },
];

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
    title: "ハイロール",
    short: "カード×役職×読み合いのオンライン対戦ゲーム",
    platforms: ["web"],
    playUrl: "https://highroll.reak1161.com/",
    status: "released",
  },
  {
    slug: "mahjong-score-practice",
    title: "麻雀点数計算練習用サイト",
    short: "麻雀の点数計算練習ができるツール",
    platforms: ["web"],
    playUrl: "https://mahjong.reak1161.com/",
    status: "released",
  },
  {
    slug: "three-turn",
    title: "３ターンで終わるゲーム",
    short: "３ターンで終わる正体秘匿系ゲーム",
    platforms: ["web"],
    playUrl: "https://three-turn.reak1161.com/",
    status: "released",
  },
];

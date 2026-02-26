export type NewsItem = {
  id: string;
  date: string;   // YYYY-MM-DD
  title: string;
  body: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "2026-02-22-portal",
    date: "2026-02-22",
    title: "ポータルサイトを公開しました",
    body: "reak Games のポータルサイトを公開し、各作品ページへの導線を整えました。",
  },
  {
    id: "2026-02-22-highroll",
    date: "2026-02-22",
    title: "HighRoll を掲載しました",
    body: "HighRoll の作品ページを追加し、概要とプレイリンクを公開しました。",
  },
  {
    id: "2026-02-24-mahjong-score-practice",
    date: "2026-02-24",
    title: "麻雀点数計算練習用サイトを掲載しました",
    body: "麻雀点数計算練習用サイトの作品ページを追加し、概要とプレイリンクを公開しました。",
  },
  {
    id: "2026-02-26-three-turn",
    date: "2026-02-26",
    title: "３ターンで終わるゲームを掲載しました",
    body: "３ターンで終わるゲームの作品ページを追加し、概要とプレイリンクを公開しました。",
  }
];
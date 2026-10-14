import { Link } from "react-router-dom";
import { products } from "../data/products";
import { newsItems } from "../data/news";
import Featured from "../components/Featured";

export default function Home() {
  const featured = products.slice(0, 3);
  const latestNews = [...newsItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div>
      <h2>Latest News</h2>
      <div style={{ display: "grid", gap: 14, marginBottom: 12 }}>
        {latestNews.map((item) => (
          <div className="card" key={item.id}>
            <div className="muted">{item.date}</div>
            <h3 style={{ marginTop: 8, marginBottom: 6 }}>{item.title}</h3>
            <p className="muted" style={{ marginTop: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 24 }}>
        <Link className="btn" to="/news">お知らせ一覧を見る</Link>
      </div>

      <Featured products={featured} />

      <h2 style={{ marginTop: 24 }}>All</h2>
      <Link className="btn" to="/games">ゲーム一覧を見る</Link>
    </div>
  );
}

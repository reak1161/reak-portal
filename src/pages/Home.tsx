import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Home() {
  return (
    <div>
      <h2>Featured</h2>
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.slug}>
            <div className="muted">
              {p.platforms.map((pl) => (
                <span className="badge" key={pl}>{pl}</span>
              ))}
              {p.status && <span className="badge">{p.status}</span>}
            </div>
            <h3 style={{ marginTop: 10, marginBottom: 6 }}>{p.title}</h3>
            <p className="muted" style={{ marginTop: 0 }}>{p.short}</p>
            <Link className="btn" to={`/games/${p.slug}`}>詳細</Link>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 24 }}>All</h2>
      <Link className="btn" to="/games">ゲーム一覧を見る</Link>
    </div>
  );
}
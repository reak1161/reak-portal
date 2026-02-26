import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Games() {
  return (
    <div>
      <h2>Games / Products</h2>
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
            <Link className="btn" to={`/games/${p.slug}`}>開く</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function GameDetail() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div>
        <p>Not found.</p>
        <Link className="btn" to="/games">Back</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="muted">
        {p.platforms.map((pl) => (
          <span className="badge" key={pl}>{pl}</span>
        ))}
        {p.status && <span className="badge">{p.status}</span>}
      </div>

      <h2 style={{ marginTop: 10 }}>{p.title}</h2>
      <p className="muted">{p.short}</p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {p.playUrl && (
          <a className="btn" href={p.playUrl} target="_blank" rel="noreferrer">遊ぶ</a>
        )}
        {p.downloadUrl && (
          <a className="btn" href={p.downloadUrl} target="_blank" rel="noreferrer">Download</a>
        )}
        <Link className="btn" to="/games">戻る</Link>
      </div>
    </div>
  );
}
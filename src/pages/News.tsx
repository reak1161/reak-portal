import { newsItems } from "../data/news";

export default function News() {
  const sortedNews = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      <h2>News</h2>
      <div style={{ display: "grid", gap: 14 }}>
        {sortedNews.map((item) => (
          <div className="card" key={item.id}>
            <div className="muted">{item.date}</div>
            <h3 style={{ marginTop: 8, marginBottom: 6 }}>{item.title}</h3>
            <p className="muted" style={{ marginTop: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
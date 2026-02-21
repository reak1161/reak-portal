import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header className="container">
        <h1 style={{ marginBottom: 6 }}>りーくのぺーじ</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          いろいろまとめる
        </p>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container footer">
        <div className="muted">© {new Date().getFullYear()} Reak Games</div>
      </footer>
    </div>
  );
}
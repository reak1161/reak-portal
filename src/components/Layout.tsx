import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header className="container">
        <h1 style={{ marginBottom: 6 }}>りーくのぺーじ</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          個人制作のゲームやツールをまとめたポータルサイトです。
          Web作品のプレイリンクや、各作品の概要・更新情報を掲載しています。
        </p>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container footer">
        <div className="muted">© {new Date().getFullYear()} reak Games</div>
      </footer>
    </div>
  );
}

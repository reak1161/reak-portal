import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import type { Product } from "../data/products";

const SCROLL_STEP = 320;

export default function Featured({ products }: { products: Product[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage || products.length < 2) return;
    const media = window.matchMedia(
      "(min-width: 761px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!media.matches) return;
      const top = parseFloat(getComputedStyle(stage).top);
      const progress = Math.max(0, Math.min(products.length - 1,
        (top - section.getBoundingClientRect().top) / SCROLL_STEP));
      stage.style.setProperty("--progress", String(progress));
      section.querySelectorAll<HTMLElement>(".featured-card").forEach((card, index) => {
        const distance = Math.min(1, Math.abs(index - progress));
        card.style.opacity = String(1 - distance * 0.55);
        card.style.transform = `scale(${1 - distance * 0.04})`;
      });
      setSelected(Math.round(progress));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const configure = () => {
      setAnimated(media.matches);
      schedule();
    };
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", configure);
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", configure);
    };
  }, [products.length]);

  const select = (index: number, behavior: ScrollBehavior = "smooth") => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;
    if (animated) {
      const top = parseFloat(getComputedStyle(stage).top);
      window.scrollTo({
        top: window.scrollY + section.getBoundingClientRect().top - top + index * SCROLL_STEP,
        behavior,
      });
    } else {
      setSelected(index);
    }
  };

  const product = products[selected] ?? products[0];
  if (!product) return null;

  return (
    <section className="featured" ref={sectionRef} aria-labelledby="featured-heading"
      data-animated={animated} style={{ "--steps": products.length - 1 } as CSSProperties}>
      <div className="featured-stage" ref={stageRef}>
        <h2 id="featured-heading">Featured</h2>
        <div className="featured-layout">
          <div className="featured-window" role="group" aria-label="注目の作品を選ぶ">
            <div className="featured-track">
              {products.map((item, index) => (
                <button type="button" className="card featured-card" key={item.slug}
                  aria-pressed={index === selected} aria-controls="featured-preview"
                  onFocus={event => {
                    if (animated && event.currentTarget.matches(":focus-visible")) select(index, "instant");
                  }}
                  onClick={() => select(index)}>
                  <span className="muted featured-meta">
                    {item.platforms.map(platform => <span className="badge" key={platform}>{platform}</span>)}
                    {item.status && <span className="badge">{item.status}</span>}
                  </span>
                  <span className="featured-title">{item.title}</span>
                  <span className="muted">{item.short}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="card featured-preview" id="featured-preview">
            <div className="featured-preview-content" key={product.slug}>
              {product.imageUrl && <img className="featured-image" src={product.imageUrl}
                alt={product.imageAlt ?? `${product.title}の画面`} />}
              <div className="muted">{String(selected + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}</div>
              <h3>{product.title}</h3>
              <p className="muted">{product.short}</p>
            </div>
            <Link className="btn" to={`/games/${product.slug}`}>
              詳細を見る <span className="link-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

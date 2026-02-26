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

  const isHighroll = p.slug === "highroll";
  const isMahjong = p.slug === "mahjong-score-practice";
  const isThreeTurn = p.slug === "three-turn-game";

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

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        {p.playUrl && (
          <a className="btn" href={p.playUrl} target="_blank" rel="noreferrer">
            Play
          </a>
        )}
        {p.downloadUrl && (
          <a className="btn" href={p.downloadUrl} target="_blank" rel="noreferrer">
            Download
          </a>
        )}
        <Link className="btn" to="/games">Back</Link>
      </div>

      {isHighroll && (
        <>
          <h3>ゲーム概要</h3>
          <p>
            ハイロールは、カードの効果と役職の能力を組み合わせて戦う、
            読み合い重視のオンライン対戦ゲームです。
            相手の行動を予測しながら、手札や役職の使いどころを見極めることが重要になります。
          </p>

          <h3>特徴</h3>
          <ul>
            <li>カード効果と役職能力を組み合わせた駆け引き</li>
            <li>オンラインで複数人対戦が可能</li>
            <li>短時間でも遊びやすいテンポ感</li>
          </ul>

          <h3>遊び方</h3>
          <p>
            ルームを作成または参加し、ゲーム開始後は手札や役職を使って相手と勝負します。
            状況に応じてカードを使い分け、相手の選択を読んで有利に立ち回ることが勝利への鍵です。
          </p>

          <h3>対応環境</h3>
          <p>
            ブラウザからプレイできる Web 版です。PC 環境での利用を想定しています。
          </p>

          <h3>開発状況</h3>
          <p>
            現在公開中です。今後もルール調整や機能追加を行う場合があります。
          </p>
        </>
      )}

      {isMahjong && (
        <>
          <h3>ツール概要</h3>
          <p>
            麻雀点数計算練習用サイトは、麻雀の点数計算に慣れるための学習用 Web ツールです。
            符や翻の考え方を確認しながら、実際の点数計算を繰り返し練習できるように設計しています。
          </p>

          <h3>特徴</h3>
          <ul>
            <li>麻雀の点数計算を繰り返し練習できる</li>
            <li>学習用として短時間でも使いやすい</li>
            <li>点数計算に慣れたい人向けのシンプルな構成</li>
          </ul>

          <h3>使い方</h3>
          <p>
            問題を見ながら点数を考え、答え合わせを通じて計算の流れを確認します。
            何度も繰り返し使うことで、実戦で素早く点数を判断しやすくなることを目指しています。
          </p>

          <h3>対象</h3>
          <p>
            麻雀を覚え始めた人や、点数計算に苦手意識がある人向けの学習用ツールです。
          </p>

          <h3>対応環境</h3>
          <p>
            ブラウザから利用できる Web 版です。PC 環境での利用を想定しています。
          </p>
        </>
      )}

      {isThreeTurn && (
        <>
          <h3>ゲーム概要</h3>
          <p>
            3ターンで終わるゲームは、短いラウンドで勝負が決まる正体秘匿系の対戦ゲームです。
            限られたターン数の中で、相手の思考を読みながら最適な行動を選ぶことが求められます。
          </p>

          <h3>特徴</h3>
          <ul>
            <li>1ゲームが短く、テンポよく遊べる</li>
            <li>短いターン数の中で濃い読み合いが発生する</li>
            <li>正体秘匿要素による駆け引きを楽しめる</li>
          </ul>

          <h3>遊び方</h3>
          <p>
            各プレイヤーは限られた情報の中で行動を選び、3ターンの終了時点で勝敗を決定します。
            相手の狙いを読みながら、少ない手数で有利を作ることが重要です。
          </p>

          <h3>こんな人におすすめ</h3>
          <p>
            短時間で遊べる対戦ゲームや、読み合い・心理戦が好きな人に向いています。
          </p>

          <h3>対応環境</h3>
          <p>
            ブラウザからプレイできる Web 版です。PC 環境での利用を想定しています。
          </p>
        </>
      )}
    </div>
  );
}
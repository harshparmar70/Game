import { Play } from "lucide-react";
// Props: game (object)
function GameCard({ game }) {
  const { title, category, plays, icon, colors } = game;
  // CSS gradient placeholder instead of an image
  const thumbStyle = {
    background: `linear-gradient(135deg, ${colors[0]},
${colors[1]})`,
  };
  return (
    <article className="game-card">
      <div className="game-card__thumb" style={thumbStyle}>
        <span className="game-card__icon" aria-hidden="true">
          {icon}
        </span>
        <span className="game-card__badge">{category}</span>
        <div className="game-card__overlay">
          <Play size={34} fill="currentColor" />
        </div>
      </div>
      <div className="game-card__info">
        <h3>{title}</h3>
        <p>{plays} plays</p>
      </div>
    </article>
  );
}
export default GameCard;

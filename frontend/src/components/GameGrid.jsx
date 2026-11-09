import GameCard from "./GameCard.jsx";
// Props: id (string), title (string), games (array), emptyMessage (string)
function GameGrid({ id, title, games, emptyMessage = "No games found." }) {
  return (
    <section id={id} className="container section">
      <h2 className="section__title">{title}</h2>
      {games.length === 0 ? (
        <p className="empty">{emptyMessage}</p>
      ) : (
        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  );
}
export default GameGrid;

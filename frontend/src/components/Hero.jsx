function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <p className="hero__tag">🎮 100% FREE · NO DOWNLOAD</p>
        <h1>
          Play the best <span className="accent">browser games</span>
          instantly
        </h1>
        <p className="hero__text">
          Discover, search and play action, puzzle, racing and arcade games
          right in your browser.
        </p>
        <div className="hero__buttons">
          <a href="#featured" className="btn btn--primary">
            Explore Games
          </a>
          <a href="#categories" className="btn btn--ghost">
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;

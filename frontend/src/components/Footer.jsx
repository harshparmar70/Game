function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__logo">
          Play<span className="accent">Verse</span>
        </p>
        <p className="footer__text">
          © {new Date().getFullYear()} PlayVerse. Built with React, Spring Boot
          and MySQL.
        </p>
      </div>
    </footer>
  );
}
export default Footer;

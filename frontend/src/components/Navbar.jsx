import { useState } from "react";
import { Gamepad2, Search, Menu, X } from "lucide-react";
// Props: searchTerm (string), onSearchChange (function)
function Navbar({ searchTerm, onSearchChange }) {
  // Local state: is the mobile menu open?
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          <Gamepad2 size={30} />
          <span>
            Play<span className="accent">Verse</span>
          </span>
        </a>
        <div className="navbar__search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search games..."
            aria-label="Search games"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>
        <nav className={`navbar__links ${menuOpen ? "open" : ""}`}>
          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Categories
          </a>
          <a href="#featured" onClick={() => setMenuOpen(false)}>
            Featured
          </a>
          <a href="#popular" onClick={() => setMenuOpen(false)}>
            Popular
          </a>
        </nav>
        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
export default Navbar;

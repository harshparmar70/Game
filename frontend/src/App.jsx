import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CategorySection from './components/CategorySection.jsx';
import GameGrid from './components/GameGrid.jsx';
import Footer from './components/Footer.jsx';
import { categories, games } from './data/games.js';
function App() {
// State lives here so Navbar and CategorySection can both change what GameGrid shows
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  // Filter by category AND search text
  const filteredGames = games.filter((game) => {
    const matchesCategory = activeCategory === 'All' || game.category ===
      activeCategory;
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const isFiltering = searchTerm.trim() !== '' || activeCategory !== 'All';
  const featuredGames = games.filter((game) => game.featured);
  const homePage = (
    <main>
      <Hero />
      <CategorySection
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      {isFiltering ? (
        <GameGrid id='results' title='Search Results' games={filteredGames}
          emptyMessage='No games match your search.' />
      ) : (
        <>
          <GameGrid id='featured' title='🔥 Featured Games' games=
            {featuredGames} />
          <GameGrid id='popular' title='⭐ Popular Games' games={games} />
        </>
      )}
    </main>
  );
  return (
    <div id='top'>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Routes>
        <Route path='/' element={homePage} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
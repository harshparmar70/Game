// Props: categories (array), activeCategory (string), onSelect (function)
function CategorySection({ categories, activeCategory, onSelect }) {
  return (
    <section id="categories" className="container section">
      <h2 className="section__title">Categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`chip ${
              category === activeCategory ? "chip--active" : ""
            }`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
export default CategorySection;

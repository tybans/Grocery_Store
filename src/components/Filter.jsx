import React, { useEffect, useState } from 'react';
import productsData from '../data/products';

function Filter({ selectedCategory, onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique categories dynamically
    const uniqueCategories = [...new Set(productsData.map(p => p.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="filter">
      <button
        className={!selectedCategory ? 'active' : ''}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? 'active' : ''}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;

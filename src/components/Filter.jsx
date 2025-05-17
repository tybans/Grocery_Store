import React, { useState, useEffect } from "react";
import productsData from "../data/products"; // Import all product details

// Filter component lets the user choose a category to filter products
function Filter(props) {
  const { selectedCategory, onSelectCategory } = props;

  // This state holds the list of all categories
  const [categories, setCategories] = useState([]);

  // This runs only once when the component is loaded
  useEffect(() => {
    // Get all categories from the products and remove duplicates
    const allCategories = productsData.map((product) => product.category);
    const uniqueCategories = [...new Set(allCategories)]; // Make them unique
    setCategories(uniqueCategories); // Save in state
  }, []);

  return (
    <div className="filter">
      {/* Button for showing all products */}
      <button
        className={!selectedCategory ? "active" : ""}
        onClick={() => onSelectCategory(null)} // Clear selected category
      >
        All
      </button>

      {/* Buttons for each unique category */}
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)} // Set selected category
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;

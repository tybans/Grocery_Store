import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products"; // This file contains all the product information

// ProductList component shows all products and filters them by category if selected
function ProductList(props) {
  const { selectedCategory, onAddToCart } = props;

  // This state stores the list of products to show
  const [products, setProducts] = useState([]);

  // Load product data when the component first loads
  useEffect(() => {
    setProducts(productsData); // Set the product list from the data file
  }, []);

  // Filter products by category if a category is selected
  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {/* Loop through the filtered products and show each one */}
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAddToCart} // Pass the function to add to cart
        />
      ))}
    </div>
  );
}

export default ProductList;

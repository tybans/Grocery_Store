// This component displays a list of products and allows filtering by category.

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products";

function ProductList({ selectedCategory, onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;

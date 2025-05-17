import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  // Selected product category for filtering
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Cart state, initialized from localStorage 
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart items to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // When a user selects a category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Add product to cart (increase quantity if it already exists)
  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);

      if (found) {
        // If product already exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add to cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="container">
      {/* Header with cart icon and total items */}
      <Header cartItems={cartItems} setCartItems={setCartItems} />

      {/* Category filter buttons */}
      <Filter
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* Main product listing area */}
      <main className="main-content">
        <ProductList
          selectedCategory={selectedCategory}
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
}

export default App;

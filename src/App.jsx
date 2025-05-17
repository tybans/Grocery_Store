import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    // Load initial cart from localStorage (only once)
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage on every update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="container">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Filter
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
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

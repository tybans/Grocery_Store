import React, { useState } from "react";
import Cart from "./Cart"; // Importing the Cart component

// Header component receives cartItems and setCartItems as props
function Header(props) {
  const { cartItems, setCartItems } = props;

  // State to control whether the cart is visible or not
  const [showCart, setShowCart] = useState(false);

  // Calculate the total number of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      {/* Header Section */}
      <header className="header-content">
        <h1>Mini Grocery Store</h1>

        {/* Cart icon area - clicking will show the cart */}
        <div className="cart-icon" onClick={() => setShowCart(true)}>
          <span role="img" aria-label="cart" style={{ fontSize: "30px" }}>
            🛒
          </span>

          {/* Badge shows total items in cart */}
          <span className="badge-style">{totalQuantity}</span>
        </div>
      </header>

      {/* Show Cart component when showCart is true */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setShowCart(false)} // Pass a function to close the cart
        />
      )}
    </>
  );
}

export default Header;

import React, { useState } from "react";
import Cart from "./Cart";

function Header({ cartItems, setCartItems }) {
  const [showCart, setShowCart] = useState(false);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="header-content">
        <h1>Mini Grocery Store</h1>
        <div className="cart-icon" onClick={() => setShowCart(true)}>
          <span role="img" aria-label="cart" style={{ fontSize: "30px" }}>
            🛒
          </span>
          <span className="badge-style">{totalQuantity}</span>
        </div>
      </header>

      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
}

export default Header;

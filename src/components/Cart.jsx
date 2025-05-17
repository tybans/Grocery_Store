import React, { useEffect } from 'react';

function Cart({ cartItems, setCartItems, onClose }) {
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [setCartItems]);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal-backdrop" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  {item.name} (x{item.quantity})
                </div>
                <div>&#8377;{(item.price * item.quantity).toFixed(2)}</div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
            <hr />
            <h3>Total: &#8377;{totalPrice.toFixed(2)}</h3>
          </>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Cart;

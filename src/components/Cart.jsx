import React, { useEffect } from 'react';

function Cart(props) {
  const { cartItems, setCartItems, onClose } = props;

  // Load saved cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart'); // Get cart from browser storage
    if (savedCart) {
      setCartItems(JSON.parse(savedCart)); // If found, set it to the current cart
    }
  }, [setCartItems]);

  // Save cart data to localStorage every time the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Save to localStorage
  }, [cartItems]);

  // Function to remove an item from the cart
  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart); // Update the cart without the removed item
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    // Clicking outside the modal will close the cart
    <div className="cart-modal-backdrop" onClick={onClose}>
      {/* Prevent click inside the cart modal from closing it */}
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Shopping Cart</h2>

        {/* Show message if cart is empty */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {/* List all items in the cart */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  {item.name} (x{item.quantity}) {/* Item name and quantity */}
                </div>
                <div>
                  ₹{(item.price * item.quantity).toFixed(2)} {/* Item total price */}
                </div>
                {/* Remove button for this item */}
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}

            <hr />

            {/* Show total price */}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </>
        )}

        {/* Button to close the cart */}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Cart;

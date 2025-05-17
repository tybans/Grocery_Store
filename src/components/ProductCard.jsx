import React from "react";

// ProductCard component shows one product and lets the user add it to the cart
function ProductCard(props) {
  const { product, onAdd } = props;

  // This function runs when the "Add to Cart" button is clicked
  const handleAddToCart = () => {
    onAdd(product); // Pass the product back to the parent component
  };

  return (
    <div className="product-card">
      {/* Product image */}
      <img className="product-image" src={product.image} alt={product.name} />

      {/* Product details */}
      <div className="product-details" >
        {/* Product name */}
        <h3>{product.name}</h3>

        {/* Product price (₹ symbol + 2 decimal places) */}
        <p>₹{product.price.toFixed(2)}</p>

        {/* Product category */}
        <small>{product.category}</small>
      </div>
      {/* <br /> */}

      {/* Button to add product to cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

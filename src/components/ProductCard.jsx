import React from "react";


function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>&#8377;{product.price.toFixed(2)}</p>
      <small>{product.category}</small>
      <br />
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard;
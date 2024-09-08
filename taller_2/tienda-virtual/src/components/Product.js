import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: {product.price}$</p>
        <button className="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from 'react';
import './Shop.css';

export default function Shop() {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop</h1>
      <div className="product-cards">
        <div className="product-card">
          <img
            src="/images/img1.jpg"
            alt="Product 1"
            className="product-image"
          />
          <div className="product-details">
            <h3>Product 1</h3>
            <p>Description of product 1.</p>
            <button className="shop-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img
            src="/images/img2.png"
            alt="Product 2"
            className="product-image"
          />
          <div className="product-details">
            <h3>Product 2</h3>
            <p>Description of product 2.</p>
            <button className="shop-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img
            src="/images/img3.png"
            alt="Product 3"
            className="product-image"
          />
          <div className="product-details">
            <h3>Product 3</h3>
            <p>Description of product 3.</p>
            <button className="shop-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Shop() {
  return (
    <div className="shopPage">
      <main className="shopContainer">
        <h1>Shop</h1>
        <p>Browse our featured items below.</p>

        <section className="productGrid">
          <div className="productCard">
            <div className="productImage"></div>
            <h2>Product One</h2>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="productCard">
            <div className="productImage"></div>
            <h2>Product Two</h2>
            <p>$24.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="productCard">
            <div className="productImage"></div>
            <h2>Product Three</h2>
            <p>$14.99</p>
            <button>Add to Cart</button>
          </div>
        </section>
      </main>
    </div>
  );
}
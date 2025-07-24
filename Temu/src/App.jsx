import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const products = [
    {
      title: "STRACER Velvet Gaming Chair",
      image: "/8.jpg",
      tag: "SUMMER SALE",
      price: 103.21,
      originalPrice: 139.99,
      sold: "959",
      rating: "★★★★☆",
      brand: "Soontrans",
      arrival: "Arrives in 2+ business days",
    },
    {
      title: "Men's Loafers",
      image: "/7.jpg",
      tag: "BEST SELLING",
      price: 25.14,
      originalPrice: 119.14,
      sold: "1.8K",
      rating: "★★★★☆",
      brand: "Walkers",
      arrival: "Arrives in 2+ business days",
    },
    {
      title: "Building Toy - iBLOCK",
      image: "/img6.jpg",
      tag: "Local",
      price: 16.65,
      originalPrice: 59.99,
      sold: "7.3K",
      rating: "★★★★★",
      brand: "iBLOCK",
      arrival: "Arrives in 2+ business days",
    },
    {
      title: "PS5 Console - Fortnite Edition",
      image: "/img5.jpg",
      tag: "Local",
      price: 544.87,
      originalPrice: 799.99,
      sold: "44",
      rating: "★★★★★",
      brand: "SONY",
      arrival: "Arrives in 2+ business days",
    },
    {
      title: "STRACER Velvet Gaming Chair",
      image: "/img4.jpg",
      tag: "SUMMER SALE",
      price: 103.21,
      originalPrice: 139.99,
      sold: "959",
      rating: "★★★★☆",
      brand: "Soontrans",
      arrival: "Arrives in 2+ business days",
    },
    {
      title: "Men's Loafers",
      image: "/img3.jpg",
      tag: "BEST SELLING",
      price: 25.14,
      originalPrice: 119.14,
      sold: "1.8K",
      rating: "★★★★☆",
    },
    {
      title: "Building Toy - iBLOCK",
      image: "/img2.jpg",
      tag: "Local",
      price: 16.65,
      originalPrice: 59.99,
      sold: "7.3K",
      rating: "★★★★★",
    },
    {
      title: "Building Toy - iBLOCK",
      image: "/img1.jpg",
      tag: "Local",
      price: 16.65,
      originalPrice: 59.99,
      sold: "7.3K",
      rating: "★★★★★",
    },
  ];
  return (
    <>
      <div>
        <div className={`background-content`}>
          <Header />
          <div className="card-grid">
            {products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const Header = () => {
  return (
    <div className="header-wrapper">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="logo">🛍️ TEMU</div>
        <div className="nav-links">
          <a href="#">Best-Selling Items</a>
          <a href="#">5-Star Rated</a>
          <a href="#">Summer Deals</a>
          <a href="#">New In</a>
          <a href="#">Categories ▾</a>
        </div>
        <div className="right-links">
          <input type="text" placeholder="ladies tops and blouses" />
          <button className="search-btn">🔍</button>
          <a href="#">Sign in / Register</a>
          <a href="#">Orders & Account</a>
          <a href="#">🛎️ Support</a>
          <a href="#">🇨🇦 English</a>
          <a href="#">🛒</a>
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        {/* Desktop Banner */}
        <div className="banner-content desktop-banner">
          <img src="/hero.jpg" alt="People shopping" />
        </div>

        {/* Mobile Banner */}
        <div className="mobile-banner">
          <img src="/mobilehero.jpg" alt="Mobile Banner" />
        </div>
      </div>

      {/* Sub-Heading */}
      <div className="sub-heading">
        <span>🌸 SUMMER SALE 🌸</span>
        <h2>Explore Interests, Save Big</h2>
      </div>
    </div>
  );
};
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <div className="card-content">
        <span className="label">{product.tag}</span>
        <div className="price-section">
          <span className="price">${product.price}</span>
          <span className="original-price">${product.originalPrice}</span>
        </div>
        <span className="sold">{product.sold} sold</span>
        <div className="rating">⭐ {product.rating}</div>
      </div>
    </div>
  );
};

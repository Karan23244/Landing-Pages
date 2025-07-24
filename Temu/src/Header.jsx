import React from "react";
import "./App.css";

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
        <div className="banner-content">
          <img src="/banner.png" alt="People shopping" />
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

export default Header;

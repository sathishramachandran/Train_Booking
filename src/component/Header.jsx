import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="irctc-header">
      <div className="nav-container">

        {/* Logo Section */}
        <div className="logo-section">
          <img
            src="https://www.irctc.co.in/nget/assets/images/logo.png"
            alt="IRCTC Logo"
            className="irctc-logo"
          />
          <h2 className="app-title">Train Ticket Booking</h2>
        </div>

        {/* Desktop Menu */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/search">Search Trains</a>
          <a href="/booking">Booking</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Login + Register */}
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </header>
  );
}

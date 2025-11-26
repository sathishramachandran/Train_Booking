import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Train</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Tickets</a>
          <a href="#">About</a>
        </nav>

        <button className="signin-btn">Sign In</button>
      </header>

      {/* HERO TEXT */}
      <div className="hero-content">
        <p className="hero-subtitle">Get your train tickets</p>
        <h1 className="hero-title">
          Find Best Train <span>For You!</span>
        </h1>
      </div>

      {/* SEARCH BOX */}
      <div className="search-box">
        <input type="text" placeholder="From..." />
        <input type="text" placeholder="To..." />
        <input type="date" />
        <button className="search-btn">Search</button>
      </div>

      {/* TRAIN IMAGES */}
      <div className="hero-images">
        <img src="/train1.png" alt="train1" className="train left" />
        <img src="/train2.png" alt="train2" className="train center" />
        <img src="/train3.png" alt="train3" className="train right" />
      </div>
    </div>
  );
};

export default Home;

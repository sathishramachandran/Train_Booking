import React from "react";
import "./Home.css";

import TrainHero from "../assets/Train.jpg";

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

      {/* FULL SCREEN HERO IMAGE */}
      <div className="hero-image">
        <img src={TrainHero} alt="Train Hero" />
      </div>

      {/* SEARCH BOX */}
      <div className="search-box">
        <input type="text" placeholder="From..." />
        <input type="text" placeholder="To..." />
        <input type="date" />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Home;

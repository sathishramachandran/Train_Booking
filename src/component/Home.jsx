import React, { useState } from "react";
import "./Home.css";
import TrainVideo from "../assets/trainviedo.mp4";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  function handleSigninSubmit(e) {
    e.preventDefault();
    setShowSignin(false);
  }

  const routes = [
    { from: "Kathmandu", hrs: "10 Hrs", to: "Pyuthan", price: "Rs. 1600" },
    { from: "Pokhara", hrs: "8 Hrs", to: "Kathmandu", price: "Rs. 1300" },
    { from: "Kathmandu", hrs: "12 Hrs", to: "Lumbini", price: "Rs. 2200" },
    { from: "Biratnagar", hrs: "6 Hrs", to: "Janakpur", price: "Rs. 950" },
    { from: "Dharan", hrs: "7 Hrs", to: "Ilam", price: "Rs. 1150" },
    { from: "Butwal", hrs: "9 Hrs", to: "Nepalgunj", price: "Rs. 1450" },
  ];

  return (
    <div className="home-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Train</div>

        <nav className="nav-links desktop-only">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Tickets</a>
          <a href="#">About</a>
        </nav>

        <div className="nav-actions">
          <button
            className="signin-btn desktop-only"
            onClick={() => setShowSignin(true)}
          >
            Sign In
          </button>

          <button
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Tickets</a>
          <a href="#">About</a>
          <button
            className="mobile-signin"
            onClick={() => {
              setShowSignin(true);
              setMenuOpen(false);
            }}
          >
            Sign In
          </button>
        </div>
      )}

      {/* VIDEO + WIDE PREMIUM FORM */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={TrainVideo} type="video/mp4" />
        </video>

        {/* SEARCH BOX ABOVE VIDEO */}
        <div className="search-box-overlay">
          <input type="text" placeholder="From..." />
          <input type="text" placeholder="To..." />
          <input type="date" />
          <button className="search-btn">Search</button>
        </div>

        {/* BIG WIDE SEARCH BOX */}
        <div className="search-box-premium">
          <input type="text" placeholder="From..." />
          <input type="text" placeholder="To..." />
          <input type="date" />
          <button className="search-btn-premium">Search</button>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-section">
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Safe and secure payments.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔁</div>
            <h3>Refund Policy</h3>
            <p>Easy and fast refunds.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎧</div>
            <h3>24/7 Support</h3>
            <p>Help anytime you need.</p>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="routes-section">
        <h2 className="section-title">
          Top Search <span>Routes</span>
        </h2>

        <div className="routes-grid">
          {routes.map((r, i) => (
            <div className="route-card" key={i}>
              <div className="route-top">
                <div>
                  <p className="label">From</p>
                  <p className="place">{r.from}</p>
                </div>
                <span className="hrs">{r.hrs}</span>
                <div>
                  <p className="label">To</p>
                  <p className="place">{r.to}</p>
                </div>
              </div>

              <div className="route-icons">
                <span>📶</span>
                <span>🍿</span>
                <span>📺</span>
                <span>🔌</span>
              </div>

              <div className="route-bottom">
                <div className="price">{r.price}</div>
                <button className="reserve-btn">Reserve Seat</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>About Train</h4>
            <p>Fast and reliable train booking service.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Search Trains</a>
              </li>
              <li>
                <a href="#">Bookings</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: trainbook@gmail.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Train Booking. All Rights Reserved.
        </div>
      </footer>

      {/* SIGN-IN MODAL */}
      {showSignin && (
        <div className="modal-backdrop" onClick={() => setShowSignin(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowSignin(false)}
            >
              ✕
            </button>
            <h3>Sign In</h3>
            <form className="signin-form" onSubmit={handleSigninSubmit}>
              <label>Email</label>
              <input type="email" required />
              <label>Password</label>
              <input type="password" required />
              <button type="submit" className="modal-submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

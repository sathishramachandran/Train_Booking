import React, { useState } from "react";
import "./Home.css";
import TrainVideo from "../assets/trainviedo.mp4";

import { locations, Train } from "../utils";

const Merged = ({ searchState, setSearchState }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  const [filteredTrain, setFilteredTrain] = useState([]);

  const handleSearch = () => {
    if (!searchState.from || !searchState.to || !searchState.date) {
      alert("Please select From, To and Date!");
      return;
    }

    const result = Train.filter(
      (t) =>
        t.source === searchState.from &&
        t.destination === searchState.to &&
        t.availableDates.includes(searchState.date)
    );

    setFilteredTrain(result);
  };

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

      {/* VIDEO + SEARCH */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={TrainVideo} type="video/mp4" />
        </video>

        {/* SEARCH BAR */}
        <div className="search-box-overlay">
          <select
            className="search-input"
            value={searchState.from}
            onChange={(e) =>
              setSearchState((prev) => ({ ...prev, from: e.target.value }))
            }
          >
            <option value="">Select Source</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className="search-input"
            value={searchState.to}
            onChange={(e) =>
              setSearchState((prev) => ({ ...prev, to: e.target.value }))
            }
          >
            <option value="">Select Destination</option>
            {locations.map((loc) => (
              <option key={`${loc}-dest`} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="search-input"
            value={searchState.date}
            onChange={(e) =>
              setSearchState((prev) => ({ ...prev, date: e.target.value }))
            }
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* SEARCH RESULTS */}
      <div style={{ width: "90%", margin: "40px auto" }}>
        {filteredTrain.length > 0 && (
          <div>
            <h2>Available Trains</h2>

            {filteredTrain.map((train) => (
              <div
                key={train.id}
                style={{
                  background: "#fff",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <h3>{train.name}</h3>
                <p>
                  <strong>Source:</strong> {train.source}
                </p>
                <p>
                  <strong>Destination:</strong> {train.destination}
                </p>
                <p>
                  <strong>Departure:</strong> {train.departureTime}
                </p>
                <p>
                  <strong>Arrival:</strong> {train.arrivalTime}
                </p>
                <p>
                  <strong>Price:</strong> ₹{train.price}
                </p>
                <p>
                  <strong>Type:</strong> {train.TrainType}
                </p>
              </div>
            ))}
          </div>
        )}

        {filteredTrain.length === 0 && (
          <p style={{ textAlign: "center" }}>No trains found</p>
        )}
      </div>
    </div>
  );
};

export default Merged;

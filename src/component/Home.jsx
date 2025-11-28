import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    const query = new URLSearchParams({
      from,
      to,
      date,
    }).toString();

    navigate(`/trains?${query}`);
  };

  return (
    <div className="home">
      {/* Running Train Video */}
      <div className="video-wrapper">
        <video autoPlay muted loop className="hero-video">
          <source src="/src/assets/trainviedo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Search Box */}
      <div className="search-page">
        <h2 className="search-title">Search Trains</h2>

        <div className="search-box">
          <div className="form-group">
            <label>From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">Select</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>

          <div className="form-group">
            <label>To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="">Select</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="">Select Date</option>
              <option>2025-11-28</option>
              <option>2025-11-29</option>
              <option>2025-11-30</option>
            </select>
          </div>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

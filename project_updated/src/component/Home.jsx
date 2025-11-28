import React, { useState } from "react";
import "./Home.css";
import TrainVideo from "../assets/trainviedo.mp4";
import { locations } from "../utils";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if(!from || !to || !date){ alert('Please select From, To and Date!'); return; }
    navigate(`/show?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`);
  };

  return (
    <div className="home-page">
      <div className="video-hero">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={TrainVideo} type="video/mp4" />
        </video>

        <div className="search-box-overlay">
          <select className="search-input" value={from} onChange={e=>setFrom(e.target.value)}>
            <option value="">From</option>
            {locations.map(l=> <option key={l} value={l}>{l}</option>)}
          </select>

          <select className="search-input" value={to} onChange={e=>setTo(e.target.value)}>
            <option value="">To</option>
            {locations.map(l=> <option key={l+"-d"} value={l}>{l}</option>)}
          </select>

          <input type="date" className="search-input" value={date} onChange={e=>setDate(e.target.value)} />

          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <section className="services-section" id="services">
        <h2 className="section-title">Our <span>Services</span></h2>
        <div className="services-container">
          <div className="service-card"><div className="service-icon">💳</div><h3>Secure Payment</h3></div>
          <div className="service-card"><div className="service-icon">🔁</div><h3>Refund Policy</h3></div>
          <div className="service-card"><div className="service-icon">🎧</div><h3>24/7 Support</h3></div>
        </div>
      </section>
    </div>
  );
}

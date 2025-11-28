import React, { useState } from "react";
import "./TrainSearch.css";

export default function TrainSearch({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [classtype, setClasstype] = useState("Sleeper");

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }

    onSearch({
      from,
      to,
      date,
      classtype,
    });
  };

  return (
    <div className="search-page">
      <h2 className="search-title">Search Trains</h2>

      <div className="search-box">
        <div className="form-group">
          <label>From Station</label>
          <input
            type="text"
            placeholder="Enter departure station"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>To Station</label>
          <input
            type="text"
            placeholder="Enter arrival station"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Journey Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Class</label>
          <select
            value={classtype}
            onChange={(e) => setClasstype(e.target.value)}
          >
            <option>Sleeper</option>
            <option>3A</option>
            <option>2A</option>
            <option>1A</option>
          </select>
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search Trains
        </button>
      </div>
    </div>
  );
}

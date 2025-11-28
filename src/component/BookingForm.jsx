import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const location = useLocation();
  const { train, seats } = location.state || {};

  if (!train) return <h2>No Train Selected</h2>;

  // Create dynamic passenger list
  const [passengers, setPassengers] = useState(
    seats.map(() => ({
      name: "",
      age: "",
      gender: "Male",
      phone: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleSubmit = () => {
    // Validate all passengers
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];
      if (!p.name || !p.age || !p.phone) {
        alert(`Please fill all fields for Passenger ${i + 1}`);
        return;
      }
    }

    alert(
      `Booking Successful!\nTrain: ${train.name}\nSeats: ${seats.join(", ")}`
    );

    console.table(passengers);
  };

  return (
    <div className="booking-page">
      {/* LEFT SIDE: Dynamic Passenger Form */}
      <div className="booking-form">
        <h2 className="section-title">Passenger Details</h2>

        {passengers.map((p, index) => (
          <div key={index} className="passenger-block">
            <h3>Passenger {index + 1}</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                value={p.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>

            <div className="form-flex">
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  value={p.age}
                  onChange={(e) => handleChange(index, "age", e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select
                  value={p.gender}
                  onChange={(e) =>
                    handleChange(index, "gender", e.target.value)
                  }
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input
                value={p.phone}
                onChange={(e) => handleChange(index, "phone", e.target.value)}
              />
            </div>

            <hr />
          </div>
        ))}

        <button className="confirm-btn" onClick={handleSubmit}>
          Confirm Booking
        </button>
      </div>

      {/* RIGHT SIDE: Summary */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Journey Summary</h3>
          <p>
            <strong>Train:</strong> {train.name}
          </p>
          <p>
            <strong>Train No:</strong> {train.number}
          </p>
          <p>
            <strong>From:</strong> {train.from}
          </p>
          <p>
            <strong>To:</strong> {train.to}
          </p>
          <p>
            <strong>Seats:</strong> {seats.join(", ")}
          </p>
        </div>

        <div className="fare-card">
          <h3>Total Fare</h3>
          <p>₹250 x {seats.length}</p>
          <h4>₹{seats.length * 250}</h4>
        </div>
      </div>
    </div>
  );
}

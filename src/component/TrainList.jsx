import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TrainList.css";

export default function TrainList({ trains }) {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const qFrom = params.get("from");
  const qTo = params.get("to");
  const qDate = params.get("date");

  const filtered = trains.filter(
    (t) =>
      t.from.toLowerCase() === qFrom.toLowerCase() &&
      t.to.toLowerCase() === qTo.toLowerCase() &&
      t.availableDates.includes(qDate)
  );

  return (
    <div className="train-list-container">
      <h2 className="train-title">
        Trains from {qFrom} → {qTo}
      </h2>

      {filtered.length === 0 && (
        <div className="no-results">No Trains Available</div>
      )}

      {filtered.map((train) => (
        <div key={train.id} className="train-card">
          <div className="train-header">
            <h3>{train.name}</h3>
            <span className="train-number">#{train.number}</span>
          </div>

          <div className="train-details">
            <p>
              <strong>Time:</strong> {train.time}
            </p>
          </div>

          <div className="seat-section">
            <h4>Seats</h4>

            <div className="seat-container">
              {[...train.availableSeats, ...train.bookedSeats].map((s) => (
                <div
                  key={s}
                  className={`seat ${
                    train.availableSeats.includes(s) ? "available" : "booked"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <button
            className="book-btn"
            onClick={() => navigate(`/train/${train.id}/seats`)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

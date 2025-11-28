import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SeatSelection.css";

export default function SeatSelection({ trains }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const train = useMemo(
    () => trains.find((t) => t.id === parseInt(id)),
    [trains, id]
  );

  const [selected, setSelected] = useState([]);

  if (!train) return <h2>Train Not Found</h2>;

  const toggleSeat = (seat) => {
    if (train.bookedSeats.includes(seat)) return;

    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  return (
    <div className="seat-page">
      <h2 className="train-title">{train.name} - Seat Selection</h2>

      <div className="seat-grid">
        {[...train.availableSeats, ...train.bookedSeats].map((seat) => {
          const booked = train.bookedSeats.includes(seat);
          const isSelected = selected.includes(seat);

          return (
            <div
              key={seat}
              className={`seat ${
                booked ? "booked" : isSelected ? "selected" : "available"
              }`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>

      <button
        className="confirm-btn"
        onClick={() =>
          navigate("/booking", { state: { train, seats: selected } })
        }
      >
        Proceed to Book
      </button>
    </div>
  );
}

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Train } from "../utils";

export default function TrainLayout({ selectedSeats, setSelectedSeats }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedTrain = Train.find((data) => data.id === parseInt(id));

  if (!selectedTrain) return <h2>Train Not Found</h2>;

  const isSleeper = selectedTrain.TrainType === "Sleeper";
  const seatWidth = isSleeper ? "80px" : "25px";

  // Seat availability check
  const isSeatAvailable = (seat) =>
    selectedTrain.availableSeats.includes(seat);

  // Check selected
  const isSeatSelected = (seat) =>
    Array.isArray(selectedSeats) && selectedSeats.includes(seat);

  // Select / Deselect seat
  const handleSeatClick = (seat) => {
    if (!isSeatAvailable(seat)) return;

    if (isSeatSelected(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // Function to draw seats
  const generateSeats = (array, key = "") =>
    array.map((row, i) =>
      Array.isArray(row) ? (
        <div key={i} style={{ display: "flex", gap: "4px" }}>
          {row.map((seat) => {
            const seatId = `${key}${seat}`;
            return (
              <div
                key={seatId}
                style={{
                  width: seatWidth,
                  background: isSeatSelected(seatId)
                    ? "#318beb" // selected
                    : isSeatAvailable(seatId)
                    ? "#fff" // available
                    : "#b6b4b4", // unavailable
                  cursor: isSeatAvailable(seatId) ? "pointer" : "not-allowed",
                  padding: "4px",
                  margin: "2px",
                  textAlign: "center",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
                onClick={() => handleSeatClick(seatId)}
              >
                {seatId}
              </div>
            );
          })}
        </div>
      ) : (
        <div key={row}>{/* Fallback if value is not an array */}</div>
      )
    );

  return (
    <>
      <h2>{selectedTrain.name}</h2>
      <h4>Ticket</h4>
      <h5>{selectedTrain.TrainType}</h5>

      {/* Legend */}
      <div className="flex" style={{ gap: "20px", marginBottom: "20px" }}>
        <div>
          <div style={{ width: seatWidth, background: "#fff" }}></div>
          <h6>Available</h6>
        </div>

        <div>
          <div style={{ width: seatWidth, background: "#b6b4b4" }}></div>
          <h6>Unavailable</h6>
        </div>

        <div>
          <div style={{ width: seatWidth, background: "#318beb" }}></div>
          <h6>Selected</h6>
        </div>
      </div>

      {/* Seat Layout */}
      <div className="disp flex" style={{ gap: "40px" }}>
        {isSleeper ? (
          <>
            {/* Upper */}
            <div>
              <h4>Upper</h4>
              {generateSeats(selectedTrain.seatLayout.upper.first, "U")}
              {generateSeats(selectedTrain.seatLayout.upper.second, "U")}
            </div>

            {/* Lower */}
            <div>
              <h4>Lower</h4>
              {generateSeats(selectedTrain.seatLayout.lower.first, "L")}
              {generateSeats(selectedTrain.seatLayout.lower.second, "L")}
            </div>
          </>
        ) : (
          <>
            {/* Non-sleeper trains → treat as simple rows */}
            <div>
              <h4>Seats</h4>
              {generateSeats(selectedTrain.seatLayout.lower.first, "S")}
              {generateSeats(selectedTrain.seatLayout.lower.second, "S")}
            </div>
          </>
        )}
      </div>

      {/* Selected seats */}
      {selectedSeats.length > 0 && (
        <h4 style={{ marginTop: "20px" }}>
          Selected Seats: {selectedSeats.join(", ")}
        </h4>
      )}

      {/* Book Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/train/book")}
          disabled={selectedSeats.length === 0}
        >
          Book Now
        </button>
      </div>
    </>
  );
}

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

  const isSeatAvailable = (seat) =>
    selectedTrain.availableSeats.includes(seat);

  const isSeatSelected = (seat) =>
    Array.isArray(selectedSeats) && selectedSeats.includes(seat);

  const handleSeatClick = (seat) => {
    if (!isSeatAvailable(seat)) return;

    if (isSeatSelected(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

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
                    ? "#318beb"
                    : isSeatAvailable(seatId)
                    ? "#fff"
                    : "#b6b4b4",
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
        <div key={row}></div>
      )
    );

  // ⭐ TOTAL PRICE CALCULATION ⭐
  const totalPrice = selectedSeats.length * selectedTrain.price;

  return (
    <>
      <h2>{selectedTrain.name}</h2>
      <h4>Ticket</h4>
      <h5>{selectedTrain.TrainType}</h5>

      <h4>Price per seat: ₹{selectedTrain.price}</h4>

      {selectedSeats.length > 0 && (
        <h3 style={{ color: "green" }}>
          Total Price: ₹{totalPrice}
        </h3>
      )}

      {/* Seat Layout */}
      <div className="disp flex" style={{ gap: "40px", marginTop: "20px" }}>
        {isSleeper ? (
          <>
            <div>
              <h4>Upper</h4>
              {generateSeats(selectedTrain.seatLayout.upper.first, "U")}
              {generateSeats(selectedTrain.seatLayout.upper.second, "U")}
            </div>

            <div>
              <h4>Lower</h4>
              {generateSeats(selectedTrain.seatLayout.lower.first, "L")}
              {generateSeats(selectedTrain.seatLayout.lower.second, "L")}
            </div>
          </>
        ) : (
          <>
            <div>
              <h4>Seats</h4>
              {generateSeats(selectedTrain.seatLayout.lower.first, "S")}
              {generateSeats(selectedTrain.seatLayout.lower.second, "S")}
            </div>
          </>
        )}
      </div>

      {selectedSeats.length > 0 && (
        <h4 style={{ marginTop: "20px" }}>
          Selected Seats: {selectedSeats.join(", ")}
        </h4>
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/train/book", {
            state: {
              totalPrice,
              pricePerSeat: selectedTrain.price
            }
          })}
          disabled={selectedSeats.length === 0}
        >
          Book Now
        </button>
      </div>
    </>
  );
}

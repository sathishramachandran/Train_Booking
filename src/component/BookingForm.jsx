import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Bookingform({ searchState, selectedSeats }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const totalPrice = state?.totalPrice || 0;
  const pricePerSeat = state?.pricePerSeat || 0;

  const handleSubmit = () => {
    alert("Your ticket is booked successfully!");
    navigate("/");
  };

  return (
    <div>
      <h2>Booking Form</h2>

      <h4>
        {searchState.from} → {searchState.to}
      </h4>
      <h4>Date: {searchState.date}</h4>

      <h3>Price per seat: ₹{pricePerSeat}</h3>

      <h2 style={{ color: "green" }}>Total Price: ₹{totalPrice}</h2>

      <h3>Please fill passenger details</h3>

      {selectedSeats.map((seat, index) => (
        <div key={index}>
          <h4>Seat No: {seat}</h4>

          <form>
            <label>Name: </label>
            <input type="text" placeholder="Name" />

            <label> Age: </label>
            <input type="number" placeholder="Age" />
          </form>

          <br />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Confirm Booking
      </button>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function TrainList({ trains = [] }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Available Trains</h2>

      {trains.length === 0 && <p>No trains found.</p>}

      {trains.map((train) => (
        <div key={train.id} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
          
          <h3>{train.name}</h3>

          <p><strong>Source:</strong> {train.source}</p>
          <p><strong>Destination:</strong> {train.destination}</p>
          <p><strong>Departure Time:</strong> {train.departureTime}</p>
          <p><strong>Price:</strong> ₹{train.price}</p>
          <p><strong>Train Type:</strong> {train.trainType}</p>

          <h5>Available Seats: {train.availableSeats?.length || 0}</h5>

          <button 
            className="booking-button"
            onClick={() => navigate(`/train/${train.id}`)}
          >
            Book Now
          </button>

        </div>
      ))}
      
    </div>
  );
}

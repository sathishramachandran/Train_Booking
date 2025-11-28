import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirm.css";

function useQuery(){ return new URLSearchParams(useLocation().search); }

export default function BookingConfirm(){
  const q = useQuery();
  const navigate = useNavigate();
  const trainId = q.get('trainId');
  const date = q.get('date');
  const from = q.get('from');
  const to = q.get('to');
  const seats = q.get('seats');
  const price = q.get('price');
  const seatCount = seats? seats.split(',').length:0;
  const total = Number(price||0) * seatCount;

  return (
    <div className="container booking-confirm">
      <div className="ticket-card">
        <h2>Booking Confirmation</h2>
        <div className="ticket-row"><div><strong>Train ID:</strong> {trainId}</div><div><strong>Date:</strong> {date}</div></div>
        <div className="ticket-row"><div><strong>Route:</strong> {from} → {to}</div><div><strong>Seats:</strong> {seats}</div></div>
        <div className="ticket-row"><div><strong>Total Fare (per seat):</strong> ₹{price}</div><div><strong>Total Paid:</strong> ₹{total}</div></div>
        <div className="ticket-actions"><button className="btn" onClick={()=>navigate('/')}>Back to Home</button><button className="btn primary" onClick={()=>alert('Booking simulated — no backend.')}>Download Ticket</button></div>
      </div>
    </div>
  );
}

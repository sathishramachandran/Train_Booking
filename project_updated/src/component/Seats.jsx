import React, { useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Train } from "../utils";
import "./Seats.css";

function useQuery(){ return new URLSearchParams(useLocation().search); }

export default function Seats(){
  const { id } = useParams();
  const q = useQuery();
  const navigate = useNavigate();
  const date = q.get('date')||'';
  const from = q.get('from')||'';
  const to = q.get('to')||'';
  const trainId = Number(id);
  const train = useMemo(()=> Train.find(t=>t.id===trainId),[trainId]);

  const [selectedSeats,setSelectedSeats]=useState([]);

  if(!train) return <div className="container">Train not found.</div>;

  const allSeats = useMemo(()=>{
    const seats=[];
    const layout = train.seatLayout||{};
    Object.values(layout).forEach(section=>{
      Object.values(section).forEach(arr=>{
        if(Array.isArray(arr)){
          arr.flat().forEach(s=>seats.push(String(s)));
        }
      });
    });
    if(seats.length===0){
      for(let i=1;i<=train.numberOfSeats;i++) seats.push(String(i));
    }
    return seats;
  },[train]);

  const availableSet = new Set((train.availableSeats||[]).map(String));

  function toggleSeat(seat){
    if(!availableSet.has(String(seat))) return;
    setSelectedSeats(prev=> prev.includes(String(seat))? prev.filter(s=>s!==String(seat)) : [...prev,String(seat)]);
  }

  function handleBook(){
    if(selectedSeats.length===0){ alert('Select at least one available seat.'); return; }
    const params = new URLSearchParams({ trainId: train.id, date, from, to, seats: selectedSeats.join(','), price: train.price });
    navigate(`/booking/confirm?${params.toString()}`);
  }

  return (
    <div className="container seats-page">
      <div className="seats-header"><h2>{train.name}</h2><div className="route">{from} → {to} | {date}</div></div>
      <div className="seat-legend"><span className="legend available"></span> Available <span className="legend selected"></span> Selected <span className="legend booked"></span> Booked</div>
      <div className="seat-grid">
        {allSeats.map((s,idx)=>{
          const isAvailable = availableSet.has(String(s));
          const isSelected = selectedSeats.includes(String(s));
          return <button key={idx} className={`seat ${isAvailable? 'available':'booked'} ${isSelected? 'selected':''}`} onClick={()=>toggleSeat(s)}>{s}</button>
        })}
      </div>
      <div className="seat-actions"><div className="selected-info">Selected seats: {selectedSeats.length>0? selectedSeats.join(', '): 'None'}</div><button className="btn book-now" onClick={handleBook}>Book Now</button></div>
    </div>
  );
}

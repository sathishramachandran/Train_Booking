import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Train } from "../utils";
import "./Show.css";

function useQuery(){ return new URLSearchParams(useLocation().search); }

export default function Show(){
  const q = useQuery();
  const navigate = useNavigate();
  const from = q.get('from') || '';
  const to = q.get('to') || '';
  const date = q.get('date') || '';

  const results = useMemo(()=>{
    if(!from||!to||!date) return [];
    return Train.filter(t=> t.source===from && t.destination===to && t.availableDates.includes(date));
  },[from,to,date]);

  return (
    <div className="show-page container">
      <div className="search-summary">
        <h3>Search Results</h3>
        <div className="summary-line"><strong>{from}</strong> → <strong>{to}</strong> | <span>{date}</span></div>
      </div>

      <div className="results-grid">
        {results.length===0 && <div className="empty">No trains found for the selected date.</div>}
        {results.map(t=>(
          <article className="result-card" key={t.id}>
            <div className="card-left">
              <div className="train-name">{t.name}</div>
              <div className="route">{t.source} → {t.destination}</div>
              <div className="times"><div><strong>Dep:</strong> {t.departureTime}</div><div><strong>Arr:</strong> {t.arrivalTime}</div></div>
            </div>
            <div className="card-right">
              <div className="price">₹{t.price}</div>
              <div className="type">{t.TrainType}</div>
              <button className="view-seats-btn" onClick={()=>navigate(`/seats/${t.id}?date=${encodeURIComponent(date)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`)}>View Seats</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

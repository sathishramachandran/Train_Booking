import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderFooter.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="hf-inner">
        <div className="logo" onClick={() => navigate("/")}>Train</div>
        <nav className="nav">
          <a href="#" onClick={(e)=>{e.preventDefault(); navigate("/")}}>Home</a>
          <a href="#services">Services</a>
          <a href="#tickets">Tickets</a>
          <a href="#about">About</a>
        </nav>
        <div className="hf-actions">
          <button className="signin-btn">Sign In</button>
        </div>
      </div>
    </header>
  );
}

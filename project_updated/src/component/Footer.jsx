import React from "react";
import "./HeaderFooter.css";
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h4>About Train</h4>
          <p>Fast and reliable train booking service.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/show">Search Trains</a></li>
            <li><a href="#bookings">Bookings</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: trainbook@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">© 2025 Train Booking. All Rights Reserved.</div>
    </footer>
  );
}

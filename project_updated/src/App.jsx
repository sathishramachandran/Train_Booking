import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Show from "./component/Show";
import Seats from "./component/Seats";
import BookingConfirm from "./component/BookingConfirm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/seats/:id" element={<Seats />} />
        <Route path="/booking/confirm" element={<BookingConfirm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./component/Home";
import TrainList from "./component/TrainList";
import SeatSelection from "./component/SeatSelection";
import BookingForm from "./component/BookingForm";

// -----------------------------
// FINAL DUMMY TRAIN DATA
// -----------------------------
const dummyTrains = [
  {
    id: 1,
    name: "Chennai Express",
    number: "12609",
    from: "Chennai",
    to: "Bangalore",
    time: "08:30 AM",
    availableSeats: [1, 2, 3, 4, 5],
    bookedSeats: [6, 7, 8, 9, 10],
    availableDates: ["2025-11-28", "2025-11-29", "2025-11-30"],
  },
  {
    id: 2,
    name: "Bangalore Mail",
    number: "12657",
    from: "Bangalore",
    to: "Chennai",
    time: "06:00 PM",
    availableSeats: [1, 2, 3, 4],
    bookedSeats: [5, 6, 7, 8, 9, 10],
    availableDates: ["2025-11-28", "2025-11-29"],
  },
  {
    id: 3,
    name: "Hyderabad Special",
    number: "17021",
    from: "Hyderabad",
    to: "Chennai",
    time: "04:15 PM",
    availableSeats: [1, 2, 3, 4, 5, 6],
    bookedSeats: [7, 8, 9, 10],
    availableDates: ["2025-11-28", "2025-11-29", "2025-11-30"],
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/trains" element={<TrainList trains={dummyTrains} />} />

        <Route
          path="/train/:id/seats"
          element={<SeatSelection trains={dummyTrains} />}
        />

        <Route path="/booking" element={<BookingForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

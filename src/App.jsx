import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import TrainSearch from "./component/TrainSearch";
import Home from "./component/Home";
import Merged from "./component/Merged";
import TrainList from "./component/TrainList";
import TrainLayout from "./component/TrainLayout";
import Bookingform from "./component/Bookingform";

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

  // 🔹 Dummy Train Data (shared)
  const dummyTrains = [
    {
      id: 1,
      name: "Chennai Express",
      source: "Chennai",
      destination: "Bangalore",
      departureTime: "08:30 AM",
      arrivalTime: "12:45 PM",
      price: 250,
      trainType: "Superfast",
      availableSeats: [1, 2, 3, 4, 5],
      availableDates: ["2025-11-27", "2025-11-28"],
    },
    {
      id: 2,
      name: "Bangalore Mail",
      source: "Bangalore",
      destination: "Chennai",
      departureTime: "06:00 PM",
      arrivalTime: "10:15 PM",
      price: 300,
      trainType: "Express",
      availableSeats: [1, 2, 3],
      availableDates: ["2025-11-27", "2025-11-29"],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN MERGED HOME PAGE */}
        <Route
          path="/"
          element={
            <Merged searchState={searchState} setSearchState={setSearchState} />
          }
        />

        {/* ONLY SEARCH PAGE */}
        <Route
          path="/show"
          element={
            <TrainSearch
              searchState={searchState}
              setSearchState={setSearchState}
            />
          }
        />

        {/* SHOW ALL DUMMY TRAINS */}
        <Route path="/tick" element={<TrainList trains={dummyTrains} />} />

        {/* SEAT SELECTION PAGE */}
        <Route
          path="/train/:id"
          element={
            <TrainLayout
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              trains={dummyTrains}  // passed to identify train by ID
            />
          }
        />

        {/* BOOKING PAGE */}
        <Route
          path="/train/book"
          element={
            <Bookingform
              selectedSeats={selectedSeats}
              searchState={searchState}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

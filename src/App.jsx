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

  // Dummy train data
  const dummyTrains = [
    {
      id: 1,
      name: "Chennai Express",
      source: "Chennai",
      destination: "Bangalore",
      departureTime: "08:30 AM",
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
      price: 300,
      trainType: "Express",
      availableSeats: [1, 2, 3],
      availableDates: ["2025-11-27", "2025-11-29"],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Search Page */}
        <Route
          path="/"
          element={
            <Merged searchState={searchState} setSearchState={setSearchState} />
          }
        />

        {/* Only Search Component */}
        <Route
          path="/show"
          element={
            <TrainSearch
              searchState={searchState}
              setSearchState={setSearchState}
            />
          }
        />

        {/* List All Dummy Trains */}
        <Route path="/tick" element={<TrainList trains={dummyTrains} />} />


        <Route
          path="/train/:id"
          element={
            <TrainLayout
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          }
        />
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

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import TrainSearch from "./component/TrainSearch";
import Home from "./component/Home";
import Merged from "./component/Merged";
import TrainList from "./component/TrainList";
import TrainLayout from "./component/TrainLayout";

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

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

        {/* Train Seat Layout / Booking Page */}
        <Route
          path="/train/:id"
          element={
            <TrainLayout
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

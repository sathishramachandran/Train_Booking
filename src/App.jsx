import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import TrainSearch from "./component/TrainSearch";
import Home from "./component/Home";

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  return (
    <BrowserRouter>
    

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/search"
          element={
            <TrainSearch
              searchState={searchState}
              setSearchState={setSearchState}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

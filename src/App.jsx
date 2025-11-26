import { useState } from "react";

import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainSearch from "./component/TrainSearch";

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TrainSearch
                searchState={searchState}
                setSearchState={setSearchState}
              />
            }
          />
          <Route
            path="./Home"
            element={
              <TrainSearch
                searchState={searchState}
                setSearchState={setSearchState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

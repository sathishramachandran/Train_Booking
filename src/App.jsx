import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Home from "./component/Home";
// If you still have TrainSearch and want it, you can add its route too.
// import TrainSearch from "./component/TrainSearch";

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  return (
    <BrowserRouter>
      {/* Header inside the router so links (NavLink/Link) work if used inside Header */}
      <Header />

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* /home route (same component) */}
        <Route path="/home" element={<Home />} />

        {/* Example: If you want TrainSearch route later (uncomment import above)
        <Route
          path="/search"
          element={
            <TrainSearch
              searchState={searchState}
              setSearchState={setSearchState}
            />
          }
        /> 
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

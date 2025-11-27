// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Header from "./component/Header";
// import TrainSearch from "./component/TrainSearch";
// import Home from "./component/Home";
// import { locations } from "./utils";

// function App() {
//   const [searchState, setSearchState] = useState({
//     from: locations[0],
//     to: locations[2],
//     date: "",
//   });

//   return (
//     <BrowserRouter>

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/search"
//           element={
//             <TrainSearch
//               searchState={searchState}
//               setSearchState={setSearchState}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Merged from "./component/Merged";

function App() {
  const [searchState, setSearchState] = useState({
    from: "",
    to: "",
    date: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Merged searchState={searchState} setSearchState={setSearchState} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

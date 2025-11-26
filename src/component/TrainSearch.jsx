import React, { useState } from "react";
import styled from "styled-components";
import { locations, Train } from "../utils";
import TrainList from "./TrainList";

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function TrainSearch({ searchState, setSearchState }) {
  const [filteredTrain, setFilteredTrain] = useState([]);

  const handledSearch = () => {
    const result = Train.filter(
      (t) =>
        t.source === searchState.from &&
        t.destination === searchState.to &&
        t.availableDates.includes(searchState.date)
    );

    setFilteredTrain(result);
  };

  return (
    <Container>
      <div className="tsearchbar">
        <form className="form-lable-tsearchbar">
          <select
            value={searchState.from}
            onChange={(e) =>
              setSearchState((prev) => ({ ...prev, from: e.target.value }))
            }
          >
            <option value="">Select Source</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </form>

        <form className="form-lable-tsearchbar">
          <select
            value={searchState.to}
            onChange={(e) =>
              setSearchState((prev) => ({ ...prev, to: e.target.value }))
            }
          >
            <option value="">Select Destination</option>
            {locations.map((loc) => (
              <option key={`${loc}-dest`} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </form>

        <input
          className="form-lable-tsearchbar"
          type="date"
          value={searchState.date}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
        />
      </div>

      <button className="form-lable-tsearchbar" onClick={handledSearch}>
        Search
      </button>

      {filteredTrain.length > 0 && <TrainList trains={filteredTrain} />}

      {filteredTrain.length === 0 && <p>No trains found</p>}
    </Container>
  );
}

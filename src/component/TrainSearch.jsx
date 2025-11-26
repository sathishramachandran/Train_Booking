import React from "react";
import styled from "styled-components";
import { locations } from "../utils";

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function TrainSearch({ searchState, setSearchState }) {
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
      </div>
    </Container>
  );
}

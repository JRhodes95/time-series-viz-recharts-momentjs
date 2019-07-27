import React from "react";
import styled from "styled-components/macro";
import data from "./data/unix-time-data.json";
import Chart from "./Chart.jsx";
import colors from "./colors.js";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 20% 60% 20%;
  height: 100vh;
  background-color: ${colors["white-smoke"]};
  color: ${colors["dark-power-blue"]};
`;

const AppTitle = styled.h1`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: end;
`;

const ChartContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

function App() {
  return (
    <AppContainer>
      <AppTitle>
        Time-series data visualisation in React with Recharts and Moment.js
      </AppTitle>
      <ChartContainer>
        <Chart data={data} />
      </ChartContainer>
    </AppContainer>
  );
}

export default App;

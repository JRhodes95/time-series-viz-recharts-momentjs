import React from "react";
import { Line, LineChart } from "recharts";

const Chart = ({ data }) => {
  return (
    <LineChart width={600} height={400} data={data}>
      <Line
        dataKey="temperature"
      />
    </LineChart>
  );
};

export default Chart;

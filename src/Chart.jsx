import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  return (
    <LineChart width={600} height={400} data={data}>
      <XAxis />
      <YAxis />
      <Line dataKey="temperature" />
    </LineChart>
  );
};

export default Chart;

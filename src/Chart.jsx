import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Line
} from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <LineChart
        data={data}
        margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
      >
        <defs>
          <linearGradient id="temperature" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#540d6e" />
            <stop offset="25%" stopColor="#c14bbb" />
            <stop offset="50%" stopColor="#ff0000" />
            <stop offset="75%" stopColor="#ff8317" />
            <stop offset="100%" stopColor="#ffdd21" />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis type="number" dataKey="time" domain={["dataMin", "dataMax"]}>
          <Label
            value={"Time"}
            position="bottom"
            style={{ textAnchor: "middle" }}
          />
        </XAxis>
        <YAxis>
          <Label
            value={"Temperature (°C)"}
            position="left"
            angle={-90}
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip />
        <Line
          dataKey="temperature"
          name="Temperature"
          unit={"°C"}
          dot={false}
          type={"natural"}
          stroke="url(#temperature)"
          strokeWidth="4px"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;

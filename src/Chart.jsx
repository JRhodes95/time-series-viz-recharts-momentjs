import React from "react";
import { Line, LineChart, XAxis, YAxis, Label } from "recharts";

const Chart = ({ data }) => {
  return (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
    >
      <XAxis type="number" dataKey="time" domain={["dataMin", "dataMax"]}>
        <Label
          value={"Time"}
          position="bottom"
          style={{ textAnchor: "middle" }}
        />
      </XAxis>
      <YAxis>
        <Label
          value={"Temperature"}
          position="left"
          angle={-90}
          style={{ textAnchor: "middle" }}
        />
      </YAxis>
      <Line dataKey="temperature" />
    </LineChart>
  );
};

export default Chart;

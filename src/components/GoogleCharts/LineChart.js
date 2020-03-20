import React from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ data, text }) => {
  return (
    <div>
      <Chart
        chartType='Line'
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          chart: {
            title: { text }
            // subtitle: "in millions of dollars (USD)"
          }
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default LineChart;

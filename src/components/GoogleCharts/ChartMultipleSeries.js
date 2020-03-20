import React from "react";
import { Chart } from "react-google-charts";

const ChartMultipleSeries = ({ data, title }) => {
  return (
    <div>
      <Chart
        chartType='BarChart'
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: title,
          chartArea: { width: "70%" },
          isStacked: true,
          hAxis: {
            title: "Total",
            minValue: 0
          },
          vAxis: {
            title: "Country",
            textStyle: { fontSize: 8 }
          }
        }}
        // For tests
        rootProps={{ "data-testid": "4" }}
      />
    </div>
  );
};

export default ChartMultipleSeries;

import React from "react";
import { Chart } from "react-google-charts";

const ChartMultipleSeries = ({ data, title }) => {
  return (
    <div>
      <Chart
        chartType='Bar'
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: title,
          chartArea: { width: "70%" },
          isStacked: true,
          fontSize: 1,
          hAxis: {
            title: "Total",
            minValue: 0,
            textStyle: { fontSize: 1 }
          },
          vAxis: {
            title: "Country",
            textStyle: { fontSize: 1 }
          }
        }}
        // For tests
        rootProps={{ "data-testid": "4" }}
      />
    </div>
  );
};

export default ChartMultipleSeries;

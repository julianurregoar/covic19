import React, { Fragment, useState, useContext } from "react";
//Context
import AppContext from "../../../AppContext";

import ChartMultipleSeries from "../../../components/GoogleCharts/ChartMultipleSeries";
import { wholeWorld } from "../../../dataConstructor/dataConstructor";

const General = props => {
  const { stats, loading, error } = useContext(AppContext);
  const [selectedCountry, setSelectedCountry] = useState("USA");

  const data = wholeWorld(stats);

  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Fragment>
        <h2>Currently Showing {selectedCountry}</h2>
        <ChartMultipleSeries data={data} title={"The Main 10 Countries"} />
      </Fragment>
    </div>
  );
};

export default General;

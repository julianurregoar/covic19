import React, { Fragment } from "react";
import PropTypes from "prop-types";
import BasicData from "../../../components/BasicData/BasicData";
import { countries, daily } from "../../../dataConstructor/dataConstructor";
import { Grid } from "@material-ui/core";
import LineChart from "../../../components/GoogleCharts/LineChart";
import ChartMultipleSeries from "../../../components/GoogleCharts/ChartMultipleSeries";

const General = props => {
  const { generalStats, countriesStats, dailyStats } = props;

  const countryData = countries(countriesStats);
  const dailyData = daily(dailyStats);

  return (
    <div>
      <Fragment>
        <BasicData stats={generalStats} text={"Whole World"} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h3>Historical Growth</h3>
            <LineChart data={dailyData} text={"Day to Day Increase"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>Top 5 </h3>
            <ChartMultipleSeries data={countryData} />
          </Grid>
        </Grid>
      </Fragment>
    </div>
  );
};

General.propTypes = {
  stats: PropTypes.object.isRequired,
  countryData: PropTypes.object.isRequired,
  dailyData: PropTypes.object.isRequired
};

export default General;

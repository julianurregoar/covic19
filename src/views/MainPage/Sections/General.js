import React, { Fragment, useContext } from "react";
//Context
import AppContext from "../../../AppContext";

import ChartMultipleSeries from "../../../components/GoogleCharts/ChartMultipleSeries";
import LineChart from "../../../components/GoogleCharts/LineChart";
import { countries, daily } from "../../../dataConstructor/dataConstructor";
import { Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  confirmed: {
    color: "red"
  },
  recovered: {
    color: "blue"
  },
  deaths: {
    color: "red"
  }
}));
const General = props => {
  const classes = useStyles();
  //general data
  const {
    mainData: {
      general: {
        stats: generalStats,
        loading: generalLoading,
        error: generalError
      },
      countries: {
        stats: countriesStats,
        loading: countriesLoading,
        error: countriesError
      },
      daily: { stats: dailyStats, loading: dailyLoading, error: dailyError }
    }
  } = useContext(AppContext);
  const countryData = countries(countriesStats);
  const dailyData = daily(dailyStats);

  // const [selectedCountry, setSelectedCountry] = useState("USA");
  if (dailyLoading || generalLoading || countriesLoading)
    return <p>Loading...</p>;
  if (dailyError || generalError || dailyError) return <p>Error...</p>;
  console.log(generalStats);
  return (
    <div>
      <Fragment>
        <div className={classes.root}>
          <h2>Whole World</h2>
          <h4>Last update {generalStats.lastUpdate}</h4>

          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h2>Confirmed</h2>
                <h1 className={classes.confirmed}>
                  {generalStats.confirmed.value}
                </h1>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h2>Recovered</h2>
                <h1 className={classes.recovered}>
                  {generalStats.recovered.value}
                </h1>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h2>Deaths</h2>
                <h1 className={classes.deaths}>{generalStats.deaths.value}</h1>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h2>Historical Growth</h2>
              <LineChart data={dailyData} text={"Day to Day Increase"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>Top 5 countries</h2>
              <ChartMultipleSeries data={countryData} />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    </div>
  );
};

export default General;

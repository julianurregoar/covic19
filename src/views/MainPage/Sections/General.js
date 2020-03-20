import React, { Fragment, useContext } from "react";
//Context
import AppContext from "../../../AppContext";

import ChartMultipleSeries from "../../../components/GoogleCharts/ChartMultipleSeries";
import LineChart from "../../../components/GoogleCharts/LineChart";
import { countries, daily } from "../../../dataConstructor/dataConstructor";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useStats from "../../../utils/useStats/useStats";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const General = props => {
  const classes = useStyles();
  //general data
  const {
    mainData: {
      countries: {
        stats: countriesStats,
        loading: countriesLoading,
        error: countryError
      },
      daily: { stats: dailyStats, loading: dailyLoading, error: daliyError }
    }
  } = useContext(AppContext);
  const countryData = countries(countriesStats);
  const dailyData = daily(dailyStats);

  // const [selectedCountry, setSelectedCountry] = useState("USA");
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;

  return (
    <div>
      <Fragment>
        <div className={classes.root}>
          <h2>Whole World</h2>
          {/* <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
          </Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <LineChart data={dailyData} text={"Day to Day Increase"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
          </Grid>
        </div>
        <h2>Top 10 countries</h2>
        <ChartMultipleSeries data={countryData} />
      </Fragment>
    </div>
  );
};

export default General;

import React, { Fragment } from "react";
import PropTypes from "prop-types";

//core components
import ChartMultipleSeries from "../GoogleCharts/ChartMultipleSeries";
import LineChart from "../GoogleCharts/LineChart";

//material
import { Grid, Paper } from "@material-ui/core";
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
  const { stats, countryData, dailyData } = props;

  return (
    <div>
      <Fragment>
        <div className={classes.root}>
          <h2>Whole World</h2>
          <h4>Last update {stats.lastUpdate}</h4>

          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h2>Confirmed</h2>
                <h1 className={classes.confirmed}>{stats.confirmed.value}</h1>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h2>Recovered</h2>
                <h1 className={classes.recovered}>{stats.recovered.value}</h1>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <h2>Deaths</h2>
                <h1 className={classes.deaths}>{stats.deaths.value}</h1>
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

General.propTypes = {
  stats: PropTypes.object.isRequired,
  countryData: PropTypes.object.isRequired,
  dailyData: PropTypes.object.isRequired
};

export default General;

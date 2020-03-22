import React, { Fragment } from "react";
import PropTypes from "prop-types";

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
  const { stats, text } = props;

  return (
    <div>
      <Fragment>
        <div className={classes.root}>
          <h2>{text}</h2>
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

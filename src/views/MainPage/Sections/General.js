import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import useStats from "../../../useStats/useStats.js";
import { Grid } from "@material-ui/core";

const url = "https://covid19.mathdro.id/api";

const General = props => {
  const { stats, loading, error } = useStats(url);

  const [selectedCountry, setSelectedCountry] = useState("USA");

  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Fragment>
        <h2>Currently Showing {selectedCountry}</h2>
        <Grid>{!loading && console.log(stats)}</Grid>
      </Fragment>
    </div>
  );
};

General.propTypes = {};

export default General;

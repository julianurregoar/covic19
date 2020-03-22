import React, { Fragment } from "react";
import PropTypes from "prop-types";
import BasicData from "../../../components/BasicData/BasicData";

const General = props => {
  const { stats, countryData, dailyData } = props;

  return (
    <div>
      <Fragment>
        <BasicData
          stats={stats}
          countryData={countryData}
          dailyData={dailyData}
        />
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

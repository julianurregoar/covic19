import React, { Fragment, useState } from "react";
import BasicData from "../../../components/BasicData/BasicData";
import useStats from "../../../utils/useStats/useStats";

const General = props => {
  const { isoCountriesStats } = props;

  const [selectedCountry, setSelectedCountry] = useState("USA");

  const { stats, loading, error } = useStats(
    `https://covid19.mathdro.id/api/countries/${selectedCountry}`
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Loading...</p>;
  console.log(stats);
  return (
    <div>
      <Fragment>
        <h2>Select a country</h2>
        <select
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {Object.entries(isoCountriesStats.countries).map(
            ([country, code]) => (
              <option
                selected={selectedCountry === isoCountriesStats.iso3[code]}
                key={code}
                value={isoCountriesStats.iso3[code]}
              >
                {country}
              </option>
            )
          )}
        </select>
        <h4>Currently Showing Country</h4>

        <BasicData stats={stats} text={selectedCountry} />
      </Fragment>
    </div>
  );
};

General.propTypes = {};

export default General;

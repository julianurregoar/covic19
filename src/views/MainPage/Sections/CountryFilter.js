import React, { Fragment, useState } from "react";
import BasicData from "../../../components/BasicData/BasicData";
import useStats from "../../../utils/useStats/useStats";

const General = props => {
  const { isoCountriesStats } = props;
  const { countries } = isoCountriesStats;
  const [selectedCountry, setSelectedCountry] = useState("Canada");

  const { stats, loading, error } = useStats(
    `https://covid19.mathdro.id/api/countries/${selectedCountry}`
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Loading...</p>;

  return (
    <div>
      <Fragment>
        <h2>Select a country</h2>
        <select
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {countries.map(country => (
            <option
              selected={selectedCountry === country.name}
              key={country.name}
              value={country.name}
            >
              {country.name}
            </option>
          ))}
        </select>
        <h4>Currently Showing Country</h4>

        <BasicData stats={stats} text={selectedCountry} />
      </Fragment>
    </div>
  );
};

General.propTypes = {};

export default General;

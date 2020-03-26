// Load 10 countries
export const countries = data => {
  const arr = [["Country", "Recovered", "Deaths", "Active"]];

  for (const obj in data) {
    const country = data[obj];
    const newArray = [
      country.countryRegion,
      country.recovered,
      country.deaths,
      country.active
    ];
    arr.push(newArray);
  }
  const result = arr.slice(0, 6);

  return result;
};

// Load daily
export const daily = data => {
  const arr = [["Date", "confirmed", "Deaths"]];

  for (const obj in data) {
    const daily = data[obj];
    const newArray = [
      daily.reportDate,
      daily.totalConfirmed,
      // daily.totalRecovered,
      daily.deaths.total
    ];
    arr.push(newArray);
  }
  const result = arr;

  return result;
};

// Province
export const province = data => {
  const arr = [["Country", "Recovered", "Deaths", "Active"]];
  for (const obj in data) {
    const province = data[obj];
    const newArray = [
      province.provinceState,
      province.recovered,
      province.deaths,
      province.active
    ];
    arr.push(newArray);
  }
  const result = arr.slice(0, 6);

  return result;
};

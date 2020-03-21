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

// Load 10 countries
export const daily = data => {
  const arr = [["Date", "confirmed", "Recovered"]];

  for (const obj in data) {
    const daily = data[obj];
    const newArray = [
      daily.reportDateString,
      daily.totalConfirmed,
      daily.totalRecovered
    ];
    arr.push(newArray);
  }
  const result = arr;

  return result;
};

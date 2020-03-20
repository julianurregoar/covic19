// Load 10 countries
export const wholeWorld = data => {
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
  const result = arr.slice(0, 11);

  return result;
};

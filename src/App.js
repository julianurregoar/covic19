import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//context
import AppContext from "./AppContext";

//Pages
import mainPage from "./views/MainPage/MainPage.js";
import useStats from "./utils/useStats/useStats";

const history = createBrowserHistory();
const url = "https://covid19.mathdro.id/api/";
const urlCountries = "https://covid19.mathdro.id/api/confirmed";
const urlDaily = "https://covid19.mathdro.id/api/daily";

///Update button

const App = () => {
  const general = useStats(url);
  const countries = useStats(urlCountries);
  const daily = useStats(urlDaily);

  const mainData = { general, countries, daily };
  return (
    <AppContext.Provider value={{ mainData }}>
      <Router history={history}>
        <Switch>
          <Route path='/' component={mainPage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;

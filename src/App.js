import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//context
import AppContext from "./AppContext";

//Pages
import mainPage from "./views/MainPage/MainPage.js";
import useStats from "./utils/useStats/useStats";

const history = createBrowserHistory();
const url = "https://covid19.mathdro.id/api/confirmed";

const App = () => {
  const { stats, loading, error } = useStats(url);

  return (
    <AppContext.Provider value={{ stats, loading, error }}>
      <Router history={history}>
        <Switch>
          <Route path='/' component={mainPage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;

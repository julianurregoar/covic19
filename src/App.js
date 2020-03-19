import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
//Pages
import mainPage from "./views/MainPage/MainPage.js";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={mainPage} />
      </Switch>
    </Router>
  );
};

export default App;

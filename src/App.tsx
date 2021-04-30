import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";

import "../assets/css/index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {Routes.map((entry, i) => (
        <Route {...entry} key={i} />
      ))}
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);

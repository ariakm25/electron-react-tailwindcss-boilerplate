import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Routes from "./Routes";

import "../assets/css/index.css";

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((entry, i) => (
          <Route {...entry} key={i} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default hot(module)(App);

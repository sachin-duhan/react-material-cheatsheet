import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./views/Home";

export default (props) => (
  <HashRouter>
      <Switch>
        <Route exact path="" component={Home} />{" "}
      </Switch>{" "}
  </HashRouter>
);

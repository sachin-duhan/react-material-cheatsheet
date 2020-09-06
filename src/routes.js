import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route exact path="/about" component={About} />{" "}
      <Route exact path="/contact" component={Contact} />{" "}
    </Switch>{" "}
  </HashRouter>
);

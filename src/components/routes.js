import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default () => (
  <Router>
    <Switch>
      <Route path="" component={} />
      <Route path="" component={} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

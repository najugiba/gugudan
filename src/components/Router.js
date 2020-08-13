import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Gugudan from "../routes/Gugudan";
import Grade from "../routes/Grade";
import Practice from "../routes/Practice";
import Testing from "../routes/Testing";
import Home from "../routes/Home";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gugudan" component={Gugudan} />
      <Route path="/testing" component={Testing} />
      <Route path="/practice" component={Practice} />
      <Route path="/grade" component={Grade} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

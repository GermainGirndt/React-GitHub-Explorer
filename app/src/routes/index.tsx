import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

// without switch === all valid routes
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* :XXX is used as a parm; :XXX+ is used to take all the following items (with /) as one unique param */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;

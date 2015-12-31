import {
  default as React,
} from "react";

import {
  Route,
  IndexRoute,
  Redirect,
} from "react-router";

import {
  AsyncApplication,
} from "../../containers";

import {
  AsyncGettingStarted,
} from "../../pages";

export default (
  <Route path="/" component={AsyncApplication}>
    <IndexRoute component={AsyncGettingStarted} />
    <Redirect path="*" to="/"/>
  </Route>
);

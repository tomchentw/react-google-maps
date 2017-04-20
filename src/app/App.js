import {
  default as React,
  Component,
} from "react";

import {
  useRouterHistory,
  Router,
  Route,
  IndexRoute,
  Redirect,
} from "react-router";

import {
  createHistory,
} from "history";

import {
  Application,
} from "./containers";

import {
  GettingStartedExample,
} from "./pages";

import {
  PageWithIframeEntry,
} from "./pages/async";

import {
  SimpleMapExample,
  StyledMapExample,
  GeolocationExample,
  DirectionsExample,
  OverlayViewExample,
  KmlLayerExample,
  FusionTablesLayerExample,
  PopUpInfoWindowExample,
} from "./pages/basics";

import {
  SimpleClickEventExample,
  ClosureListenersExample,
  AccessingArgumentsExample,
  GettingPropertiesExample,
} from "./pages/events";

import {
  DrawingExample,
} from "./pages/drawing";

import {
  SearchBoxExample,
} from "./pages/places";

import {
  MarkerClustererExample,
} from "./pages/addons";

const history = useRouterHistory(createHistory)({
  basename: `/react-google-maps`,
});

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Application}>
          <IndexRoute component={GettingStartedExample} />
          <Route path="basics">
            <Route path="simple-map" component={SimpleMapExample} />
            <Route path="styled-map" component={StyledMapExample} />
            <Route path="geolocation" component={GeolocationExample} />
            <Route path="directions" component={DirectionsExample} />
            <Route path="overlay-view" component={OverlayViewExample} />
            <Route path="kml-layer" component={KmlLayerExample} />
            <Route path="fusion-tables-layer" component = {FusionTablesLayerExample} />
            <Route path="pop-up-window" component={PopUpInfoWindowExample} />
          </Route>
          <Route path="events">
            <Route path="simple-click-event" component={SimpleClickEventExample} />
            <Route path="closure-listeners" component={ClosureListenersExample} />
            <Route path="accessing-arguments" component={AccessingArgumentsExample} />
            <Route path="getting-properties" component={GettingPropertiesExample} />
          </Route>
          <Route path="drawing">
            <Route path="drawing-tools" component={DrawingExample} />
          </Route>
          <Route path="places">
            <Route path="search-box" component={SearchBoxExample} />
          </Route>
          <Route path="addons">
            <Route path="marker-clusterer" component={MarkerClustererExample} />
          </Route>
          <Route path="async" component={PageWithIframeEntry} />
          <Redirect path="*" to="/" />
        </Route>
      </Router>
    );
  }
}

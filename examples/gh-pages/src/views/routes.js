import {
  default as React,
} from "react";

import {
  Route,
  IndexRoute,
  Redirect,
} from "react-router";

import {
  Application,
} from "../containers";

import {
  GettingStarted,
  GeojsonToComponents,
} from "../pages";

import {
  SimpleMap,
  StyledMap,
  Geolocation,
  Directions,
  OverlayView,
  KmlLayerExample,
} from "../pages/basics";

import {
  SimpleClickEvent,
  ClosureListeners,
  AccessingArguments,
  GettingProperties,
} from "../pages/events";

import {
  DrawingTools,
} from "../pages/drawing";

import {
  SearchBox,
} from "../pages/places";

import {
  MarkerClusterer,
} from "../pages/addons";

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={GettingStarted} />
    <Route path="basics">
      <Route path="simple-map" component={SimpleMap}/>
      <Route path="styled-map" component={StyledMap}/>
      <Route path="geolocation" component={Geolocation}/>
      <Route path="directions" component={Directions}/>
      <Route path="overlay-view" component={OverlayView}/>
      <Route path="kml-layer" component={KmlLayerExample}/>
    </Route>
    <Route path="events">
      <Route path="simple-click-event" component={SimpleClickEvent}/>
      <Route path="closure-listeners" component={ClosureListeners}/>
      <Route path="accessing-arguments" component={AccessingArguments}/>
      <Route path="getting-properties" component={GettingProperties}/>
    </Route>
    <Route path="drawing">
      <Route path="drawing-tools" component={DrawingTools}/>
    </Route>
    <Route path="places">
      <Route path="search-box" component={SearchBox}/>
    </Route>
    <Route path="addons">
      <Route path="marker-clusterer" component={MarkerClusterer}/>
    </Route>
    <Route path="geojson" component={GeojsonToComponents}/>
    <Redirect path="*" to="/"/>
  </Route>
);

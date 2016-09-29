import {
  default as React,
} from "react";

import {
  default as ReactDOM,
} from "react-dom";

import {
  default as App,
} from "./app/App";

import "./index.css";

/*
 *
 * Add script src="https://maps.googleapis.com/maps/api/js" to your HTML to provide google.maps reference
 */
ReactDOM.render(
  <App />,
  document.getElementById(`root`)
);

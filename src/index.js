import React from "react";

import ReactDOM from "react-dom";

const Root = (
  window.ReactGoogleMapsAsync ?
  require(`./app/AsyncApp`).default :
  /*
   * If you're not using async,
   *
   * Add script src="https://maps.googleapis.com/maps/api/js" to your HTML to provide google.maps reference
   */
  require(`./app/App`).default
);

import "./index.css";

ReactDOM.render(
  <Root />,
  document.getElementById(`root`)
);

import {default as React, Component} from "react";

import {default as GoogleMap} from "../../../../../src/GoogleMap";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
  render () {
    /*
     * 2. Render GoogleMap component with containerProps
     */
    return (
      <GoogleMap containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        /*
         * 3. config <GoogleMap> instance by properties
         */
        defaultZoom={8}
        defaultCenter={{lat: -34.397, lng: 150.644}} />
    );
  }
}

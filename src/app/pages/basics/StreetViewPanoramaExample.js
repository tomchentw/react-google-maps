/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
} from "../../../lib";

const coordinates = { lat: 49.2853171, lng: -123.1119202 };

const StreetViewPanoramaExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={coordinates}
  >
    <StreetViewPanorama
      defaultPosition={coordinates}
      visible
    />
  </GoogleMap>
));

/**
 * You can pass in an `element` to render `StreetViewPanorama` in its own container
 * At this point the `GoogleMap` wrapper and `withGoogleMap` HOC become optional, so you can either render map and StreetView
 * at the same time, or just the StreetView on its own
 *    <StreetViewPanorama
 *      element={<div />}
 *      defaultPosition={coordinates}
 *      visible
 *    />
 */

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class StreetViewPanoramaExample extends Component {

  render() {
    return (
      <StreetViewPanoramaExampleGoogleMap
        containerElement={
          <div style={{ width: `100%`, height: `50%` }} />
        }
        mapElement={
          <div style={{ width: `100%`, height: `100%` }} />
        }
      />
    );
  }
}

/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  GroundOverlay,
} from "../../../lib";

const GroundOverlayExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 40.740, lng: -74.18}}
  >
    <GroundOverlay
      clickable
      url={`https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg`}
      bounds={{
        north: 40.773941,
        south: 40.712216,
        east: -74.12544,
        west: -74.22655,
      }}
      opacity={.5}
    />
  </GoogleMap>
));

export default class GroundOverlayExample extends Component {
  render() {
    return (
      <GroundOverlayExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}

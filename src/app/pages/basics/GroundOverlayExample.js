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
      url={`https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg`}
      bounds={new google.maps.LatLngBounds(
        new google.maps.LatLng(40.712216, -74.22655),
        new google.maps.LatLng(40.773941, -74.12544)
      )}
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

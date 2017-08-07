/* global google */

import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "../../../lib";

import "./markerWithLabel.css"

const MarkerWithLabelExampleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{lat: 25.0391667, lng: 121.525}}
  >
    <Marker
      markerWithLabel={window.MarkerWithLabel}
      position={{
        lat: 25.0391667,
        lng: 121.525,
      }}
      opacity={0}
      labelClass="map-price-container"
      labelAnchor={new google.maps.Point(35, 27)}
      labelContent={`<div class="map-price-marker "><span>$135,123.00</span></div>`}
      labelStyle={{opacity: 0.8}}
    />
  </GoogleMap>
));

export default class MarkerWithLabelExample extends Component {
  render() {
    return (
      <MarkerWithLabelExampleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    )
  }
}

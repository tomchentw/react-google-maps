/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
  OverlayView,
} from "../../../lib";

const coordinates = { lat: 49.2853171, lng: -123.1119202 };

const STYLES = {
  overlayView: {
    background: `red`,
    color: `white`,
    padding: 5,
    borderRadius: `50%`,
  },
};

function getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) };
}

const StreetViewPanoramaExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={coordinates}
  >
    <StreetViewPanorama
      defaultPosition={coordinates}
      visible
    >
      <OverlayView
        position={{ lat: 49.28590291211115, lng: -123.11248166065218 }}
        mapPaneName={OverlayView.OVERLAY_LAYER}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <div style={STYLES.overlayView}>
          OverlayView
        </div>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
));

/**
 * You can pass in an `containerElement` to render `StreetViewPanorama` in its own container
 * At this point the `GoogleMap` wrapper and `withGoogleMap` HOC become optional,
 * so you can either render a map and StreetView at the same time,
 * or just the StreetView on its own
 *    <StreetViewPanorama
 *      containerElement={<div style={{ width: `100%`, height: `100%` }} />}
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
          <div style={{ width: `100%`, height: `100%` }} />
        }
        mapElement={
          <div style={{ width: `100%`, height: `100%` }} />
        }
      />
    );
  }
}

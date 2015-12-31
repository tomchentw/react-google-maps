import { default as React, Component } from "react";

import { GoogleMap, OverlayView } from "react-google-maps";

const STYLES = {
  mapContainer: {
    height: `100%`,
  },
  overlayView: {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  },
};

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class OverlayViewExample extends Component {
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state;

    return (
      <GoogleMap
        containerProps={{ ...this.props, style: STYLES.mapContainer }}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <OverlayView
          position={{ lat: -34.397, lng: 150.644 }}
          /*
           * An alternative to specifying position is specifying bounds.
           * bounds can either be an instance of google.maps.LatLngBounds
           * or an object in the following format:
           * bounds={ {ne: { lat: 62.400471, lng: -150.005608 }, sw: { { lat: 62.281819, lng: -150.287132 } } }
           */
          /*
           * 1. Specify the pane the OverlayView will be rendered to. For
           *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
           *    Defaults to `OverlayView.OVERLAY_LAYER`.
           */
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          /*
           * 2. Tweak the OverlayView's pixel position. In this case, we're
           *    centering the content.
           */
          getPixelPositionOffset={this.getPixelPositionOffset}
          /*
           * 3. Create OverlayView content using standard React components.
           */
        >
          <div style={STYLES.overlayView}>
            <h1>OverlayView</h1>
            <button onClick={::this.onClick}>
              I have been clicked {count} time{count === 1 ? `` : `s`}
            </button>
          </div>
        </OverlayView>
      </GoogleMap>
    );
  }

  onClick() {
    this.setState({ count: this.state.count + 1 });
  }

  getPixelPositionOffset(width, height) {
    return { x: -(width / 2), y: -(height / 2) };
  }
}

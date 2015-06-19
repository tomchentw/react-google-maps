import React from "react/addons";
import {GoogleMaps, OverlayView} from "react-google-maps";

const STYLES = {
  mapContainer: {
    height: "100%"
  },
  overlayView: {
    background: "white",
    border: "1px solid #ccc",
    padding: 15
  }
};

class OverlayViewExample extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = {count: 0};
  }

  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props,
          {count} = state;
    return (
      <GoogleMaps
        containerProps={{...otherProps, style: STYLES.mapContainer}}
        googleMapsApi={google.maps}
        zoom={8}
        center={{lat: -34.397, lng: 150.644}}>
        <OverlayView
          position={{lat: -34.397, lng: 150.644}}
          /*
           * 1. Specify the pane the OverlayView will be rendered to. For
           *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
           *    Defaults to `OverlayView.OVERLAY_LAYER`.
           */
          mapPane={OverlayView.OVERLAY_MOUSE_TARGET}
          /*
           * 2. Tweak the OverlayView's pixel position. In this case, we're
           *    centering the content.
           */
          getPixelPositionOffset={this.getPixelPositionOffset}
          /*
           * 3. Create OverlayView content using standard React components.
           */>
          <div style={STYLES.overlayView}>
            <h1>OverlayView</h1>
            <button onClick={this.onClick.bind(this)}>
              I have been clicked {count} time{count === 1 ? '' : 's'}
            </button>
          </div>
        </OverlayView>
      </GoogleMaps>
    );
  }

  onClick () {
    this.setState({count: this.state.count + 1});
  }

  getPixelPositionOffset (width, height) {
    return {x: -(width / 2), y: -(height / 2)};
  }
}

export default OverlayViewExample;

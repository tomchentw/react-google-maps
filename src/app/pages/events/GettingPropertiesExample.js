/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
} from "../../../lib";

const GettingPropertiesExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
    defaultCenter={props.center}
    zoom={props.zoom}
  >
    <InfoWindow
      defaultPosition={props.center}
    >
      <div>{props.content}</div>
    </InfoWindow>
  </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-properties
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class GettingPropertiesExample extends Component {

  state = {
    zoom: 4,
    content: `Change the zoom level`,
  };

  handleMapMounted = this.handleMapMounted.bind(this);
  handleZoomChanged = this.handleZoomChanged.bind(this);

  handleMapMounted(map) {
    this._map = map;
  }

  handleZoomChanged() {
    const nextZoom = this._map.getZoom();
    if (nextZoom !== this.state.zoom) {
      // Notice: Check zoom equality here,
      // or it will fire zoom_changed event infinitely
      this.setState({
        zoom: nextZoom,
        content: `Zoom: ${nextZoom}`,
      });
    }
  }

  render() {
    return (
      <GettingPropertiesExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapMounted={this.handleMapMounted}
        onZoomChanged={this.handleZoomChanged}
        center={new google.maps.LatLng(-25.363882, 131.044922)}
        zoom={this.state.zoom}
        content={this.state.content}
      />
    );
  }
}

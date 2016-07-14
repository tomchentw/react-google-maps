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

const AccessingArgumentsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={props.center}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) =>
      <Marker position={marker.position} key={index} />
    )}
  </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class AccessingArgumentsExample extends Component {

  state = {
    markers: [],
    center: new google.maps.LatLng(-25.363882, 131.044922),
  };

  handleMapClick = this.handleMapClick.bind(this);

  handleMapClick(event) {
    this.setState({
      center: event.latLng,
      markers: [
        ...this.state.markers,
        { position: event.latLng },
      ],
    });
  }

  render() {
    return (
      <AccessingArgumentsExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapClick={this.handleMapClick}
        center={this.state.center}
        markers={this.state.markers}
      />
    );
  }
}

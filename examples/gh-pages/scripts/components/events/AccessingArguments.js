import {default as React, Component} from "react";

import {GoogleMap, Marker} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class AccessingArguments extends Component {

  state =  {
    markers: [],
    center: new google.maps.LatLng(-25.363882, 131.044922),
  }

  _handle_map_click (event) {
    const {markers} = this.state;
    markers.push({
      position: event.latLng
    });
    this.setState({
      center: event.latLng,
      markers,
    });
  }

  render () {
    const {markers, center} = this.state;

    return (
      <GoogleMap containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        defaultZoom={4}
        center={center}
        onClick={::this._handle_map_click}>
        {markers.map((marker, index) =>
          <Marker position={marker.position} key={index} />
        )}
      </GoogleMap>
    );
  }
}

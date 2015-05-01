import React from "react/addons";
import {GoogleMaps, Marker} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 */
class AccessingArguments extends React.Component {

  constructor (...args) {
    super(...args);
    this.state =  {
      markers: [],
    };
  }

  _handle_map_click (event) {
    const {markers} = this.state;
    markers.push({
      position: event.latLng
    });
    this.setState({ markers });
    this.refs.map.panTo(event.latLng);
  }

  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props;

    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        googleMapsApi={google.maps}
        zoom={4}
        center={new google.maps.LatLng(-25.363882, 131.044922)}
        onClick={this._handle_map_click.bind(this)}>
        {state.markers.map(toMarker, this)}
      </GoogleMaps>
    );

    function toMarker (marker) {
      return (
        <Marker position={marker.position} />
      );
    }
  }

}

export default AccessingArguments;

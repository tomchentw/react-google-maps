import React from "react/addons";
import {GoogleMaps, Marker} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 */
class SimpleClickEvent extends React.Component {

  constructor (...args) {
    super(...args);
    this.state = {
      zoom: 4,
      center: new google.maps.LatLng(-25.363882, 131.044922),
      timeoutId: null,
    };
  }

  _handle_marker_click () {
    this.setState({
      zoom: 8,
      center: this.refs.marker.getPosition(),
    });
  }

  _handle_map_center_changed () {
    const {center, timeoutId} = this.state;
    const {marker} = this.refs;
    if (!marker) {
      return;
    }
    const newPos = this.refs.marker.getPosition();
    if (center.equals(newPos)) {
      // Notice: Check newPos equality here,
      // or it will fire center_changed event infinitely
      return;
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      this.refs.map.panTo(newPos);
    }, 3000);
    this.setState({
      timeoutId: newTimeoutId,
    });
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
        zoom={state.zoom}
        center={state.center}
        onCenterChanged={this._handle_map_center_changed.bind(this)}>
        <Marker
          ref="marker"
          position={state.center}
          title="Click to zoom"
          onClick={this._handle_marker_click.bind(this)} />
      </GoogleMaps>
    );
  }

}

export default SimpleClickEvent;

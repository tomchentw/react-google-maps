import React from "react/addons";
import {GoogleMaps, InfoWindow, Marker} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-closure
 */
class ClosureListeners extends React.Component {

  constructor (...args) {
    super(...args);
    this.state = {
      markers: [],
    };
  }

  componentWillMount () {
    var southWest = new google.maps.LatLng(-31.203405, 125.244141),
        northEast = new google.maps.LatLng(-25.363882, 131.044922),

        lngSpan = northEast.lng() - southWest.lng(),
        latSpan = northEast.lat() - southWest.lat(),
        i,
        position,
        markers = [];

    for (i = 0; i < 5; i++) {
      position = new google.maps.LatLng(
        southWest.lat() + latSpan * Math.random(),
        southWest.lng() + lngSpan * Math.random()
      );
      markers.push({
        position,
        content: "This is the secret message".split(" ")[i],
        showInfo: false,
      })
    }
    this.setState({
      markers, 
    });
  }

  _handle_marker_click (marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }

  _handle_closeclick (marker) {
    marker.showInfo = false;
    this.setState(this.state);
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
        googleMapsApi={google.maps}
        zoom={4}
        center={new google.maps.LatLng(-25.363882, 131.044922)}>
        {state.markers.map(toMarker, this)}
      </GoogleMaps>
    );

    function toMarker (marker, index) {
      var ref = `marker_${index}`;
      return (
        <Marker key={ref} ref={ref}
                      position={marker.position}
                      title={(index+1).toString()}
                      onClick={this._handle_marker_click.bind(this, marker)}>
          {renderInfoWindow.call(this, marker, index)}
        </Marker>
      );
    }

    function renderInfoWindow (marker, index) {
      var ref = `marker_${index}`;
      return marker.showInfo ? <InfoWindow key={`${ref}_info_window`} owner={ref} content={marker.content} onCloseclick={this._handle_closeclick.bind(this, marker)} /> : null;
    }
  }

}

export default ClosureListeners;

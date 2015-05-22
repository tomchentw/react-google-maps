import React from "react/addons";
import {GoogleMaps, Marker} from "react-google-maps";

const {update} = React.addons;
/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 */
class GettingStarted extends React.Component {

  constructor (...args) {
    super(...args);
    this.state = {
      markers: [{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        },
        key: "Taiwan",
        animation: 2
      }],
    };
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  _handle_map_click (event) {
    var {markers} = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          animation: 2,
          key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });

    if (3 === markers.length) {
      this.props.toast(
        "Right click on the marker to remove it",
        "Also check the code!"
      );
    }
    this.refs.map.panTo(event.latLng);
  }

  _handle_marker_rightclick (index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    var {markers} = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1]
      ],
    });
    this.setState({ markers });
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
        googleMapsApi={
          "undefined" !== typeof google ? google.maps : null
        }
        zoom={3}
        center={{lat: -25.363882, lng: 131.044922}}
        onClick={this._handle_map_click.bind(this)}>
        {state.markers.map(toMarker, this)}
      </GoogleMaps>
    );

    function toMarker (marker, index) {
      return (
        <Marker
          position={marker.position}
          key={marker.key}
          animation={marker.animation}
          onRightclick={this._handle_marker_rightclick.bind(this, index)} />
      );
    }
  }
}

export default GettingStarted; 

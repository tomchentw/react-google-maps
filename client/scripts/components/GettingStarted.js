import React from "react/addons";
import {GoogleMaps, Marker} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 */
const GettingStarted = React.createClass({

  getInitialState () {
    return {
      markers: [{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        },
        key: "Taiwan",
      }],
    };
  },
  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  _handle_map_click (event) {
    var {markers} = this.state;
    markers = React.addons.update(markers, {
      $push: [
        {
          position: event.latLng,
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
  },

  _handle_marker_rightclick (index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    var {markers} = this.state;
    markers.splice(index, 1);
    this.setState({ markers });
  },

  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props;

    /* Internally, <GoogleMaps> will expand to:
        <div {...containerProps}>
          <div {...mapProps}>
            <!-- This inner div is where google.maps.Map instance -->
            <!-- will be initialized on -->
          </div>
          <!-- The container div is just a wrapper around inner div -->
          <!-- and other children components of maps. -->
          <!-- This is leaky. I knew it. -->
        </div>
     */
    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }} mapProps={{
          style: {
            height: "100%",
          },
        }}
        ref="map"
        googleMapsApi={googleMapsApi}
        zoom={3}
        center={new google.maps.LatLng(-25.363882, 131.044922)}
        onClick={this._handle_map_click}>
        {state.markers.map(toMarker, this)}
      </GoogleMaps>
    );

    function toMarker (marker, index) {
      return (
        <Marker
          position={marker.position}
          key={marker.key}
          onRightclick={this._handle_marker_rightclick.bind(this, index)} />
      );
    }
  }
});

export default React.createClass({
  render () {
    return (
      <GettingStarted googleMapsApi={google.maps} {...this.props} />
    );
  }
});

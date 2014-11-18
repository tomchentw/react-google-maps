"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map, Marker} = require("react-google-maps"),
    AccessingArguments;
/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 */
AccessingArguments = React.createClass({
  displayName: "AccessingArguments",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  getInitialState () {
    return {
      markers: [],
    };
  },

  _handle_map_click (event) {
    var {markers} = this.state;
    markers.push({
      position: event.latLng
    });
    this.setState({ markers });
    this.refs.map.panTo(event.latLng);
  },

  _render (props, state) {
    return <div style={{height: "100%"}} {...props}>
      <Map ref="map" style={{height: "100%"}} zoom={4} center={new google.maps.LatLng(-25.363882, 131.044922)} onClick={this._handle_map_click} />
      {state.markers.map(toMarker, this)}
    </div>;

    function toMarker (marker) {
      return <Marker position={marker.position} />;
    }
  }
});

module.exports = React.createClass({
  mixins: [require("../../ReactFutureMixin")],

  _render (props, state) {
    return <AccessingArguments googleMapsApi={google.maps} {...props} />;
  }
});

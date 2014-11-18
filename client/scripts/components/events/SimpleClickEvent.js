"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map, Marker} = require("react-google-maps"),
    SimpleClickEvent;
/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 */
SimpleClickEvent = React.createClass({
  displayName: "SimpleClickEvent",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  getInitialState () {
    return {
      zoom: 4,
      center: new google.maps.LatLng(-25.363882, 131.044922),
      timeoutId: null,
    };
  },

  _handle_marker_click () {
    this.setState({
      zoom: 8,
      center: this.refs.marker.getPosition(),
    });
  },

  _handle_map_center_changed () {
    var {timeoutId} = this.state;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      this.refs.map.panTo(this.refs.marker.getPosition());
    }, 3000);
    this.setState({
      timeoutId,
    });
  },

  _render (props, state) {
    return <div style={{height: "100%"}} {...props}>
      <Map ref="map" style={{height: "100%"}} zoom={state.zoom} center={state.center} onCenterChanged={this._handle_map_center_changed} />
      <Marker ref="marker" position={state.center} title="Click to zoom" onClick={this._handle_marker_click} />
    </div>;
  }
});

module.exports = React.createClass({
  mixins: [require("../../ReactFutureMixin")],

  _render (props, state) {
    return <SimpleClickEvent googleMapsApi={google.maps} {...props} />;
  }
});

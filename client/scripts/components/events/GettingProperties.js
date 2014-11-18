"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map, InfoWindow} = require("react-google-maps"),
    GettingProperties;
/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-properties
 */
GettingProperties = React.createClass({
  displayName: "GettingProperties",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  getInitialState () {
    return {
      content: "Change the zoom level", 
    };
  },

  _handle_zoom_changed () {
    var zoomLevel = this.refs.map.getZoom();
    this.setState({
      content: `Zoom: ${ zoomLevel }`,
    });
  },

  _render (props, state) {
    var myLatLng = new google.maps.LatLng(-25.363882, 131.044922);

    return <div style={{height: "100%"}} {...props}>
      <Map ref="map" style={{height: "100%"}} zoom={4} center={myLatLng} onZoomChanged={this._handle_zoom_changed} />
      <InfoWindow position={myLatLng} content={state.content} />
    </div>;
  }
});

module.exports = React.createClass({
  mixins: [require("../../ReactFutureMixin")],

  _render (props, state) {
    return <GettingProperties googleMapsApi={google.maps} {...props} />;
  }
});

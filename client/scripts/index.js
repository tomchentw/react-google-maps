/** @jsx React.DOM */
"use strict";
require("../styles/index.scss");
var React = require("react/addons");

var {GoogleMapsMixin, Map, Marker} = require("../../src");

var Body = React.createClass({

  mixins: [GoogleMapsMixin],

  getDefaultProps () {
    return {
      center: new google.maps.LatLng(-25.363882,131.044922),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  },

  getInitialState () {
    return  {
      googleMapsApi: google.maps,
      zoom: 4,
      opacity: 1
    };
  },

  render () {
    return this._render(this.props, this.state);
  },

  _handle_map_click () {
    console.log("_handle_map_click");
  },

  _handle_map_zoom_changed () {
    this.setState({
      opacity: 0.5+(this.state.zoom/14),
      zoom: this.refs.map.getZoom()
    })
  },

  _handle_marker_click () {
    this.setState({
      zoom: 1+this.state.zoom
    });
  },

  _render (props, state) {
    return <div>
      <Map  ref="map"
            center={props.center}
            zoom={state.zoom}
            mapTypeId={props.mapTypeId}
            onClick={this._handle_map_click}
            onZoomChanged={this._handle_map_zoom_changed} />
      <Marker position={props.center}
              title={"Hello World!"}
              opacity={state.opacity}
              onClick={this._handle_marker_click} />
    </div>;
  }
});


var bodyRef = React.renderComponent(
  <Body />,
  document.getElementById("react-root")
);

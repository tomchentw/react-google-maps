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
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  },

  getInitialState () {
    return  {
      googleMapsApi: google.maps
    };
  },

  render () {
    return this._render(this.props, this.state);
  },

  _handle_map_click () {
    console.log("_handle_map_click");
  },

  _handle_marker_click () {
    console.log("_handle_marker_click");
  },

  _render (props, state) {
    return <div>
      <Map  center={props.center}
            zoom={props.zoom}
            mapTypeId={props.mapTypeId}
            onClick={this._handle_map_click} />
      <Marker position={props.center}
              title={"Hello World!"}
              onClick={this._handle_marker_click} />
    </div>;
  }
});


var bodyRef = React.renderComponent(
  <Body />,
  document.getElementById("react-root")
);

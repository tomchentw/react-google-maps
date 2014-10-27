/** @jsx React.DOM */
"use strict";
require("../styles/index.scss");
var React = require("react/addons");
var {update} = React.addons;

var {GoogleMapsMixin, Map, Marker, Polygon, Polyline} = require("../../src");

var Body = React.createClass({

  mixins: [GoogleMapsMixin],

  getDefaultProps () {
    return {
      center: {lat: 24.886436490787712, lng: -70.2685546875},
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      bermudaTriangle: {
        paths: [
          {lat: 25.774252, lng: -80.190262},
          {lat: 18.466465, lng: -66.118292},
          {lat: 32.321384, lng: -64.75737},
          {lat: 25.774252, lng: -80.190262},
        ],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      },
      flightPath: {
        path: [
          {lat: 37.772323, lng: -122.214897},
          {lat: 21.291982, lng: -157.821856},
          {lat: -18.142599, lng: 178.431},
          {lat: -27.46758, lng: 153.027892},
        ],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      },
    };
  },

  getInitialState () {
    return  {
      googleMapsApi: google.maps,
      zoom: 4,
      opacity: 1,
      hideMarker: false,
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

  _handle_polygon_rightclick () {
    console.log(this.state.hideMarker);
    this.setState({
      hideMarker: !this.state.hideMarker
    })
  },

  _render (props, state) {
    return <div>
      <Map  ref="map"
            center={props.center}
            zoom={state.zoom}
            mapTypeId={props.mapTypeId}
            onClick={this._handle_map_click}
            onZoomChanged={this._handle_map_zoom_changed} />
      { state.hideMarker ? false :
          <Marker position={props.center}
                  title={"the Bermuda Triangle!"}
                  opacity={state.opacity}
                  onClick={this._handle_marker_click} />
      }
      {
        Polygon(update(props.bermudaTriangle, { $merge: {
          onRightclick: this._handle_polygon_rightclick
        }}))
      }
      { Polyline(props.flightPath) }
    </div>;
  }
});


var bodyRef = React.renderComponent(
  <Body />,
  document.getElementById("react-root")
);

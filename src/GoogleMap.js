/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var Map = require("./Map");

module.exports = React.createClass({
  displayName: "GoogleMap",

  getDefaultProps () {
    return {
      mapOptions: {}
    };
  },

  getInitialState () {
    return {
      googleMapsApi: this.props.googleMapsApi || mapsNullObject,
      map: null
    };
  },

  componentWillReceiveProps (nextProps) {
    var {googleMapsApi} = nextProps;

    if (mapsNullObject !== googleMapsApi) {
      this.setState({
        googleMapsApi
      });
    }
  },

  componentWillUnmount () {
    var {googleMapsApi, map} = this.state;
    this.refs.map.clear_listeners(googleMapsApi, map);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _on_map_ceated (map) {
    this.setState({ map });
  },

  _render (props, state) {
    return <div>
      <Map  ref="map"
            googleMapsApi={state.googleMapsApi}
            options={props.mapOptions}
            on_map_ceated={this._on_map_ceated}>
      </Map>
      {props.children}
    </div>;
  }
});

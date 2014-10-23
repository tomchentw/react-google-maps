/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var EventBindingMixin = require("./mixins/EventBindingMixin");

var mapsNullObject = {

};

function noop () {}

module.exports = React.createClass({
  displayName: "Map",

  mixins: [EventBindingMixin],

  getDefaultProps () {
    return {
      googleMapsApi: mapsNullObject,
      options: {},
      on_map_ceated: noop,
    };
  },

  getInitialState () {
    return {
      initialized: false
    }
  },

  componentDidMount () {
    this._init_google_maps(this.props.googleMapsApi);
  },

  componentDidUpdate () {
    this._init_google_maps(this.props.googleMapsApi);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_google_maps (googleMapsApi) {
    if (mapsNullObject === googleMapsApi || this.state.initialized) { return; }
    var map = new googleMapsApi.Map(
      this.refs.mapCanvas.getDOMNode(),
      this.props.options
    );
    this.setState({ initialized: true });
    this.props.on_map_ceated(map);
    this.upsert_listeners(googleMapsApi, map);
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});

/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var EventBindingMixin = require("./mixins/EventBindingMixin");

var mapsNullObject = {

};

module.exports = React.createClass({
  displayName: "GoogleMap",

  mixins: [EventBindingMixin],

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

  componentDidMount () {
    this._init_google_maps(this.state.googleMapsApi);
  },

  componentDidUpdate () {
    this._init_google_maps(this.state.googleMapsApi);
  },

  componentWillUnmount () {
    var {googleMapsApi, map} = this.state;
    this.clear_listeners(googleMapsApi, map);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_google_maps (googleMapsApi) {
    if (mapsNullObject === googleMapsApi) { return; }
    var {map, eventNames} = this.state;
    if (!map) {
      map = new googleMapsApi.Map(
        this.refs.mapCanvas.getDOMNode(),
        this.props.mapOptions
      );
      this.setState({ map });
    }
    this.upsert_listeners(googleMapsApi, map);
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});

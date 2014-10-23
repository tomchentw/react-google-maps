/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var mapsNullObject = {

};


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

  componentDidMount () {
    this._initGoogleMaps(this.state.googleMapsApi);
  },

  componentDidUpdate () {
    this._initGoogleMaps(this.state.googleMapsApi);
  },

  _initGoogleMaps (googleMapsApi) {
    if (this.state.map || mapsNullObject === googleMapsApi) { return; }
    var map = new googleMapsApi.Map(
      this.refs.mapCanvas.getDOMNode(),
      this.props.mapOptions
    );
    this.setState({
      map
    });
  },

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});

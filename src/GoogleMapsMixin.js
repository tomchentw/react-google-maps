"use strict";
var React = require("react/addons");

module.exports = {

  getInitialState () {
    return {
      googleMapsApi: this.props.googleMapsApi,
      map: null
    };
  },

  childContextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
    getRef: React.PropTypes.func,
    _set_map: React.PropTypes.func
  },

  getChildContext () {
    return {
      getMap: this._get_map,
      getApi: this._get_api,
      hasMap: this._has_map,
      getRef: this._get_ref,
      _set_map: this._set_map
    };
  },

  _get_map () {
    return this.state.map;
  },

  _get_api () {
    return this.state.googleMapsApi;
  },

  _has_map () {
    return !!this._get_map();
  },

  _get_ref (key) {
    return this.refs[key];
  },

  _set_map (map) {
    this.setState({ map });
    return map;
  }
};

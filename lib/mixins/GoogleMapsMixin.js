"use strict";
var React = require("react/addons");

module.exports = {

  getInitialState:function () {
    return {
      googleMapsApi: this.props.googleMapsApi,
      map: null
    };
  },

  childContextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
    getInstanceByRef: React.PropTypes.func,
    _set_map: React.PropTypes.func
  },

  getChildContext:function () {
    return {
      getMap: this._get_map,
      getApi: this._get_api,
      hasMap: this._has_map,
      getInstanceByRef: this._get_instance_by_ref,
      _set_map: this._set_map
    };
  },

  componentWillReceiveProps:function (nextProps) {
    if (!this.state.googleMapsApi && nextProps.googleMapsApi) {
      this.setState({
        googleMapsApi: nextProps.googleMapsApi
      });
    }
  },

  _get_map:function () {
    return this.state.map;
  },

  _get_api:function () {
    return this.state.googleMapsApi;
  },

  _has_map:function () {
    return !!this._get_map();
  },

  _get_instance_by_ref:function (key) {
    return this.refs[key].state._instance;
  },

  _set_map:function (map) {
    this.setState({ map:map });
    return map;
  }
};

/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

module.exports = {

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  },

  contextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
  }
};

"use strict";
var React = require("react/addons"),
    {PropTypes} = React;

function noop () {}

module.exports = function (eventMap, propTypes, spec) {
  eventMap.__keys__.forEach(function (eventName) {
    propTypes[eventName] = PropTypes.func;
    spec[eventName] = function (...args) {
      (this.props[eventName] || noop).apply(null, args);
    };
  });
};

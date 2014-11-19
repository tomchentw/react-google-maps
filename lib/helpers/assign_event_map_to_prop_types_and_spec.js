"use strict";
var React = require("react/addons"),
    $__0=  React,PropTypes=$__0.PropTypes;

function noop () {}

module.exports = function (eventMap, propTypes, spec) {
  eventMap.__keys__.forEach(function (eventName) {
    propTypes[eventName] = PropTypes.func;
    spec[eventName] = function () {for (var args=[],$__0=0,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
      (this.props[eventName] || noop).apply(null, args);
    };
  });
};

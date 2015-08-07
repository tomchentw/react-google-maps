"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = composeOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _controlledOrDefault = require("./controlledOrDefault");

var _controlledOrDefault2 = _interopRequireDefault(_controlledOrDefault);

function composeOptions(props, optionNameList) {
  var getter = (0, _controlledOrDefault2["default"])(props);

  return optionNameList.reduce(function (acc, optionName) {
    var value = getter(optionName);
    if ("undefined" !== typeof value) {
      acc[optionName] = value;
    }
    return acc;
  }, _extends({}, getter("options")));
}

module.exports = exports["default"];
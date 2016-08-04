"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = composeOptions;

var _controlledOrDefault = require("./controlledOrDefault");

var _controlledOrDefault2 = _interopRequireDefault(_controlledOrDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function composeOptions(props, controlledPropTypes) {
  var optionNameList = (0, _keys2.default)(controlledPropTypes);
  var getter = (0, _controlledOrDefault2.default)(props);

  // props from arguments may contain unknow props.
  // We only interested those in optionNameList
  return optionNameList.reduce(function (acc, optionName) {
    /* eslint-disable no-param-reassign */
    if ("options" !== optionName) {
      var value = getter(optionName);
      if ("undefined" !== typeof value) {
        acc[optionName] = value;
      }
    }
    return acc;
  }, (0, _extends3.default)({}, getter("options")));
}
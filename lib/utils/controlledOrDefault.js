"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = controlledOrDefault;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _addDefaultPrefix = require("./addDefaultPrefix");

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function controlledOrDefault(props) {
  return function (name) {
    if (Object.prototype.hasOwnProperty.call(props, name)) {
      return props[name];
    } else {
      return props[(0, _addDefaultPrefix2["default"])(name)];
    }
  };
}

module.exports = exports["default"];
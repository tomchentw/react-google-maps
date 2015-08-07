"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultPropsCreator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _addDefaultPrefix = require("./addDefaultPrefix");

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function defaultPropsCreator(propTypes) {
  return Object.keys(propTypes).reduce(function (acc, name) {
    acc[(0, _addDefaultPrefix2["default"])(name)] = propTypes[name];
    return acc;
  }, {});
}

module.exports = exports["default"];
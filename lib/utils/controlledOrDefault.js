"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = controlledOrDefault;

var _addDefaultPrefix = require("./addDefaultPrefix");

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function controlledOrDefault(props) {
  return function (name) {
    if (Object.prototype.hasOwnProperty.call(props, name)) {
      return props[name];
    } else {
      return props[(0, _addDefaultPrefix2.default)(name)];
    }
  };
}
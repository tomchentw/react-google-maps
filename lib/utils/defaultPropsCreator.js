"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = defaultPropsCreator;

var _addDefaultPrefix = require("./addDefaultPrefix");

var _addDefaultPrefix2 = _interopRequireDefault(_addDefaultPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultPropsCreator(propTypes) {
  return (0, _keys2.default)(propTypes).reduce(function (acc, name) {
    /* eslint-disable no-param-reassign */
    acc[(0, _addDefaultPrefix2.default)(name)] = propTypes[name];
    return acc;
  }, {});
}
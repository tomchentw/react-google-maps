"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlObjDefinition = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _isEqual2 = require("lodash/isEqual");

var _isEqual3 = _interopRequireDefault(_isEqual2);

exports.default = makeUrl;
exports.getUrlObjChangedKeys = getUrlObjChangedKeys;

var _url = require("url");

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeUrl(urlObj) {
  return (0, _url.format)({
    protocol: urlObj.protocol,
    hostname: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    query: urlObj.query
  });
}

var urlObjDefinition = exports.urlObjDefinition = {
  // PropTypes for URL generation
  // https://nodejs.org/api/url.html#url_url_format_urlobj
  protocol: _react.PropTypes.string,
  hostname: _react.PropTypes.string.isRequired,
  port: _react.PropTypes.number,
  pathname: _react.PropTypes.string.isRequired,
  query: _react.PropTypes.object.isRequired
};

function getUrlObjChangedKeys(urlObj, nextUrlObj) {
  return (0, _keys2.default)(urlObjDefinition).filter(function (key) {
    return !(0, _isEqual3.default)(urlObj[key], nextUrlObj[key]);
  });
}
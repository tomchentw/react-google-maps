"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeUrl;
exports.getUrlObjChangedKeys = getUrlObjChangedKeys;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _url = require("url");

var _react = require("react");

var _lodashIsequal = require("lodash.isequal");

var _lodashIsequal2 = _interopRequireDefault(_lodashIsequal);

function makeUrl(urlObj) {
  return (0, _url.format)({
    protocol: urlObj.protocol,
    hostname: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    query: urlObj.query
  });
}

var urlObjDefinition = {
  // PropTypes for URL generation
  // https://nodejs.org/api/url.html#url_url_format_urlobj
  protocol: _react.PropTypes.string,
  hostname: _react.PropTypes.string.isRequired,
  port: _react.PropTypes.number,
  pathname: _react.PropTypes.string.isRequired,
  query: _react.PropTypes.object.isRequired
};

exports.urlObjDefinition = urlObjDefinition;

function getUrlObjChangedKeys(urlObj, nextUrlObj) {
  return Object.keys(urlObjDefinition).filter(function (key) {
    return !(0, _lodashIsequal2["default"])(urlObj[key], nextUrlObj[key]);
  });
}
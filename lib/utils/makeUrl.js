"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeUrl;

var _url = require("url");

function makeUrl(urlObj) {
  return (0, _url.format)({
    protocol: urlObj.protocol,
    hostname: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    query: urlObj.query
  });
}

module.exports = exports["default"];
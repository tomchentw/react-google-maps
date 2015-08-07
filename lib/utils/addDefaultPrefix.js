"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addDefaultPrefix;

function addDefaultPrefix(name) {
  return "default" + (name[0].toUpperCase() + name.slice(1));
}

module.exports = exports["default"];
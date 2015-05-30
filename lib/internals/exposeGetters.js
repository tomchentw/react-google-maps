"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function exposeGetters(component, prototype, instance) {
  for (var key in prototype) {
    if (key.match(/^get/) && !key.match(/Map$/)) {
      component[key] = instance[key].bind(instance);
    }
  }
}

exports["default"] = exposeGetters;
module.exports = exports["default"];
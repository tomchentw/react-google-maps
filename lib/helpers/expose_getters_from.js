"use strict";

module.exports = function (component, prototype, instance) {
  for (var key in prototype) {
    if (key.match(/^get/) && !key.match(/Map$/)) {
      component[key] = instance[key].bind(instance);
    }
  }
};

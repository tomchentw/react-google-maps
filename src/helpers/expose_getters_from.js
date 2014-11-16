"use strict";

module.exports = function (component, prototype, instance) {
  Object.keys(prototype).forEach(function (key) {
    if (key.match(/^get/) && !key.match(/Map$/)) {
      component[key] = instance[key].bind(instance);
    }
  });
};

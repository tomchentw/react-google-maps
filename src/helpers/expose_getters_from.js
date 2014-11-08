"use strict";

module.exports = (component, prototype, instance) => {
  Object.keys(prototype).forEach((key) => {
    if (key.match(/^get/) && !key.match(/Map$/)) {
      component[key] = instance[key].bind(instance);
    }
  });
};

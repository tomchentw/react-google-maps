function exposeGetters (component, prototype, instance) {
  for (let key in prototype) {
    if (key.match(/^get/) && !key.match(/Map$/)) {
      component[key] = instance[key].bind(instance);
    }
  }
}

export default exposeGetters;

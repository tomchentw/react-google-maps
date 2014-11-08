"use strict";
var React = require("react/addons");
var deepEqual = require("deep-equal");

module.exports = {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.children) {
      return deepEqual(nextProps, this.props);
    }
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  },

  contextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
    getRef: React.PropTypes.func
  },

  expose_getters_from (prototype, instance) {
    Object.keys(prototype).forEach((key) => {
      if (key.match(/^get/) && !key.match(/Map$/)) {
        this[key] = instance[key].bind(instance);
      }
    });
  }
};

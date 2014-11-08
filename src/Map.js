"use strict";
var React = require("react/addons"),
    deepEqual = require("deep-equal"),

    expose_getters_from = require("./helpers/expose_getters_from"),
    EventBindingMixin = require("./mixins/EventBindingMixin");

function ensure_map_created (component, createdCallback, createFactory) {
  var {context} = component,
      map = context.getMap(),
      noMap = !map;

  if (noMap && context.getApi() && createFactory) {
    map = createFactory(component, context);
  }
  if (map) {
    createdCallback(map);
    if (noMap) {
      component.setState({_initialized: true});
    }
  }
}

function create_map (component, context) {
  var {Map} = context.getApi(),
      map = new Map(
    component.refs.mapCanvas.getDOMNode(),
    component.props
  );
  expose_getters_from(component, Map.prototype, map);
  return context._set_map(map);
}

module.exports = React.createClass({
  displayName: "Map",

  mixins: [EventBindingMixin],

  contextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
    _set_map: React.PropTypes.func
  },

  getInitialState () {
    return {
      _initialized: false
    };
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !deepEqual(nextProps, this.props) || nextState._initialized !== this.state._initialized;
  },

  componentDidMount () {
    ensure_map_created(this, this.add_listeners, create_map);
  },

  componentWillUpdate () {
    ensure_map_created(this, this.clear_listeners);
  },

  componentDidUpdate () {
    ensure_map_created(this, (map) => {
      map.setOptions(this.props);
      this.add_listeners(map);
    }, create_map);
  },

  componentWillUnmount () {
    ensure_map_created(this, (map) => {
      this.clear_listeners(map);
      this.context._set_map(null);
    });
  },

  render () {
    return this._render(this.props, this.state);
  },

  get_event_names () {
    return "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed";
  },

  _render (props, state) {
    return <div ref="mapCanvas" {...props}></div>;
  }
});

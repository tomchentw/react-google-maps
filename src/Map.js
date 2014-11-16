"use strict";
var React = require("react/addons"),
    deepEqual = require("deep-equal"),

    expose_getters_from = require("./helpers/expose_getters_from"),
    to_event_map = require("./helpers/to_event_map"),
    assign_event_map_to_prop_types_and_spec = require("./helpers/assign_event_map_to_prop_types_and_spec"),
    EventBindingMixin = require("./mixins/EventBindingMixin"),

    EVENT_NAMES = "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed",
    EVENT_MAP = to_event_map(EVENT_NAMES),

    MapSpec,
    MapPropTypes;

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

MapPropTypes = {

};

MapSpec = {
  displayName: "Map",

  mixins: [EventBindingMixin(EVENT_MAP)],

  propTypes: MapPropTypes,

  contextTypes: {
    getMap: React.PropTypes.func,
    getApi: React.PropTypes.func,
    hasMap: React.PropTypes.func,
    _set_map: React.PropTypes.func
  },

  getInitialState () {
    return {
      /* [null, false, true] => ["init", "api loaded", "done"] */
      _initialized: null,
    };
  },

  shouldComponentUpdate(nextProps, nextState) {
    return !deepEqual(nextProps, this.props) || nextState._initialized !== this.state._initialized;
  },

  componentDidMount () {
    ensure_map_created(this, this.add_listeners, create_map);
  },

  componentWillReceiveProps (nextProps, nextContext) {
    if (null == this.state._initialized && nextContext.getApi()) {
      this.setState({
        _initialized: false,
      });
    }
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

  _render (props, state) {
    return <div ref="mapCanvas" {...props}></div>;
  }
};

assign_event_map_to_prop_types_and_spec(EVENT_MAP, MapPropTypes, MapSpec);

module.exports = React.createClass(MapSpec);

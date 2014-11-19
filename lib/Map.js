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
  var $__0=  component,context=$__0.context,
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
  var $__0=  context.getApi(),Map=$__0.Map,
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

  /*
   * Some public API we'd like to expose
   */
  panBy:function (x, y) {
    ensure_map_created(this, function(map)  {
      map.panBy(x, y);
    });
  },

  panTo:function (latLng) {
    ensure_map_created(this, function(map)  {
      map.panTo(latLng);
    });
  },

  panToBounds:function (latLngBounds) {
    ensure_map_created(this, function(map)  {
      map.panToBounds(latLngBounds);
    });
  },

  getInitialState:function () {
    return {
      /* [null, false, true] => ["init", "api loaded", "done"] */
      _initialized: null,
    };
  },

  shouldComponentUpdate:function(nextProps, nextState) {
    return !deepEqual(nextProps, this.props) || nextState._initialized !== this.state._initialized;
  },

  componentDidMount:function () {
    ensure_map_created(this, this.add_listeners, create_map);
  },

  componentWillReceiveProps:function (nextProps, nextContext) {
    if (null == this.state._initialized && nextContext.getApi()) {
      this.setState({
        _initialized: false,
      });
    }
  },

  componentDidUpdate:function () {
    ensure_map_created(this, function(map)  {
      map.setOptions(this.props);
      this.add_listeners(map);
    }.bind(this), create_map);
  },

  componentWillUnmount:function () {
    ensure_map_created(this, function(map)  {
      this.clear_listeners(map);
      this.context._set_map(null);
    }.bind(this));
  },

  render:function () {
    return this._render(this.props, this.state);
  },

  _render:function (props, state) {
    return React.createElement("div", React.__spread({ref: "mapCanvas"},  props));
  }
};

assign_event_map_to_prop_types_and_spec(EVENT_MAP, MapPropTypes, MapSpec);

module.exports = React.createClass(MapSpec);

"use strict";
var React = require("react/addons"),

    expose_getters_from = require("./expose_getters_from"),
    to_event_map = require("../helpers/to_event_map"),
    assign_event_map_to_prop_types_and_spec = require("../helpers/assign_event_map_to_prop_types_and_spec"),
    EventBindingMixin = require("../mixins/EventBindingMixin");

function ensure_instance_created (component, createdCallback, createFactory) {
  var $__0=  component,context=$__0.context,
      $__1=  component.state,_instance=$__1._instance,
      noInstance = !_instance;
  
  if (noInstance && context.getApi() && context.hasMap() && createFactory) {
    _instance = createFactory(component, context);
  }
  if (_instance) {
    createdCallback(_instance);
    if (noInstance) {
      component.setState({_instance:_instance});
    }
  }
}

function setMapToInstance (component, instance) {
  instance.setMap(component.context.getMap());
}

module.exports = function(childName, eventNames, _created_callback)  {
  var createdCallback = _created_callback || setMapToInstance,

      EVENT_MAP = to_event_map(eventNames),

      ChildPropTypes,
      ChildSpec;

  function create_instance (component, context) {
    var ChildClass = context.getApi()[childName],
        instance = new ChildClass(component.props);

    expose_getters_from(component, ChildClass.prototype, instance);
    return instance;
  }

  ChildPropTypes = {

  };

  /*
   * shouldComponentUpdate: true. Always rerender for child
   */
  ChildSpec = {
    displayName: childName,

    mixins: [EventBindingMixin(EVENT_MAP)],

    contextTypes: {
      getMap: React.PropTypes.func,
      getApi: React.PropTypes.func,
      hasMap: React.PropTypes.func,
      getInstanceByRef: React.PropTypes.func
    },

    propTypes: ChildPropTypes,

    getInitialState:function () {
      return {
        _instance: null
      };
    },

    componentDidMount:function () {
      ensure_instance_created(this, function(instance)  {
        this.add_listeners(instance);
        createdCallback(this, instance);
      }.bind(this), create_instance);
    },

    componentDidUpdate:function () {
      ensure_instance_created(this, function(instance)  {
        instance.setOptions(this.props);
        this.add_listeners(instance);
        createdCallback(this, instance);
      }.bind(this), create_instance);
    },

    componentWillUnmount:function () {
      ensure_instance_created(this, function(instance)  {
        this.clear_listeners(instance);
        instance.setMap(null);
      }.bind(this));
    },

    render:function () {
      return this._render(this.props, this.state);
    },

    _render:function (props, state) {
      return null;
    }
  };

  assign_event_map_to_prop_types_and_spec(EVENT_MAP, ChildPropTypes, ChildSpec);

  return React.createClass(ChildSpec);
}.bind(this);


"use strict";
var React = require("react/addons"),

    expose_getters_from = require("./expose_getters_from"),
    EventBindingMixin = require("../mixins/EventBindingMixin");

function ensure_instance_created (component, createdCallback, createFactory) {
  var {context} = component,
      {_instance} = component.state,
      noInstance = !_instance;
  
  if (noInstance && context.getApi() && context.hasMap() && createFactory) {
    _instance = createFactory(component, context);
  }
  if (_instance) {
    createdCallback(_instance);
    if (noInstance) {
      component.setState({_instance});
    }
  }
}

function setMapToInstance (component, instance) {
  instance.setMap(component.context.getMap());
}

module.exports = (childName, eventNames, _created_callback) => {
  var createdCallback = _created_callback || setMapToInstance;

  function create_instance (component, context) {
    var ChildClass = context.getApi()[childName],
        instance = new ChildClass(component.props);

    expose_getters_from(component, ChildClass.prototype, instance);
    return instance;
  }

  /*
   * shouldComponentUpdate: true. Always rerender for child
   */
  return React.createClass({
    displayName: childName,

    mixins: [EventBindingMixin({__keys__: []})],

    contextTypes: {
      getMap: React.PropTypes.func,
      getApi: React.PropTypes.func,
      hasMap: React.PropTypes.func,
      getInstanceByRef: React.PropTypes.func
    },

    getInitialState () {
      return {
        _instance: null
      };
    },

    componentDidMount () {
      ensure_instance_created(this, (instance) => {
        this.add_listeners(instance);
        createdCallback(this, instance);
      }, create_instance);
    },

    componentWillUpdate () {
      ensure_instance_created(this, this.clear_listeners);
    },

    componentDidUpdate () {
      ensure_instance_created(this, (instance) => {
        instance.setOptions(this.props);
        this.add_listeners(instance);
        createdCallback(this, instance);
      }, create_instance);
    },

    componentWillUnmount () {
      ensure_instance_created(this, (instance) => {
        this.clear_listeners(instance);
        instance.setMap(null);
      });
    },

    render () {
      return this._render(this.props, this.state);
    },

    get_event_names () {
      return "animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shape_changed title_changed visible_changed zindex_changed";
    },

    _render (props, state) {
      return null;
    }
  });
};


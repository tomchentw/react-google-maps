/** @jsx React.DOM */
"use strict";

module.exports = {

  getInitialState () {
    return {
      _active_event_names: []
    };
  },

  componentWillMount () {
    this.setState({
      _active_event_names: this._collect_event_names(this.props)
    });
  },

  componentWillReceiveProps (nextProps) {
    this.setState({
      _active_event_names: this._collect_event_names(nextProps)
    });
  },

  add_listeners (instance) {
    var {context, props} = this;
    var {_active_event_names, _event_map} = this.state;
    _active_event_names.forEach((eventName) => {
      var name = _event_map[eventName];
      context.getApi().event.addListener(instance, name, props[eventName]);
    });
  },

  clear_listeners (instance) {
    var {context} = this;
    context.getApi().event.clearInstanceListeners(instance);
  },

  _get_event_list () {
    var _event_list = this.state && this.state._event_list;
    if (!_event_list) {
      if (!this.get_event_names) {
        throw new TypeError("Unimplemented get_event_names");
      }
      var _event_map = {};
      _event_list = this.get_event_names()
        .split(" ")
        .map(toEventList, _event_map);
      this.setState({
        _event_list,
        _event_map
      });
    }
    return _event_list;
  },

  _collect_event_names (props) {
    return this._get_event_list().filter((eventName) => {
      return eventName in props;
    });
  }
};

function toEventList (name) {
  var eventName = toEventName(name);
  this[eventName] = name;
  return eventName;
}

function toEventName(name) {
  return `on${ name
    .replace(/^(.)/, groupToUpperCase)
    .replace(/_(.)/g, groupToUpperCase) }`;
}

function groupToUpperCase (match, group) {
  return group.toUpperCase();
}

/** @jsx React.DOM */
"use strict";

var EVENT_MAP = {};
var EVENT_LIST = "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed"
                  .split(" ")
                  .map(toEventList, EVENT_MAP);

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

module.exports = {

  getInitialState () {
    return {
      eventNames: []
    };
  },

  componentWillMount () {
    this.setState({
      eventNames: this._collect_event_names(this.props)
    });
  },

  componentWillReceiveProps (nextProps) {
    this.setState({
      eventNames: this._collect_event_names(nextProps)
    });
  },

  upsert_listeners (googleMapsApi, map) {
    this.clear_listeners(googleMapsApi, map);
    this.state.eventNames.forEach((eventName) => {
      var name = EVENT_MAP[eventName];
      googleMapsApi.event.addListener(map, name, this.props[eventName]);
    });
  },

  clear_listeners (googleMapsApi, map) {
    googleMapsApi.event.clearInstanceListeners(map);
  },

  _collect_event_names (props) {
    return EVENT_LIST.filter((eventName) => {
      return eventName in props;
    });
  }
};

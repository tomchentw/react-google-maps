"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function listToMap(map, event_name) {
  map[event_name] = toEventName(event_name);
  return map;
}

function toEventName(name) {
  return "on" + name.replace(/^(.)/, groupToUpperCase).replace(/_(.)/g, groupToUpperCase);
}

function groupToUpperCase(match, group) {
  return group.toUpperCase();
}

function createRegisterEvents(event_names) {
  /*
   * list: [click, zoom_changed]
   *  map: (click -> onClick, zoom_changed -> onZoomChanged)
   */
  var list = event_names.split(" ");
  var map = list.reduce(listToMap, {});
  return registerEvents;

  function registerEvents(event, instance, componentProps) {
    var registered = [];
    for (var i = 0; i < list.length; i++) {
      var event_name = list[i];
      var eventName = map[event_name];
      var listener = componentProps[eventName];

      if (listener) {
        registered.push(event.addListener(instance, event_name, listener));
      }
    }

    var unregisterEvents = registered.forEach.bind(registered, event.removeListener, event);

    return unregisterEvents;
  }
}

exports["default"] = createRegisterEvents;
module.exports = exports["default"];
"use strict";

module.exports = (event_names) => {
  return event_names.split(" ").reduce(listToMap, {__keys__: []});
};

function listToMap (map, event_name, index, list) {
  var eventName = toEventName(event_name);
  map.__keys__.push(eventName);
  map[eventName] = event_name;
  return map;
}

function toEventName(name) {
  return `on${ name
    .replace(/^(.)/, groupToUpperCase)
    .replace(/_(.)/g, groupToUpperCase) }`;
}

function groupToUpperCase (match, group) {
  return group.toUpperCase();
}

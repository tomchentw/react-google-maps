"use strict";

module.exports = (event_names) => {
  return event_names.split(" ").reduce(listToMap, {});
};

function listToMap (map, event_name) {
  map[toEventName(event_name)] = event_name;
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

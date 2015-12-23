"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__getInstance = __getInstance;
exports.triggerEvent = triggerEvent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _GoogleMap = require("../GoogleMap");

var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

function __getInstance(componentOrLoader) {
  var component = componentOrLoader;
  var _component = component;
  var constructor = _component.constructor;

  if (_GoogleMap2["default"] === constructor) {
    if (component.props.map) {
      return component.props.map;
    } else {
      // Deprecated
      component = component.refs.loader;
    }
  }
  // Otherwise, every other instance type exists in component state
  var key = Object.keys(component.state)[0];
  return component.state[key];
}

function triggerEvent(component) {
  var _google$maps$event;

  var instance = __getInstance(component);
  (0, _invariant2["default"])(instance, "The react-google-maps component %s is not mounted, hence we can't find an\n associated Google Maps JavaScript API v3 instance with it.", component);

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (_google$maps$event = google.maps.event).trigger.apply(_google$maps$event, [instance].concat(args));
}
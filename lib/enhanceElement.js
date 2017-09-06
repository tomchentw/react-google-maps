"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _curry2 = require("lodash/curry");

var _curry3 = _interopRequireDefault(_curry2);

var _noop2 = require("lodash/noop");

var _noop3 = _interopRequireDefault(_noop2);

var _forEach2 = require("lodash/forEach");

var _forEach3 = _interopRequireDefault(_forEach2);

var _bind2 = require("lodash/bind");

var _bind3 = _interopRequireDefault(_bind2);

var _isFunction2 = require("lodash/isFunction");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _has2 = require("lodash/has");

var _has3 = _interopRequireDefault(_has2);

var _reduce2 = require("lodash/reduce");

var _reduce3 = _interopRequireDefault(_reduce2);

var _identity2 = require("lodash/identity");

var _identity3 = _interopRequireDefault(_identity2);

var _mapKeys2 = require("lodash/mapKeys");

var _mapKeys3 = _interopRequireDefault(_mapKeys2);

exports.addDefaultPrefixToPropTypes = addDefaultPrefixToPropTypes;
exports.removeDefaultPrefix = removeDefaultPrefix;
exports.collectProps = collectProps;
exports.collectUncontrolledAndControlledProps = collectUncontrolledAndControlledProps;
exports.default = enhanceElement;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
function addDefaultPrefixToPropTypes(propTypes /*: Object*/) {
  return (0, _mapKeys3.default)(propTypes, function (value, key) {
    return "default" + key.substr(0, 1).toUpperCase() + key.substr(1);
  });
}

function removeDefaultPrefix(defaultKey) {
  // default = 7
  var key = defaultKey.substr(7);
  return "" + key.substr(0, 1).toLowerCase() + key.substr(1);
}

function collectProps(propTypes /*: Object*/, props /*: Object*/) {
  var keyTransform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity3.default;

  return (0, _reduce3.default)(propTypes, function (acc, value, key) {
    if ((0, _has3.default)(props, key)) {
      var nextKey = keyTransform(key);
      // eslint-disable-next-line no-param-reassign
      acc[nextKey] = props[key];
    }
    return acc;
  }, {});
}

function collectUncontrolledAndControlledProps(defaultUncontrolledPropTypes /*: Object*/, controlledPropTypes /*: Object*/, props /*: Object*/) {
  return (0, _extends3.default)({}, collectProps(defaultUncontrolledPropTypes, props, removeDefaultPrefix), collectProps(controlledPropTypes, props));
}

function registerGoogleEventsFromReactProps(instance /*: Object*/, props /*: Object*/, eventMap /*: Object*/) {
  var registered = (0, _reduce3.default)(eventMap, function (acc, googleEventName, onEventName) {
    if ((0, _isFunction3.default)(props[onEventName])) {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }
    return acc;
  }, []);

  return (0, _bind3.default)(_forEach3.default, null, registered, function (event) {
    return google.maps.event.removeListener(event);
  });
}

function registerEventsFromComponent(component, getInstanceFromComponent, eventMap) {
  var instance = getInstanceFromComponent(component);
  // eslint-disable-next-line no-param-reassign
  component._unregisterEvents = registerGoogleEventsFromReactProps(instance, component.props, eventMap);
}

function unregisterEventsFromComponent(component, getInstanceFromComponent) {
  // eslint-disable-next-line no-param-reassign
  component._unregisterEvents();
  // eslint-disable-next-line no-param-reassign
  component._unregisterEvents = _noop3.default;
}

var enhanceWithPropTypes = (0, _curry3.default)(function (getInstanceFromComponent, controlledPropUpdaterMap, componentSpec) {
  var _componentSpec$compon = componentSpec.componentDidUpdate,
      _componentDidUpdate = _componentSpec$compon === undefined ? _noop3.default : _componentSpec$compon;

  return (0, _extends3.default)({}, componentSpec, {
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
      var _this = this;

      (0, _forEach3.default)(controlledPropUpdaterMap, function (fn, key) {
        var nextValue = _this.props[key];
        if (nextValue !== prevProps[key]) {
          fn(getInstanceFromComponent(_this), nextValue, _this);
        }
      });
      _componentDidUpdate.call(this, prevProps, prevState);
    }
  });
});

var enhanceWithEventMap = (0, _curry3.default)(function (getInstanceFromComponent, eventMap, componentSpec) {
  var _componentSpec$compon2 = componentSpec.componentDidMount,
      _componentDidMount = _componentSpec$compon2 === undefined ? _noop3.default : _componentSpec$compon2,
      _componentSpec$compon3 = componentSpec.componentDidUpdate,
      _componentDidUpdate2 = _componentSpec$compon3 === undefined ? _noop3.default : _componentSpec$compon3,
      _componentSpec$compon4 = componentSpec.componentWillUnmount,
      _componentWillUnmount = _componentSpec$compon4 === undefined ? _noop3.default : _componentSpec$compon4;

  return (0, _extends3.default)({}, componentSpec, {

    _unregisterEvents: _noop3.default,

    componentDidMount: function componentDidMount() {
      _componentDidMount.call(this);
      registerEventsFromComponent(this, getInstanceFromComponent, eventMap);
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
      unregisterEventsFromComponent(this, getInstanceFromComponent);
      _componentDidUpdate2.call(this, prevProps, prevState);
      registerEventsFromComponent(this, getInstanceFromComponent, eventMap);
    },
    componentWillUnmount: function componentWillUnmount() {
      unregisterEventsFromComponent(this, getInstanceFromComponent);
      _componentWillUnmount.call(this);
    }
  });
});

var enhanceWithPublicMethod = (0, _curry3.default)(function (getInstanceFromComponent, publicMethodMap, componentSpec) {
  return (0, _reduce3.default)(publicMethodMap, function (acc, fn, publicMethodName) {
    // eslint-disable-next-line no-param-reassign
    acc[publicMethodName] = function publicMethod() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fn(getInstanceFromComponent(this), args, /* Use with caution */this);
    };
    return acc;
  }, (0, _extends3.default)({}, componentSpec));
});

function enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap) {
  return (0, _flowRight3.default)(enhanceWithPublicMethod(getInstanceFromComponent, publicMethodMap), enhanceWithEventMap(getInstanceFromComponent, eventMap), enhanceWithPropTypes(getInstanceFromComponent, controlledPropUpdaterMap));
}
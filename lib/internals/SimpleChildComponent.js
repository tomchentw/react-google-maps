"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactLibWarning = require("react/lib/warning");

var _reactLibWarning2 = _interopRequireDefault(_reactLibWarning);

var _objectPath = require("object-path");

var _objectPath2 = _interopRequireDefault(_objectPath);

var _EventComponent2 = require("./EventComponent");

var _EventComponent3 = _interopRequireDefault(_EventComponent2);

var _exposeGetters = require("./exposeGetters");

var _exposeGetters2 = _interopRequireDefault(_exposeGetters);

var PropTypes = _react2["default"].PropTypes;

var SimpleChildComponent = (function (_EventComponent) {
  /* Contract
   *  statics:
   *    _GoogleMapsClassName:
   *  state:
   *    instance
   */

  function SimpleChildComponent() {
    _classCallCheck(this, SimpleChildComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(SimpleChildComponent.prototype), "constructor", this).apply(this, args);
    this.state = {};
  }

  _inherits(SimpleChildComponent, _EventComponent);

  _createClass(SimpleChildComponent, [{
    key: "_createOrUpdateInstance",
    value: function _createOrUpdateInstance() {
      var props = this.props;

      if (!props.googleMapsApi || !props.map) {
        return;
      }
      var googleMapsApi = props.googleMapsApi;

      var googleMapsConfig = _objectWithoutProperties(props, ["googleMapsApi"]);

      var instance = this.state.instance;

      if (instance) {
        if (googleMapsConfig.map === instance.getMap()) {
          // Set map and animation props only on the first run:
          delete googleMapsConfig.map;
          delete googleMapsConfig.animation;
        }
        instance.setOptions(googleMapsConfig);
      } else {
        var googleMapsClassName = this.constructor._GoogleMapsClassName;
        if (!_objectPath2["default"].has(googleMapsApi, googleMapsClassName)) {
          (0, _reactLibWarning2["default"])(false, "This react-google-maps component can't find the corresponding " + "Google Maps API class 'google.maps.%s'. You may have to include " + "additional Google Maps libraries in your javascript src URL. " + "See: https://developers.google.com/maps/documentation/javascript/libraries", googleMapsClassName);
          return;
        }
        var GoogleMapsClass = _objectPath2["default"].get(googleMapsApi, googleMapsClassName);
        instance = new GoogleMapsClass(googleMapsConfig);

        (0, _exposeGetters2["default"])(this, GoogleMapsClass.prototype, instance);
        this.setState({ instance: instance });
      }
      return instance;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _get(Object.getPrototypeOf(SimpleChildComponent.prototype), "componentWillUnmount", this).call(this);
      var instance = this.state.instance;

      if (instance) {
        instance.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }]);

  return SimpleChildComponent;
})(_EventComponent3["default"]);

SimpleChildComponent.propTypes = _extends({}, _EventComponent3["default"].propTypes, {
  map: PropTypes.object
});

exports["default"] = SimpleChildComponent;
module.exports = exports["default"];
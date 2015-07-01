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

var _internalsSimpleChildComponent = require("../internals/SimpleChildComponent");

var _internalsSimpleChildComponent2 = _interopRequireDefault(_internalsSimpleChildComponent);

var _internalsCreateRegisterEvents = require("../internals/createRegisterEvents");

var _internalsCreateRegisterEvents2 = _interopRequireDefault(_internalsCreateRegisterEvents);

var _internalsExposeGetters = require("../internals/exposeGetters");

var _internalsExposeGetters2 = _interopRequireDefault(_internalsExposeGetters);

var PropTypes = _react2["default"].PropTypes;

var InfoBox = (function (_SimpleChildComponent) {
  function InfoBox() {
    _classCallCheck(this, InfoBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(InfoBox.prototype), "constructor", this).apply(this, args);
    this.state = {};
  }

  _inherits(InfoBox, _SimpleChildComponent);

  _createClass(InfoBox, [{
    key: "_createOrUpdateInstance",
    value: function _createOrUpdateInstance() {
      var props = this.props;
      var googleMapsApi = props.googleMapsApi;

      var googleMapsConfig = _objectWithoutProperties(props, ["googleMapsApi"]);

      var instance = this.state.instance;

      if (instance) {
        instance = _get(Object.getPrototypeOf(InfoBox.prototype), "_createOrUpdateInstance", this).call(this);
      } else {
        // "google-maps-infobox" uses "google" as a global variable. Since we don't
        // have "google" on the server, we can not use it in server-side rendering.
        // As a result, we import "google-maps-infobox" here to prevent an error on
        // a isomorphic server.
        var GoogleMapsInfobox = require("google-maps-infobox");
        instance = new GoogleMapsInfobox(googleMapsConfig);
        (0, _internalsExposeGetters2["default"])(this, GoogleMapsInfobox.prototype, instance);
        this.setState({ instance: instance });
        instance.open(this.props.map, this.props.anchor);
      }

      return instance;
    }
  }]);

  return InfoBox;
})(_internalsSimpleChildComponent2["default"]);

InfoBox.propTypes = _extends({}, _internalsSimpleChildComponent2["default"].propTypes, {
  anchor: PropTypes.object
});

InfoBox._GoogleMapsClassName = "InfoBox";

InfoBox._registerEvents = (0, _internalsCreateRegisterEvents2["default"])("closeclick content_changed domready position_changed zindex_changed");

exports["default"] = InfoBox;
module.exports = exports["default"];
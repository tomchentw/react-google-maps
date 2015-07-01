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

var _internalsEventComponent = require("./internals/EventComponent");

var _internalsEventComponent2 = _interopRequireDefault(_internalsEventComponent);

var _internalsVirtualContainer = require("./internals/VirtualContainer");

var _internalsVirtualContainer2 = _interopRequireDefault(_internalsVirtualContainer);

var _internalsExposeGetters = require("./internals/exposeGetters");

var _internalsExposeGetters2 = _interopRequireDefault(_internalsExposeGetters);

var _internalsCreateRegisterEvents = require("./internals/createRegisterEvents");

var _internalsCreateRegisterEvents2 = _interopRequireDefault(_internalsCreateRegisterEvents);

var PropTypes = _react2["default"].PropTypes;

var GoogleMaps = (function (_EventComponent) {
  /*
   * Internals
   */

  function GoogleMaps() {
    _classCallCheck(this, GoogleMaps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(GoogleMaps.prototype), "constructor", this).apply(this, args);
    this.state = {};
  }

  _inherits(GoogleMaps, _EventComponent);

  _createClass(GoogleMaps, [{
    key: "panBy",

    /*
     * Some public API we'd like to expose
     */
    value: function panBy(x, y) {
      var instance = this.state.instance;

      if (instance) {
        instance.panBy(x, y);
      }
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      var instance = this.state.instance;

      if (instance) {
        instance.panTo(latLng);
      }
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      var instance = this.state.instance;

      if (instance) {
        instance.panToBounds(latLngBounds);
      }
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(latLngBounds) {
      var instance = this.state.instance;

      if (instance) {
        instance.fitBounds(latLngBounds);
      }
    }
  }, {
    key: "_createOrUpdateInstance",
    value: function _createOrUpdateInstance() {
      var props = this.props;

      if (!props.googleMapsApi) {
        return;
      }
      // googleMapsApi can be async loaded
      var containerProps = props.containerProps;
      var googleMapsApi = props.googleMapsApi;
      var bounds = props.bounds;

      var googleMapsConfig = _objectWithoutProperties(props, ["containerProps", "googleMapsApi", "bounds"]);

      var instance = this.state.instance;

      if (bounds) {
        delete googleMapsConfig.zoom;
        delete googleMapsConfig.center;
      }

      if (instance) {
        instance.setOptions(googleMapsConfig);
      } else {
        var GoogleMapsClass = googleMapsApi.Map;
        instance = new GoogleMapsClass(_react2["default"].findDOMNode(this.refs.googleMaps), googleMapsConfig);
        (0, _internalsExposeGetters2["default"])(this, GoogleMapsClass.prototype, instance);

        this.setState({ instance: instance });
      }

      if (bounds) {
        instance.fitBounds(bounds);
      }

      return instance;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;

      return _react2["default"].createElement(
        "div",
        _extends({}, props.containerProps, { ref: "googleMaps" }),
        this._render_virtual_container_()
      );
    }
  }, {
    key: "_render_virtual_container_",
    value: function _render_virtual_container_() {
      var props = this.props;
      var googleMapsApi = props.googleMapsApi;
      var children = props.children;
      var instance = this.state.instance;

      if (!googleMapsApi || !instance) {
        return;
      }
      return _react2["default"].createElement(
        _internalsVirtualContainer2["default"],
        {
          googleMapsApi: googleMapsApi,
          map: instance },
        children
      );
    }
  }]);

  return GoogleMaps;
})(_internalsEventComponent2["default"]);

GoogleMaps.propTypes = _extends({}, _internalsEventComponent2["default"].propTypes, {
  containerProps: PropTypes.object.isRequired,
  bounds: _react2["default"].PropTypes.object
});

GoogleMaps._registerEvents = (0, _internalsCreateRegisterEvents2["default"])("bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed");

exports["default"] = GoogleMaps;
module.exports = exports["default"];
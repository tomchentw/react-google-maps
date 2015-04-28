"use strict";

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require("react");

var _React2 = _interopRequireDefault(_React);

var _EventComponent2 = require("./internals/EventComponent");

var _EventComponent3 = _interopRequireDefault(_EventComponent2);

var _exposeGetters = require("./internals/exposeGetters");

var _exposeGetters2 = _interopRequireDefault(_exposeGetters);

var _createRegisterEvents = require("./internals/createRegisterEvents");

var _createRegisterEvents2 = _interopRequireDefault(_createRegisterEvents);

var PropTypes = _React2["default"].PropTypes;

var GoogleMaps = (function (_EventComponent) {
  /*
   * Internals
   */

  function GoogleMaps(props) {
    _classCallCheck(this, GoogleMaps);

    _get(Object.getPrototypeOf(GoogleMaps.prototype), "constructor", this).call(this, props);
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
      var key = props.key;
      var ref = props.ref;

      var googleMapsConfig = _objectWithoutProperties(props, ["containerProps", "googleMapsApi", "key", "ref"]);

      var instance = this.state.instance;

      if (instance) {
        instance.setOptions(googleMapsConfig);
      } else {
        var GoogleMapsClass = googleMapsApi.Map;
        instance = new GoogleMapsClass(_React2["default"].findDOMNode(this.refs.googleMaps), googleMapsConfig);
        _exposeGetters2["default"](this, GoogleMapsClass.prototype, instance);

        this.setState({ instance: instance });
      }
      return instance;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;

      return _React2["default"].createElement(
        "div",
        props.containerProps,
        _React2["default"].createElement("div", _extends({}, props.mapProps, { ref: "googleMaps" })),
        this._render_children_()
      );
    }
  }, {
    key: "_render_children_",
    value: function _render_children_() {
      var extraProps = {
        googleMapsApi: this.props.googleMapsApi,
        map: this.state.instance };

      return _React2["default"].Children.map(this.props.children, function (child) {
        if (child && child.type) {
          child = _React2["default"].cloneElement(child, extraProps);
        }
        return child;
      });
    }
  }]);

  return GoogleMaps;
})(_EventComponent3["default"]);

GoogleMaps.propTypes = _extends({}, _EventComponent3["default"].propTypes, {
  containerProps: PropTypes.object.isRequired,
  mapProps: PropTypes.object.isRequired });

GoogleMaps._registerEvents = _createRegisterEvents2["default"]("bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed");

exports["default"] = GoogleMaps;
module.exports = exports["default"];
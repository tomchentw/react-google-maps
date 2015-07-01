"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports["default"] = createOverlayViewProxy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var OverlayViewProxy;

// Since the Google Maps API can be asynchronously loaded, we define the
// OverlayView subclass in a factory method that's called when it's available.

function createOverlayViewProxy(props) {
  var googleMapsApi = props.googleMapsApi;

  var googleMapsConfig = _objectWithoutProperties(props, ["googleMapsApi"]);

  if (!googleMapsApi) {
    return;
  }
  if (!OverlayViewProxy) {
    OverlayViewProxy = defineOverlayViewProxyClass(googleMapsApi);
  }
  return new OverlayViewProxy(googleMapsConfig);
}

function defineOverlayViewProxyClass(googleMapsApi) {
  return (function (_googleMapsApi$OverlayView) {
    function OverlayViewProxy() {
      _classCallCheck(this, OverlayViewProxy);

      _get(Object.getPrototypeOf(OverlayViewProxy.prototype), "constructor", this).apply(this, arguments);
    }

    _inherits(OverlayViewProxy, _googleMapsApi$OverlayView);

    _createClass(OverlayViewProxy, [{
      key: "onAdd",
      value: function onAdd() {
        var mapPane = this.get("mapPane");
        this._containerElement = document.createElement("div");
        this._containerElement.style.position = "absolute";
        this.getPanes()[mapPane].appendChild(this._containerElement);
      }
    }, {
      key: "draw",
      value: function draw() {
        if (!this._containerElement) {
          return;
        }
        this._renderContent();
        this._positionContainerElement();
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        _react2["default"].unmountComponentAtNode(this._containerElement);
        this._containerElement.parentNode.removeChild(this._containerElement);
        this._containerElement = null;
      }
    }, {
      key: "_renderContent",
      value: function _renderContent() {
        _react2["default"].render(_react2["default"].createElement(
          "div",
          null,
          this.get("children")
        ), this._containerElement);
      }
    }, {
      key: "_positionContainerElement",
      value: function _positionContainerElement() {
        var left = undefined,
            top = undefined;
        var position = this._getPixelPosition();
        if (position) {
          var x = position.x;
          var y = position.y;

          var offset = this._getOffset();
          if (offset) {
            x += offset.x;
            y += offset.y;
          }
          left = x + "px";
          top = y + "px";
        }
        this._containerElement.style.left = left;
        this._containerElement.style.top = top;
      }
    }, {
      key: "_getPixelPosition",
      value: function _getPixelPosition() {
        var projection = this.getProjection();
        var position = this.get("position");
        if (projection && position) {
          if (!(position instanceof googleMapsApi.LatLng)) {
            position = new googleMapsApi.LatLng(position.lat, position.lng);
          }
          return projection.fromLatLngToDivPixel(position);
        }
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        // Allows the component to control the visual position of the OverlayView
        // relative to the LatLng pixel position.
        var getPixelPositionOffset = this.get("getPixelPositionOffset");
        if (getPixelPositionOffset) {
          return getPixelPositionOffset(this._containerElement.offsetWidth, this._containerElement.offsetHeight);
        }
      }
    }]);

    return OverlayViewProxy;
  })(googleMapsApi.OverlayView);
}
module.exports = exports["default"];
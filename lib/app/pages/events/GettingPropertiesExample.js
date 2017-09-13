"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _lib = require("../../../lib")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */
var GettingPropertiesExampleGoogleMap = (0, _lib.withGoogleMap)(function(
  props
) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      ref: props.onMapMounted,
      onZoomChanged: props.onZoomChanged,
      defaultCenter: props.center,
      zoom: props.zoom,
    },
    _react2.default.createElement(
      _lib.InfoWindow,
      {
        defaultPosition: props.center,
      },
      _react2.default.createElement("div", null, props.content)
    )
  )
})

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-properties
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var GettingPropertiesExample = (function(_Component) {
  ;(0, _inherits3.default)(GettingPropertiesExample, _Component)

  function GettingPropertiesExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, GettingPropertiesExample)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          GettingPropertiesExample.__proto__ ||
          (0, _getPrototypeOf2.default)(GettingPropertiesExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        zoom: 4,
        content: "Change the zoom level",
      }),
      (_this.handleMapMounted = _this.handleMapMounted.bind(_this)),
      (_this.handleZoomChanged = _this.handleZoomChanged.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(GettingPropertiesExample, [
    {
      key: "handleMapMounted",
      value: function handleMapMounted(map) {
        this._map = map
      },
    },
    {
      key: "handleZoomChanged",
      value: function handleZoomChanged() {
        var nextZoom = this._map.getZoom()
        if (nextZoom !== this.state.zoom) {
          // Notice: Check zoom equality here,
          // or it will fire zoom_changed event infinitely
          this.setState({
            zoom: nextZoom,
            content: "Zoom: " + nextZoom,
          })
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          GettingPropertiesExampleGoogleMap,
          {
            containerElement: _react2.default.createElement("div", {
              style: { height: "100%" },
            }),
            mapElement: _react2.default.createElement("div", {
              style: { height: "100%" },
            }),
            onMapMounted: this.handleMapMounted,
            onZoomChanged: this.handleZoomChanged,
            center: new google.maps.LatLng(-25.363882, 131.044922),
            zoom: this.state.zoom,
            content: this.state.content,
          }
        )
      },
    },
  ])
  return GettingPropertiesExample
})(_react.Component)

exports.default = GettingPropertiesExample

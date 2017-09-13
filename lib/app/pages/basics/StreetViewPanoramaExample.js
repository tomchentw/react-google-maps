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
var coordinates = { lat: 49.2853171, lng: -123.1119202 }

var STYLES = {
  overlayView: {
    background: "red",
    color: "white",
    padding: 5,
    borderRadius: "50%",
  },
}

function getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) }
}

var StreetViewPanoramaExampleGoogleMap = (0, _lib.withGoogleMap)(function(
  props
) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 8,
      defaultCenter: coordinates,
    },
    _react2.default.createElement(
      _lib.StreetViewPanorama,
      {
        defaultPosition: coordinates,
        visible: true,
      },
      _react2.default.createElement(
        _lib.OverlayView,
        {
          position: { lat: 49.28590291211115, lng: -123.11248166065218 },
          mapPaneName: _lib.OverlayView.OVERLAY_LAYER,
          getPixelPositionOffset: getPixelPositionOffset,
        },
        _react2.default.createElement(
          "div",
          { style: STYLES.overlayView },
          "OverlayView"
        )
      )
    )
  )
})

/**
 * You can pass in an `containerElement` to render `StreetViewPanorama` in its own container
 * At this point the `GoogleMap` wrapper and `withGoogleMap` HOC become optional,
 * so you can either render a map and StreetView at the same time,
 * or just the StreetView on its own
 *    <StreetViewPanorama
 *      containerElement={<div style={{ width: `100%`, height: `100%` }} />}
 *      defaultPosition={coordinates}
 *      visible
 *    />
 */

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var StreetViewPanoramaExample = (function(_Component) {
  ;(0, _inherits3.default)(StreetViewPanoramaExample, _Component)

  function StreetViewPanoramaExample() {
    ;(0, _classCallCheck3.default)(this, StreetViewPanoramaExample)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (StreetViewPanoramaExample.__proto__ ||
        (0, _getPrototypeOf2.default)(StreetViewPanoramaExample))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(StreetViewPanoramaExample, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          StreetViewPanoramaExampleGoogleMap,
          {
            containerElement: _react2.default.createElement("div", {
              style: { width: "100%", height: "100%" },
            }),
            mapElement: _react2.default.createElement("div", {
              style: { width: "100%", height: "100%" },
            }),
          }
        )
      },
    },
  ])
  return StreetViewPanoramaExample
})(_react.Component)

exports.default = StreetViewPanoramaExample

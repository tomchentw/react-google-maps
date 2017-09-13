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

var _DrawingManager = require("../../../lib/drawing/DrawingManager")

var _DrawingManager2 = _interopRequireDefault(_DrawingManager)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/*
 * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
 *
 * Note: requires the Google Maps drawing API library in your script src
 *
 * Credits: thanks @idolize for the contribution!
 */
var DrawingExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 8,
      defaultCenter: new google.maps.LatLng(-34.397, 150.644),
    },
    _react2.default.createElement(_DrawingManager2.default, {
      defaultDrawingMode: google.maps.drawing.OverlayType.CIRCLE,
      defaultOptions: {
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: "#ffff00",
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      },
    })
  )
})

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
/* global google */

var DrawingExample = (function(_Component) {
  ;(0, _inherits3.default)(DrawingExample, _Component)

  function DrawingExample() {
    ;(0, _classCallCheck3.default)(this, DrawingExample)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (DrawingExample.__proto__ ||
        (0, _getPrototypeOf2.default)(DrawingExample))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(DrawingExample, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(DrawingExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
        })
      },
    },
  ])
  return DrawingExample
})(_react.Component)

exports.default = DrawingExample

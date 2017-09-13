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

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
/* global google */
var SimpleMapExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(_lib.GoogleMap, {
    defaultZoom: 8,
    defaultCenter: { lat: -34.397, lng: 150.644 },
  })
})

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var SimpleMapExample = (function(_Component) {
  ;(0, _inherits3.default)(SimpleMapExample, _Component)

  function SimpleMapExample() {
    ;(0, _classCallCheck3.default)(this, SimpleMapExample)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (SimpleMapExample.__proto__ ||
        (0, _getPrototypeOf2.default)(SimpleMapExample))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(SimpleMapExample, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(SimpleMapExampleGoogleMap, {
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
  return SimpleMapExample
})(_react.Component)

exports.default = SimpleMapExample

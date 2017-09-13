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

require("./markerWithLabel.css")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var MarkerWithLabelExampleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 3,
      defaultCenter: { lat: 25.0391667, lng: 121.525 },
    },
    _react2.default.createElement(_lib.Marker, {
      markerWithLabel: window.MarkerWithLabel,
      position: {
        lat: 25.0391667,
        lng: 121.525,
      },
      opacity: 0,
      labelClass: "map-price-container",
      labelAnchor: new google.maps.Point(35, 27),
      labelContent:
        '<div class="map-price-marker "><span>$135,123.00</span></div>',
      labelStyle: { opacity: 0.8 },
    })
  )
}) /* global google */

var MarkerWithLabelExample = (function(_Component) {
  ;(0, _inherits3.default)(MarkerWithLabelExample, _Component)

  function MarkerWithLabelExample() {
    ;(0, _classCallCheck3.default)(this, MarkerWithLabelExample)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (MarkerWithLabelExample.__proto__ ||
        (0, _getPrototypeOf2.default)(MarkerWithLabelExample))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(MarkerWithLabelExample, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(MarkerWithLabelExampleMap, {
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
  return MarkerWithLabelExample
})(_react.Component)

exports.default = MarkerWithLabelExample

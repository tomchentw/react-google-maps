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
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
/* global google */
var KmlLayerExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 8,
      defaultCenter: { lat: 41.876, lng: -87.624 },
    },
    _react2.default.createElement(_lib.KmlLayer, {
      url: "http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml",
      options: { preserveViewport: true },
    })
  )
})

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var KmlLayerExample = (function(_Component) {
  ;(0, _inherits3.default)(KmlLayerExample, _Component)

  function KmlLayerExample() {
    ;(0, _classCallCheck3.default)(this, KmlLayerExample)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (KmlLayerExample.__proto__ ||
        (0, _getPrototypeOf2.default)(KmlLayerExample))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(KmlLayerExample, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(KmlLayerExampleGoogleMap, {
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
  return KmlLayerExample
})(_react.Component)

exports.default = KmlLayerExample

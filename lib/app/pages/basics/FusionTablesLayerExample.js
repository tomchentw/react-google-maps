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

var _noop2 = require("lodash/noop")

var _noop3 = _interopRequireDefault(_noop2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _lib = require("../../../lib")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
var FusionTablesExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 11,
      defaultCenter: { lat: 41.850033, lng: -87.6500523 },
    },
    _react2.default.createElement(_lib.FusionTablesLayer, {
      options: {
        query: {
          select: "Geocodable address",
          from: "1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg",
        },
      },
      onClick: _noop3.default,
    })
  )
})

var FusionTablesExample = (function(_Component) {
  ;(0, _inherits3.default)(FusionTablesExample, _Component)

  function FusionTablesExample() {
    ;(0, _classCallCheck3.default)(this, FusionTablesExample)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (FusionTablesExample.__proto__ ||
        (0, _getPrototypeOf2.default)(FusionTablesExample))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(FusionTablesExample, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(FusionTablesExampleGoogleMap, {
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
  return FusionTablesExample
})(_react.Component)

exports.default = FusionTablesExample

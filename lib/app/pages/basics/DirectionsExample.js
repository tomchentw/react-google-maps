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
var DirectionsExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 7,
      defaultCenter: props.center,
    },
    props.directions &&
      _react2.default.createElement(_lib.DirectionsRenderer, {
        directions: props.directions,
      })
  )
})

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var DirectionsExample = (function(_Component) {
  ;(0, _inherits3.default)(DirectionsExample, _Component)

  function DirectionsExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, DirectionsExample)

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
          DirectionsExample.__proto__ ||
          (0, _getPrototypeOf2.default)(DirectionsExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        origin: new google.maps.LatLng(41.85073, -87.65126),
        destination: new google.maps.LatLng(41.85258, -87.65141),
        directions: null,
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(DirectionsExample, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this

        var DirectionsService = new google.maps.DirectionsService()

        DirectionsService.route(
          {
            origin: this.state.origin,
            destination: this.state.destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          function(result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              _this2.setState({
                directions: result,
              })
            } else {
              console.error("error fetching directions " + result)
            }
          }
        )
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(DirectionsExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          center: this.state.origin,
          directions: this.state.directions,
        })
      },
    },
  ])
  return DirectionsExample
})(_react.Component)

exports.default = DirectionsExample

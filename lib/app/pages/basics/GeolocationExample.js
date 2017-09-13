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

var _canUseDom = require("can-use-dom")

var _canUseDom2 = _interopRequireDefault(_canUseDom)

var _raf = require("raf")

var _raf2 = _interopRequireDefault(_raf)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _lib = require("../../../lib")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */

var geolocation =
  _canUseDom2.default && navigator.geolocation
    ? navigator.geolocation
    : {
        getCurrentPosition: function getCurrentPosition(success, failure) {
          failure("Your browser doesn't support geolocation.")
        },
      }

var GeolocationExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 12,
      center: props.center,
    },
    props.center &&
      _react2.default.createElement(
        _lib.InfoWindow,
        { position: props.center },
        _react2.default.createElement("div", null, props.content)
      ),
    props.center &&
      _react2.default.createElement(_lib.Circle, {
        center: props.center,
        radius: props.radius,
        options: {
          fillColor: "red",
          fillOpacity: 0.2,
          strokeColor: "red",
          strokeOpacity: 1,
          strokeWeight: 1,
        },
      })
  )
})

/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var GeolocationExample = (function(_Component) {
  ;(0, _inherits3.default)(GeolocationExample, _Component)

  function GeolocationExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, GeolocationExample)

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
          GeolocationExample.__proto__ ||
          (0, _getPrototypeOf2.default)(GeolocationExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        center: null,
        content: null,
        radius: 6000,
      }),
      (_this.isUnmounted = false),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(GeolocationExample, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this

        var tick = function tick() {
          if (_this2.isUnmounted) {
            return
          }
          _this2.setState({ radius: Math.max(_this2.state.radius - 20, 0) })

          if (_this2.state.radius > 200) {
            ;(0, _raf2.default)(tick)
          }
        }
        geolocation.getCurrentPosition(
          function(position) {
            if (_this2.isUnmounted) {
              return
            }
            _this2.setState({
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              content: "Location found using HTML5.",
            })

            ;(0, _raf2.default)(tick)
          },
          function(reason) {
            if (_this2.isUnmounted) {
              return
            }
            _this2.setState({
              center: {
                lat: 60,
                lng: 105,
              },
              content:
                "Error: The Geolocation service failed (" + reason + ").",
            })
          }
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.isUnmounted = true
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(GeolocationExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          center: this.state.center,
          content: this.state.content,
          radius: this.state.radius,
        })
      },
    },
  ])
  return GeolocationExample
})(_react.Component)

exports.default = GeolocationExample

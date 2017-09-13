"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray")

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2)

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
var AccessingArgumentsExampleGoogleMap = (0, _lib.withGoogleMap)(function(
  props
) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 4,
      defaultCenter: props.center,
      onClick: props.onMapClick,
    },
    props.markers.map(function(marker, index) {
      return _react2.default.createElement(_lib.Marker, {
        position: marker.position,
        key: index,
      })
    })
  )
})

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var AccessingArgumentsExample = (function(_Component) {
  ;(0, _inherits3.default)(AccessingArgumentsExample, _Component)

  function AccessingArgumentsExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, AccessingArgumentsExample)

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
          AccessingArgumentsExample.__proto__ ||
          (0, _getPrototypeOf2.default)(AccessingArgumentsExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        markers: [],
        center: new google.maps.LatLng(-25.363882, 131.044922),
      }),
      (_this.handleMapClick = _this.handleMapClick.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(AccessingArgumentsExample, [
    {
      key: "handleMapClick",
      value: function handleMapClick(event) {
        this.setState({
          center: event.latLng,
          markers: [].concat(
            (0, _toConsumableArray3.default)(this.state.markers),
            [{ position: event.latLng }]
          ),
        })
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          AccessingArgumentsExampleGoogleMap,
          {
            containerElement: _react2.default.createElement("div", {
              style: { height: "100%" },
            }),
            mapElement: _react2.default.createElement("div", {
              style: { height: "100%" },
            }),
            onMapClick: this.handleMapClick,
            center: this.state.center,
            markers: this.state.markers,
          }
        )
      },
    },
  ])
  return AccessingArgumentsExample
})(_react.Component)

exports.default = AccessingArgumentsExample

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _extends2 = require("babel-runtime/helpers/extends")

var _extends3 = _interopRequireDefault(_extends2)

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
var ClosureListenersExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 4,
      defaultCenter: new google.maps.LatLng(-25.363882, 131.044922),
    },
    props.markers.map(function(marker, index) {
      var onClick = function onClick() {
        return props.onMarkerClick(marker)
      }
      var onCloseClick = function onCloseClick() {
        return props.onCloseClick(marker)
      }

      return _react2.default.createElement(
        _lib.Marker,
        {
          key: index,
          position: marker.position,
          title: (index + 1).toString(),
          onClick: onClick,
        },
        marker.showInfo &&
          _react2.default.createElement(
            _lib.InfoWindow,
            { onCloseClick: onCloseClick },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement("strong", null, marker.content),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "em",
                null,
                "The contents of this InfoWindow are actually ReactElements."
              )
            )
          )
      )
    })
  )
})

function generateInitialMarkers() {
  var southWest = new google.maps.LatLng(-31.203405, 125.244141)
  var northEast = new google.maps.LatLng(-25.363882, 131.044922)

  var lngSpan = northEast.lng() - southWest.lng()
  var latSpan = northEast.lat() - southWest.lat()

  var markers = []
  for (var i = 0; i < 5; i++) {
    var position = new google.maps.LatLng(
      southWest.lat() + latSpan * Math.random(),
      southWest.lng() + lngSpan * Math.random()
    )
    markers.push({
      position: position,
      content: "This is the secret message".split(" ")[i],
      showInfo: false,
    })
  }
  return markers
}

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-closure
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var ClosureListenersExample = (function(_Component) {
  ;(0, _inherits3.default)(ClosureListenersExample, _Component)

  function ClosureListenersExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, ClosureListenersExample)

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
          ClosureListenersExample.__proto__ ||
          (0, _getPrototypeOf2.default)(ClosureListenersExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        markers: generateInitialMarkers(),
      }),
      (_this.handleMarkerClick = _this.handleMarkerClick.bind(_this)),
      (_this.handleCloseClick = _this.handleCloseClick.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(ClosureListenersExample, [
    {
      key: "handleMarkerClick",
      value: function handleMarkerClick(targetMarker) {
        this.setState({
          markers: this.state.markers.map(function(marker) {
            if (marker === targetMarker) {
              return (0, _extends3.default)({}, marker, {
                showInfo: true,
              })
            }
            return marker
          }),
        })
      },
    },
    {
      key: "handleCloseClick",
      value: function handleCloseClick(targetMarker) {
        this.setState({
          markers: this.state.markers.map(function(marker) {
            if (marker === targetMarker) {
              return (0, _extends3.default)({}, marker, {
                showInfo: false,
              })
            }
            return marker
          }),
        })
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(ClosureListenersExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          onMarkerClick: this.handleMarkerClick,
          onCloseClick: this.handleCloseClick,
          markers: this.state.markers,
        })
      },
    },
  ])
  return ClosureListenersExample
})(_react.Component)

exports.default = ClosureListenersExample

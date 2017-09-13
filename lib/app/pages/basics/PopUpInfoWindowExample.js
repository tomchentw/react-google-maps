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
var PopUpInfoWindowExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 4,
      center: props.center,
    },
    props.markers.map(function(marker, index) {
      return _react2.default.createElement(
        _lib.Marker,
        {
          key: index,
          position: marker.position,
          onClick: function onClick() {
            return props.onMarkerClick(marker)
          },
        },
        marker.showInfo &&
          _react2.default.createElement(
            _lib.InfoWindow,
            {
              onCloseClick: function onCloseClick() {
                return props.onMarkerClose(marker)
              },
            },
            _react2.default.createElement("div", null, marker.infoContent)
          )
      )
    })
  )
})

/*
 *
 *  Add <script src="https://maps.googleapis.com/maps/api/js"></script>
 *  to your HTML to provide google.maps reference
 *
 *  @author: @chiwoojo
 */

var PopUpInfoWindowExample = (function(_Component) {
  ;(0, _inherits3.default)(PopUpInfoWindowExample, _Component)

  function PopUpInfoWindowExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, PopUpInfoWindowExample)

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
          PopUpInfoWindowExample.__proto__ ||
          (0, _getPrototypeOf2.default)(PopUpInfoWindowExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        center: {
          lat: -25.363882,
          lng: 131.044922,
        },

        // array of objects of markers
        markers: [
          {
            position: new google.maps.LatLng(-27.363882, 137.044922),
            showInfo: false,
            infoContent: _react2.default.createElement(
              "svg",
              {
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
              },
              _react2.default.createElement("path", {
                d:
                  "M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0 .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5 3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11 5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0 1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z",
              })
            ),
          },
          {
            position: new google.maps.LatLng(-23.363882, 129.044922),
            showInfo: false,
            infoContent: _react2.default.createElement(
              "svg",
              {
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
              },
              _react2.default.createElement("path", {
                d:
                  "M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672 13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16 8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368 2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z",
              })
            ),
          },
        ],
      }),
      (_this.handleMarkerClick = _this.handleMarkerClick.bind(_this)),
      (_this.handleMarkerClose = _this.handleMarkerClose.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(PopUpInfoWindowExample, [
    {
      key: "handleMarkerClick",

      // Toggle to 'true' to show InfoWindow and re-renders component
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
      key: "handleMarkerClose",
      value: function handleMarkerClose(targetMarker) {
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
        return _react2.default.createElement(PopUpInfoWindowExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          center: this.state.center,
          markers: this.state.markers,
          onMarkerClick: this.handleMarkerClick,
          onMarkerClose: this.handleMarkerClose,
        })
      },
    },
  ])
  return PopUpInfoWindowExample
})(_react.Component)

exports.default = PopUpInfoWindowExample

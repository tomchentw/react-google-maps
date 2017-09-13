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

var _extends2 = require("babel-runtime/helpers/extends")

var _extends3 = _interopRequireDefault(_extends2)

var _flowRight2 = require("lodash/flowRight")

var _flowRight3 = _interopRequireDefault(_flowRight2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _spinner = require("react-icons/lib/fa/spinner")

var _spinner2 = _interopRequireDefault(_spinner)

var _withScriptjs = require("../../../lib/async/withScriptjs")

var _withScriptjs2 = _interopRequireDefault(_withScriptjs)

var _lib = require("../../../lib")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
var AsyncGettingStartedExampleGoogleMap = (0, _flowRight3.default)(
  _withScriptjs2.default,
  _lib.withGoogleMap
)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      ref: props.onMapLoad,
      defaultZoom: 3,
      defaultCenter: { lat: -25.363882, lng: 131.044922 },
      onClick: props.onMapClick,
    },
    props.markers.map(function(marker) {
      return _react2.default.createElement(
        _lib.Marker,
        (0, _extends3.default)({}, marker, {
          onRightClick: function onRightClick() {
            return props.onMarkerRightClick(marker)
          },
        })
      )
    })
  )
})

var AsyncGettingStartedExample = (function(_Component) {
  ;(0, _inherits3.default)(AsyncGettingStartedExample, _Component)

  function AsyncGettingStartedExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, AsyncGettingStartedExample)

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
          AsyncGettingStartedExample.__proto__ ||
          (0, _getPrototypeOf2.default)(AsyncGettingStartedExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        markers: [
          {
            position: {
              lat: 25.0112183,
              lng: 121.52067570000001,
            },
            key: "Taiwan",
            defaultAnimation: 2,
          },
        ],
      }),
      (_this.handleMapLoad = _this.handleMapLoad.bind(_this)),
      (_this.handleMapClick = _this.handleMapClick.bind(_this)),
      (_this.handleMarkerRightClick = _this.handleMarkerRightClick.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(AsyncGettingStartedExample, [
    {
      key: "handleMapLoad",
      value: function handleMapLoad(map) {
        this._mapComponent = map
        if (map) {
          console.log(map.getZoom())
        }
      },

      /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    },
    {
      key: "handleMapClick",
      value: function handleMapClick(event) {
        var nextMarkers = [].concat(
          (0, _toConsumableArray3.default)(this.state.markers),
          [
            {
              position: event.latLng,
              defaultAnimation: 2,
              key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
          ]
        )
        this.setState({
          markers: nextMarkers,
        })

        if (nextMarkers.length === 3) {
          this.props.toast(
            "Right click on the marker to remove it",
            "Also check the code!"
          )
        }
      },
    },
    {
      key: "handleMarkerRightClick",
      value: function handleMarkerRightClick(targetMarker) {
        /*
       * All you modify is data, and the view is driven by data.
       * This is so called data-driven-development. (And yes, it's now in
       * web front end and even with google maps API.)
       */
        var nextMarkers = this.state.markers.filter(function(marker) {
          return marker !== targetMarker
        })
        this.setState({
          markers: nextMarkers,
        })
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          AsyncGettingStartedExampleGoogleMap,
          {
            googleMapURL:
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg",
            loadingElement: _react2.default.createElement(
              "div",
              { style: { height: "100%" } },
              _react2.default.createElement(_spinner2.default, {
                style: {
                  display: "block",
                  width: "80px",
                  height: "80px",
                  margin: "150px auto",
                  animation: "fa-spin 2s infinite linear",
                },
              })
            ),
            containerElement: _react2.default.createElement("div", {
              style: { height: "100%" },
            }),
            mapElement: _react2.default.createElement("div", {
              style: { height: "100%" },
            }),
            onMapLoad: this.handleMapLoad,
            onMapClick: this.handleMapClick,
            markers: this.state.markers,
            onMarkerRightClick: this.handleMarkerRightClick,
          }
        )
      },
    },
  ])
  return AsyncGettingStartedExample
})(_react.Component)

AsyncGettingStartedExample.propTypes = {
  toast: _react.PropTypes.func.isRequired,
}
exports.default = AsyncGettingStartedExample

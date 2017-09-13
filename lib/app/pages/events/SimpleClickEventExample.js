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
var SimpleClickEventExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      ref: props.onMapMounted,
      zoom: props.zoom,
      center: props.center,
      onCenterChanged: props.onCenterChanged,
    },
    _react2.default.createElement(_lib.Marker, {
      defaultPosition: props.center,
      title: "Click to zoom",
      onClick: props.onMarkerClick,
    })
  )
})

var INITIAL_CENTER = { lat: -25.363882, lng: 131.044922 }

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var SimpleClickEventExample = (function(_Component) {
  ;(0, _inherits3.default)(SimpleClickEventExample, _Component)

  function SimpleClickEventExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, SimpleClickEventExample)

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
          SimpleClickEventExample.__proto__ ||
          (0, _getPrototypeOf2.default)(SimpleClickEventExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        zoom: 4,
        center: INITIAL_CENTER,
      }),
      (_this.handleMapMounted = _this.handleMapMounted.bind(_this)),
      (_this.handleCenterChanged = _this.handleCenterChanged.bind(_this)),
      (_this.handleMarkerClick = _this.handleMarkerClick.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(SimpleClickEventExample, [
    {
      key: "handleMapMounted",
      value: function handleMapMounted(map) {
        this._map = map
      },
    },
    {
      key: "handleMarkerClick",
      value: function handleMarkerClick() {
        this.setState({
          zoom: 8,
        })
      },
    },
    {
      key: "handleCenterChanged",
      value: function handleCenterChanged() {
        var _this2 = this

        var nextCenter = this._map.getCenter()
        if (nextCenter.equals(new google.maps.LatLng(INITIAL_CENTER))) {
          // Notice: Check nextCenter equality here,
          // or it will fire center_changed event infinitely
          return
        }
        if (this._timeoutId) {
          clearTimeout(this._timeoutId)
        }
        this._timeoutId = setTimeout(function() {
          _this2.setState({ center: INITIAL_CENTER })
          _this2._timeoutId = null
        }, 3000)

        this.setState({
          // Because center now is a controlled variable, we need to set it to new
          // value when "center_changed". Or in the next render it will use out-dated
          // state.center and reset the center of the map to the old location.
          // We can never drag the map.
          center: nextCenter,
        })
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._timeoutId) {
          clearTimeout(this._timeoutId)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(SimpleClickEventExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          zoom: this.state.zoom,
          center: this.state.center,
          onMapMounted: this.handleMapMounted,
          onCenterChanged: this.handleCenterChanged,
          onMarkerClick: this.handleMarkerClick,
        })
      },
    },
  ])
  return SimpleClickEventExample
})(_react.Component)

exports.default = SimpleClickEventExample

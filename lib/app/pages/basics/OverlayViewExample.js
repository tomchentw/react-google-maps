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
var STYLES = {
  mapContainer: {
    height: "100%",
  },
  overlayView: {
    background: "white",
    border: "1px solid #ccc",
    padding: 15,
  },
}

function getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) }
}

var OverlayViewExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 8,
      defaultCenter: { lat: -34.397, lng: 150.644 },
    },
    _react2.default.createElement(
      _lib.OverlayView,
      {
        position: { lat: -34.397, lng: 150.644 },
        /*
         * An alternative to specifying position is specifying bounds.
         * bounds can either be an instance of google.maps.LatLngBounds
         * or an object in the following format:
         * bounds={{
         *    ne: { lat: 62.400471, lng: -150.005608 },
         *    sw: { lat: 62.281819, lng: -150.287132 }
         * }}
         */
        /*
         * 1. Specify the pane the OverlayView will be rendered to. For
         *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
         *    Defaults to `OverlayView.OVERLAY_LAYER`.
         */
        mapPaneName: _lib.OverlayView.OVERLAY_MOUSE_TARGET,
        /*
         * 2. Tweak the OverlayView's pixel position. In this case, we're
         *    centering the content.
         */
        getPixelPositionOffset: getPixelPositionOffset,
        /*
         * 3. Create OverlayView content using standard React components.
         */
      },
      _react2.default.createElement(
        "div",
        { style: STYLES.overlayView },
        _react2.default.createElement("h1", null, "OverlayView"),
        _react2.default.createElement(
          "button",
          { onClick: props.onClick },
          "I have been clicked ",
          props.count,
          " time",
          props.count === 1 ? "" : "s"
        )
      )
    )
  )
})

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var OverlayViewExample = (function(_Component) {
  ;(0, _inherits3.default)(OverlayViewExample, _Component)

  function OverlayViewExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, OverlayViewExample)

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
          OverlayViewExample.__proto__ ||
          (0, _getPrototypeOf2.default)(OverlayViewExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        count: 0,
      }),
      (_this.handleClick = _this.handleClick.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(OverlayViewExample, [
    {
      key: "handleClick",
      value: function handleClick() {
        this.setState({ count: this.state.count + 1 })
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(OverlayViewExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          count: this.state.count,
          onClick: this.handleClick,
        })
      },
    },
  ])
  return OverlayViewExample
})(_react.Component)

exports.default = OverlayViewExample

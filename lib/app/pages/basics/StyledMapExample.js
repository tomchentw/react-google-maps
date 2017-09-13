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

var _InfoBox = require("../../../lib/addons/InfoBox")

var _InfoBox2 = _interopRequireDefault(_InfoBox)

var _fancyMapStyles = require("../../constants/fancyMapStyles.json")

var _fancyMapStyles2 = _interopRequireDefault(_fancyMapStyles)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */
var StyledMapExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 5,
      defaultCenter: props.center,
      defaultOptions: { styles: _fancyMapStyles2.default },
    },
    _react2.default.createElement(
      _InfoBox2.default,
      {
        defaultPosition: props.center,
        options: { closeBoxURL: "", enableEventPropagation: true },
      },
      _react2.default.createElement(
        "div",
        {
          style: { backgroundColor: "yellow", opacity: 0.75, padding: "20px" },
          onClick: props.onClickFromChildrenOfInfoBox,
        },
        _react2.default.createElement(
          "div",
          { style: { fontSize: "16px", fontColor: "#08233B" } },
          "Taipei"
        )
      )
    )
  )
})

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var StyledMapExample = (function(_Component) {
  ;(0, _inherits3.default)(StyledMapExample, _Component)

  function StyledMapExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, StyledMapExample)

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
          StyledMapExample.__proto__ ||
          (0, _getPrototypeOf2.default)(StyledMapExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.handleClickFromChildrenOfInfoBox = _this.handleClickFromChildrenOfInfoBox.bind(
        _this
      )),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(StyledMapExample, [
    {
      key: "handleClickFromChildrenOfInfoBox",
      value: function handleClickFromChildrenOfInfoBox(e) {
        console.log("handleClickFromChildrenOfInfoBox!!")
        console.log(e)
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(StyledMapExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          center: new google.maps.LatLng(25.03, 121.6),
          onClickFromChildrenOfInfoBox: this.handleClickFromChildrenOfInfoBox,
        })
      },
    },
  ])
  return StyledMapExample
})(_react.Component)

exports.default = StyledMapExample

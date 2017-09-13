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

var _isomorphicFetch = require("isomorphic-fetch")

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _lib = require("../../../lib")

var _MarkerClusterer = require("../../../lib/addons/MarkerClusterer")

var _MarkerClusterer2 = _interopRequireDefault(_MarkerClusterer)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */
var MarkerClustererExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      defaultZoom: 3,
      defaultCenter: { lat: 25.0391667, lng: 121.525 },
    },
    _react2.default.createElement(
      _MarkerClusterer2.default,
      {
        averageCenter: true,
        enableRetinaIcons: true,
        gridSize: 60,
      },
      props.markers.map(function(marker) {
        return _react2.default.createElement(_lib.Marker, {
          position: { lat: marker.latitude, lng: marker.longitude },
          key: marker.photo_id,
        })
      })
    )
  )
})

var MarkerClustererExample = (function(_Component) {
  ;(0, _inherits3.default)(MarkerClustererExample, _Component)

  function MarkerClustererExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, MarkerClustererExample)

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
          MarkerClustererExample.__proto__ ||
          (0, _getPrototypeOf2.default)(MarkerClustererExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        markers: [],
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(MarkerClustererExample, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this

        ;(0, _isomorphicFetch2.default)(
          "https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json"
        )
          .then(function(res) {
            return res.json()
          })
          .then(function(data) {
            _this2.setState({ markers: data.photos })
          })
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(MarkerClustererExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          markers: this.state.markers,
        })
      },
    },
  ])
  return MarkerClustererExample
})(_react.Component)

exports.default = MarkerClustererExample

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

var _async = require("./pages/async")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var AsyncApp = (function(_Component) {
  ;(0, _inherits3.default)(AsyncApp, _Component)

  function AsyncApp() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, AsyncApp)

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
          AsyncApp.__proto__ ||
          (0, _getPrototypeOf2.default)(AsyncApp)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.handleToast = _this.handleToast.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(AsyncApp, [
    {
      key: "handleToast",
      value: function handleToast() {
        var _window$parent

        ;(_window$parent = window.parent).ReactGoogleMapsToast.apply(
          _window$parent,
          arguments
        ) // See Application
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          _async.AsyncGettingStartedExample,
          {
            toast: this.handleToast,
          }
        )
      },
    },
  ])
  return AsyncApp
})(_react.Component)

exports.default = AsyncApp

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray")

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2)

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray")

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2)

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

var _reactHelmet = require("react-helmet")

var _reactHelmet2 = _interopRequireDefault(_reactHelmet)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var PageWithIframeEntry = (function(_Component) {
  ;(0, _inherits3.default)(PageWithIframeEntry, _Component)

  function PageWithIframeEntry() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, PageWithIframeEntry)

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
          PageWithIframeEntry.__proto__ ||
          (0, _getPrototypeOf2.default)(PageWithIframeEntry)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.isWritten = false),
      (_this.handleIframeMount = _this.handleIframeMount.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(PageWithIframeEntry, [
    {
      key: "handleIframeMount",
      value: function handleIframeMount(iframe) {
        if (iframe && !this.isWritten) {
          this.isWritten = true

          var _filter = []
              .concat(
                (0, _toConsumableArray3.default)(
                  document.querySelectorAll("script")
                )
              )
              .filter(function(script) {
                return script.src.match(/static\/js\/(bundle|main.+)\.js$/)
              }),
            _filter2 = (0, _slicedToArray3.default)(_filter, 1),
            script = _filter2[0]

          var scriptTag = script ? script.outerHTML : ""

          var _filter3 = []
              .concat(
                (0, _toConsumableArray3.default)(
                  document.querySelectorAll("link")
                )
              )
              .filter(function(link) {
                return link.href.match(/static\/css\/(bundle|main.+)\.css$/)
              }),
            _filter4 = (0, _slicedToArray3.default)(_filter3, 1),
            link = _filter4[0]

          var linkTag = link ? link.outerHTML : ""

          var htmlTag =
            "\n<!DOCTYPE html>\n<html>\n  <head>\n    " +
            linkTag +
            '\n    <script type="text/javascript">\nwindow.ReactGoogleMapsAsync = true;\n    </script>\n  </head>\n  <body>\n    <div id="root" />\n    ' +
            scriptTag +
            "\n  </body>\n</html>\n"

          var doc = iframe.contentDocument
          doc.open()
          doc.write(htmlTag)
          doc.close()
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "div",
          { style: { height: "100%" } },
          _react2.default.createElement(_reactHelmet2.default, {
            title: "Async Getting Started",
          }),
          _react2.default.createElement(
            "h3",
            { style: { marginTop: 0 } },
            "Load Google Maps JavaScript API asynchronously!",
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "small",
              null,
              "The map is loaded in an iframe to create an isloated runtime. During loading, we show up a loading spinner."
            )
          ),
          _react2.default.createElement("iframe", {
            ref: this.handleIframeMount,
            style: { width: "100%", height: "100%" },
          })
        )
      },
    },
  ])
  return PageWithIframeEntry
})(_react.Component)

exports.default = PageWithIframeEntry

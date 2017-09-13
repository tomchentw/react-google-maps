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

var _reactRouter = require("react-router")

var _reactBootstrap = require("react-bootstrap")

var _reactRouterBootstrap = require("react-router-bootstrap")

var _reactGithubForkRibbon = require("react-github-fork-ribbon")

var _reactGithubForkRibbon2 = _interopRequireDefault(_reactGithubForkRibbon)

var _reactToastr = require("react-toastr")

var _reactPrism = require("react-prism")

var _reactHelmet = require("react-helmet")

var _reactHelmet2 = _interopRequireDefault(_reactHelmet)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var Application = (function(_Component) {
  ;(0, _inherits3.default)(Application, _Component)

  function Application() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, Application)

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
          Application.__proto__ ||
          (0, _getPrototypeOf2.default)(Application)).call.apply(
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

  ;(0, _createClass3.default)(Application, [
    {
      key: "handleToast",
      value: function handleToast(title, message) {
        this.refs.toast.success(title, message)
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        window.ReactGoogleMapsToast = this.handleToast // For AsyncApp
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "div",
          { className: "full-height" },
          _react2.default.createElement(_reactHelmet2.default, {
            titleTemplate: "%s | React Google Maps | tomchentw",
            meta: [
              {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
              },
              {
                name: "description",
                content: "react-google-maps example application",
              },
              { property: "og:type", content: "article" },
            ],
          }),
          _react2.default.createElement(
            _reactBootstrap.Navbar,
            { fluid: true },
            _react2.default.createElement(
              _reactBootstrap.Navbar.Header,
              null,
              _react2.default.createElement(
                _reactBootstrap.Navbar.Brand,
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: "/" },
                  "React Google Maps"
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Nav,
              null,
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { href: "https://github.com/tomchentw", target: "_blank" },
                "by @tomchentw"
              ),
              _react2.default.createElement(
                _reactBootstrap.NavDropdown,
                { id: "examples-dropdown", title: "Examples" },
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/simple-map" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Simple map"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/styled-map" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Styled map"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/geolocation" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Geolocation"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/directions" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Directions"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/overlay-view" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Overlay view"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/kml-layer" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "KmlLayer"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/fusion-tables-layer" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Fusion Tables Layer"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/pop-up-window" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Pop-up InfoWindow"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/traffic-layer" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Traffic Layer"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/basics/streetview-panorama" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "StreetView Panorama"
                  )
                ),
                _react2.default.createElement(_reactBootstrap.MenuItem, {
                  divider: true,
                }),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/events/simple-click-event" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Simple click event"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/events/closure-listeners" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Using closures in event listeners"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/events/accessing-arguments" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Accessing arguments in UI events"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/events/getting-properties" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Getting properties with event handlers"
                  )
                ),
                _react2.default.createElement(_reactBootstrap.MenuItem, {
                  divider: true,
                }),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/drawing/drawing-tools" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Drawing tools"
                  )
                ),
                _react2.default.createElement(_reactBootstrap.MenuItem, {
                  divider: true,
                }),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/places/search-box" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Adding a places search box"
                  )
                ),
                _react2.default.createElement(_reactBootstrap.MenuItem, {
                  divider: true,
                }),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/addons/marker-clusterer" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Marker clusterer addon with Marker"
                  )
                ),
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/addons/marker-with-label" },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    null,
                    "Marker with Label"
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Navbar.Collapse,
              { style: { marginRight: 100 } },
              _react2.default.createElement(
                _reactBootstrap.Nav,
                { pullRight: true },
                _react2.default.createElement(
                  _reactRouterBootstrap.LinkContainer,
                  { to: "/async" },
                  _react2.default.createElement(
                    _reactBootstrap.NavItem,
                    null,
                    "Async example"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "container-fluid full-height" },
            _react2.default.createElement(
              _reactGithubForkRibbon2.default,
              {
                position: "right",
                color: "black",
                href: "https://github.com/tomchentw/react-google-maps",
              },
              "Fork me on GitHub"
            ),
            _react2.default.createElement(_reactToastr.ToastContainer, {
              ref: "toast",
              toastMessageFactory: _react2.default.createFactory(
                _reactToastr.ToastMessage.animation
              ),
            }),
            _react2.default.createElement(
              "div",
              { className: "row full-height" },
              _react2.default.createElement(
                "div",
                { className: "col-xs-6", style: { height: "100%" } },
                _react2.default.cloneElement(
                  _react.Children.only(this.props.children),
                  {
                    toast: this.handleToast,
                  }
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col-xs-6" },
                _react2.default.createElement(
                  "pre",
                  null,
                  _react2.default.createElement(
                    _reactPrism.PrismCode,
                    { className: "language-javascript" },
                    _react.Children.only(this.props.children).type.__raw
                  )
                )
              )
            )
          )
        )
      },
    },
  ])
  return Application
})(_react.Component)

Application.propTypes = {
  children: _react.PropTypes.element.isRequired,
}
exports.default = Application

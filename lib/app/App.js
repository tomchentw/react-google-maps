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

var _history = require("history")

var _containers = require("./containers")

var _pages = require("./pages")

var _async = require("./pages/async")

var _basics = require("./pages/basics")

var _events = require("./pages/events")

var _drawing = require("./pages/drawing")

var _places = require("./pages/places")

var _addons = require("./pages/addons")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var history = (0, _reactRouter.useRouterHistory)(_history.createHistory)({
  basename: "/react-google-maps",
})

var App = (function(_Component) {
  ;(0, _inherits3.default)(App, _Component)

  function App() {
    ;(0, _classCallCheck3.default)(this, App)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (App.__proto__ || (0, _getPrototypeOf2.default)(App))
        .apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(App, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          _reactRouter.Router,
          { history: history },
          _react2.default.createElement(
            _reactRouter.Route,
            { path: "/", component: _containers.Application },
            _react2.default.createElement(_reactRouter.IndexRoute, {
              component: _pages.GettingStartedExample,
            }),
            _react2.default.createElement(
              _reactRouter.Route,
              { path: "basics" },
              _react2.default.createElement(_reactRouter.Route, {
                path: "simple-map",
                component: _basics.SimpleMapExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "styled-map",
                component: _basics.StyledMapExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "geolocation",
                component: _basics.GeolocationExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "directions",
                component: _basics.DirectionsExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "overlay-view",
                component: _basics.OverlayViewExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "kml-layer",
                component: _basics.KmlLayerExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "fusion-tables-layer",
                component: _basics.FusionTablesLayerExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "pop-up-window",
                component: _basics.PopUpInfoWindowExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "traffic-layer",
                component: _basics.TrafficLayerExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "streetview-panorama",
                component: _basics.StreetViewPanoramaExample,
              })
            ),
            _react2.default.createElement(
              _reactRouter.Route,
              { path: "events" },
              _react2.default.createElement(_reactRouter.Route, {
                path: "simple-click-event",
                component: _events.SimpleClickEventExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "closure-listeners",
                component: _events.ClosureListenersExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "accessing-arguments",
                component: _events.AccessingArgumentsExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "getting-properties",
                component: _events.GettingPropertiesExample,
              })
            ),
            _react2.default.createElement(
              _reactRouter.Route,
              { path: "drawing" },
              _react2.default.createElement(_reactRouter.Route, {
                path: "drawing-tools",
                component: _drawing.DrawingExample,
              })
            ),
            _react2.default.createElement(
              _reactRouter.Route,
              { path: "places" },
              _react2.default.createElement(_reactRouter.Route, {
                path: "search-box",
                component: _places.SearchBoxExample,
              })
            ),
            _react2.default.createElement(
              _reactRouter.Route,
              { path: "addons" },
              _react2.default.createElement(_reactRouter.Route, {
                path: "marker-clusterer",
                component: _addons.MarkerClustererExample,
              }),
              _react2.default.createElement(_reactRouter.Route, {
                path: "marker-with-label",
                component: _addons.MarkerWithLabelExample,
              })
            ),
            _react2.default.createElement(_reactRouter.Route, {
              path: "async",
              component: _async.PageWithIframeEntry,
            }),
            _react2.default.createElement(_reactRouter.Redirect, {
              path: "*",
              to: "/",
            })
          )
        )
      },
    },
  ])
  return App
})(_react.Component)

exports.default = App

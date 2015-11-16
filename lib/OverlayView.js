"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsOverlayViewCreator = require("./creators/OverlayViewCreator");

var _creatorsOverlayViewCreator2 = _interopRequireDefault(_creatorsOverlayViewCreator);

/*
 * Original author: @petebrowne
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/63
 */

var OverlayView = (function (_Component) {
  _inherits(OverlayView, _Component);

  function OverlayView() {
    _classCallCheck(this, OverlayView);

    _get(Object.getPrototypeOf(OverlayView.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(OverlayView, [{
    key: "getPanes",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getPanes() {
      return this.state.overlayView.getPanes();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.state.overlayView.getProjection();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var overlayView = _creatorsOverlayViewCreator2["default"]._createOverlayView(this.props);

      this.setState({ overlayView: overlayView });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.overlayView) {
        return _react2["default"].createElement(
          _creatorsOverlayViewCreator2["default"],
          _extends({ overlayView: this.state.overlayView }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "FLOAT_PANE",
    value: "floatPane",
    enumerable: true
  }, {
    key: "MAP_PANE",
    value: "mapPane",
    enumerable: true
  }, {
    key: "MARKER_LAYER",
    value: "markerLayer",
    enumerable: true
  }, {
    key: "OVERLAY_LAYER",
    value: "overlayLayer",
    enumerable: true
  }, {
    key: "OVERLAY_MOUSE_TARGET",
    value: "overlayMouseTarget",
    enumerable: true
  }, {
    key: "propTypes",
    value: _extends({}, _creatorsOverlayViewCreator.overlayViewDefaultPropTypes, _creatorsOverlayViewCreator.overlayViewControlledPropTypes),
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      mapPaneName: OverlayView.OVERLAY_LAYER
    },
    enumerable: true
  }]);

  return OverlayView;
})(_react.Component);

exports["default"] = OverlayView;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate
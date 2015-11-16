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

var _creatorsDirectionsRendererCreator = require("./creators/DirectionsRendererCreator");

var _creatorsDirectionsRendererCreator2 = _interopRequireDefault(_creatorsDirectionsRendererCreator);

/*
 * Original author: @alexishevia
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/22
 */

var DirectionsRenderer = (function (_Component) {
  _inherits(DirectionsRenderer, _Component);

  function DirectionsRenderer() {
    _classCallCheck(this, DirectionsRenderer);

    _get(Object.getPrototypeOf(DirectionsRenderer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(DirectionsRenderer, [{
    key: "getDirections",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDirections() {
      return this.state.directionsRenderer.getDirections();
    }
  }, {
    key: "getPanel",
    value: function getPanel() {
      return this.state.directionsRenderer.getPanel();
    }
  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      return this.state.directionsRenderer.getRouteIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var directionsRenderer = _creatorsDirectionsRendererCreator2["default"]._createDirectionsRenderer(this.props);

      this.setState({ directionsRenderer: directionsRenderer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.directionsRenderer) {
        return _react2["default"].createElement(
          _creatorsDirectionsRendererCreator2["default"],
          _extends({ directionsRenderer: this.state.directionsRenderer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsDirectionsRendererCreator.directionsRendererDefaultPropTypes, _creatorsDirectionsRendererCreator.directionsRendererControlledPropTypes, _creatorsDirectionsRendererCreator.directionsRendererEventPropTypes),
    enumerable: true
  }]);

  return DirectionsRenderer;
})(_react.Component);

exports["default"] = DirectionsRenderer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
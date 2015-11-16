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

var _creatorsPolylineCreator = require("./creators/PolylineCreator");

var _creatorsPolylineCreator2 = _interopRequireDefault(_creatorsPolylineCreator);

var Polyline = (function (_Component) {
  _inherits(Polyline, _Component);

  function Polyline() {
    _classCallCheck(this, Polyline);

    _get(Object.getPrototypeOf(Polyline.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(Polyline, [{
    key: "getDraggable",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDraggable() {
      return this.state.polyline.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.polyline.getEditable();
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return this.state.polyline.getPath();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.polyline.getVisible();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var polyline = _creatorsPolylineCreator2["default"]._createPolyline(this.props);

      this.setState({ polyline: polyline });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.polyline) {
        return _react2["default"].createElement(
          _creatorsPolylineCreator2["default"],
          _extends({ polyline: this.state.polyline }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsPolylineCreator.polylineDefaultPropTypes, _creatorsPolylineCreator.polylineControlledPropTypes, _creatorsPolylineCreator.polylineEventPropTypes),
    enumerable: true
  }]);

  return Polyline;
})(_react.Component);

exports["default"] = Polyline;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
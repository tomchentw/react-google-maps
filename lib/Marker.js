"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _internalsSimpleChildComponent = require("./internals/SimpleChildComponent");

var _internalsSimpleChildComponent2 = _interopRequireDefault(_internalsSimpleChildComponent);

var _internalsCreateRegisterEvents = require("./internals/createRegisterEvents");

var _internalsCreateRegisterEvents2 = _interopRequireDefault(_internalsCreateRegisterEvents);

var _InfoWindow = require("./InfoWindow");

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

var Children = _react2["default"].Children;

var Marker = (function (_SimpleChildComponent) {
  function Marker() {
    _classCallCheck(this, Marker);

    _get(Object.getPrototypeOf(Marker.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(Marker, _SimpleChildComponent);

  _createClass(Marker, [{
    key: "render",
    value: function render() {
      if (0 === Children.count(this.props.children)) {
        return _react2["default"].createElement("noscript", null);
      }

      return _react2["default"].createElement(
        "div",
        null,
        this._render_potential_info_windows_()
      );
    }
  }, {
    key: "_render_potential_info_windows_",
    value: function _render_potential_info_windows_() {
      var props = this.props;

      var extraProps = {
        googleMapsApi: props.googleMapsApi,
        map: props.map,
        anchor: this.state.instance
      };

      return Children.map(props.children, function (child) {
        if (_react2["default"].isValidElement(child) && child.type === _InfoWindow2["default"]) {
          child = _react2["default"].cloneElement(child, extraProps);
        }
        return child;
      }, this);
    }
  }]);

  return Marker;
})(_internalsSimpleChildComponent2["default"]);

Marker._GoogleMapsClassName = "Marker";

Marker._registerEvents = (0, _internalsCreateRegisterEvents2["default"])("animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shape_changed title_changed visible_changed zindex_changed");

exports["default"] = Marker;
module.exports = exports["default"];
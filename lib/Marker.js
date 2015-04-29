"use strict";

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require("react");

var _React2 = _interopRequireDefault(_React);

var _SimpleChildComponent2 = require("./internals/SimpleChildComponent");

var _SimpleChildComponent3 = _interopRequireDefault(_SimpleChildComponent2);

var _createRegisterEvents = require("./internals/createRegisterEvents");

var _createRegisterEvents2 = _interopRequireDefault(_createRegisterEvents);

var _InfoWindow = require("./InfoWindow");

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

var Children = _React2["default"].Children;

var Marker = (function (_SimpleChildComponent) {
  function Marker() {
    _classCallCheck(this, Marker);

    if (_SimpleChildComponent != null) {
      _SimpleChildComponent.apply(this, arguments);
    }
  }

  _inherits(Marker, _SimpleChildComponent);

  _createClass(Marker, [{
    key: "render",
    value: function render() {
      if (0 === Children.count(this.props.children)) {
        return _React2["default"].createElement("noscript", null);
      }

      return _React2["default"].createElement(
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
        anchor: this.state.instance };

      return Children.map(props.children, function (child) {
        if (_React2["default"].isValidElement(child) && child.type === _InfoWindow2["default"]) {
          child = _React2["default"].cloneElement(child, extraProps);
        }
        return child;
      }, this);
    }
  }]);

  return Marker;
})(_SimpleChildComponent3["default"]);

Marker._GoogleMapsClassName = "Marker";

Marker._registerEvents = _createRegisterEvents2["default"]("animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shape_changed title_changed visible_changed zindex_changed");

exports["default"] = Marker;
module.exports = exports["default"];
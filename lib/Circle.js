"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _internalsSimpleChildComponent = require("./internals/SimpleChildComponent");

var _internalsSimpleChildComponent2 = _interopRequireDefault(_internalsSimpleChildComponent);

var _internalsCreateRegisterEvents = require("./internals/createRegisterEvents");

var _internalsCreateRegisterEvents2 = _interopRequireDefault(_internalsCreateRegisterEvents);

var Circle = (function (_SimpleChildComponent) {
  function Circle() {
    _classCallCheck(this, Circle);

    if (_SimpleChildComponent != null) {
      _SimpleChildComponent.apply(this, arguments);
    }
  }

  _inherits(Circle, _SimpleChildComponent);

  return Circle;
})(_internalsSimpleChildComponent2["default"]);

Circle._GoogleMapsClassName = "Circle";

Circle._registerEvents = (0, _internalsCreateRegisterEvents2["default"])("center_changed click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup radius_changed rightclick");

exports["default"] = Circle;
module.exports = exports["default"];